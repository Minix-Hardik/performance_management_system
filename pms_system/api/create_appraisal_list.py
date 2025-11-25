import frappe
from frappe import _

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


@frappe.whitelist()
def create_appraisal_list(doc_name):
    doc = frappe.get_doc("Appraisal Cycle", doc_name)
    employees = doc.appraisees 
    appraisal_templates = doc.get_appraisal_template_map() if hasattr(doc, "get_appraisal_template_map") else {}

    created_appraisals = []
    report_level = 1 if doc.custom_reports_to == "Single Level" else 2
    if employees:
        for d in employees:
            manager = get_reports_to(d.employee, report_level)
            appraisal = frappe.get_doc({
                "doctype": "Appraisal List",
                "employee": d.employee,          
                "appraisal_cycle": doc.name,
                "start_date": doc.start_date,
                "end_date": doc.end_date,
                "reports_to":manager
            })

            appraisal.insert(ignore_permissions=True)
            created_appraisals.append(appraisal.name)
        frappe.msgprint(_("Appraisal Lists created successfully."))

    else:
        frappe.msgprint(_("No employees found in Appraisees table."))

    return created_appraisals

