import frappe
from frappe import _
from frappe.utils import get_url_to_form, formatdate


def get_reports_to(employee, level):
    """
    level = 1  → Single Level
    level = 2  → Second Level
    """
    first_manager = frappe.db.get_value("Employee", employee, "reports_to")

    if not first_manager:
        return None

    if level == 1:
        return first_manager

    second_manager = frappe.db.get_value("Employee", first_manager, "reports_to")
    return second_manager if second_manager else first_manager


def notify_employee_appraisal(appraisal, employee):
    """Send **only email** to the employee."""

    employee_doc = frappe.get_doc("Employee", employee)
    employee_user = frappe.get_doc("User", employee_doc.user_id)
    email = employee_user.email or employee_user.name

    if not email:
        return
    sender = frappe.db.get_value("Email Account", {"default_outgoing": 1}, "email_id")
    if not sender:
        sender = frappe.db.get_value("Email Account", "email_id")
    # Link to document
    doc_link = get_url_to_form(appraisal.doctype, appraisal.name)

    subject = _("Appraisal created for cycle {0}").format(appraisal.appraisal_cycle)
    html_message = _(
        """Dear {0},<br><br>
        Your appraisal for the cycle <b>{1}</b> has been created.<br>
        Period: {2} to {3}.<br><br>
        <a href="{4}">Click here to open your appraisal.</a><br><br>
        Regards,<br>{5}"""
    ).format(
        employee_doc.employee_name,
        appraisal.appraisal_cycle,
        formatdate(appraisal.start_date),
        formatdate(appraisal.end_date),
        doc_link,
        frappe.get_system_settings("company_name")
        if frappe.db.exists("System Settings", "System Settings")
        else frappe.session.user,
    )
    frappe.sendmail(
        recipients=[email],
        sender=sender,
        subject=subject,
        message=html_message,
        reference_doctype=appraisal.doctype,
        reference_name=appraisal.name,
    )


@frappe.whitelist()
def create_appraisal_list(doc_name):
    doc = frappe.get_doc("Appraisal Cycle", doc_name)
    employees = doc.appraisees

    created_appraisals = []
    report_level = 1 if doc.custom_reports_to == "Single Level" else 2

    if employees:
        for d in employees:
            manager = get_reports_to(d.employee, report_level)

            appraisal = frappe.get_doc(
                {
                    "doctype": "Appraisal List",
                    "employee": d.employee,
                    "appraisal_cycle": doc.name,
                    "start_date": doc.start_date,
                    "end_date": doc.end_date,
                    "reports_to": manager,
                }
            )

            appraisal.insert(ignore_permissions=True)
            created_appraisals.append(appraisal.name)

            notify_employee_appraisal(appraisal, d.employee)

        frappe.msgprint(_("Appraisal Lists created successfully."))
    else:
        frappe.msgprint(_("No employees found in Appraisees table."))

    return created_appraisals
