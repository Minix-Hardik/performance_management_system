import frappe
from datetime import datetime, timedelta





def send_email(employee_id, appraisal_list_name, end_date, remaining_days, phase):
    """Generic email sender for self appraisal / manager review."""

    employee = frappe.get_doc("Employee", employee_id)
    user_id = employee.user_id

    if not user_id:
        return

    email = frappe.db.get_value("User", user_id, "email")
    if not email:
        return
    if phase == "self":
        subject = "Reminder: Self Appraisal Deadline Approaching"
        intro = f"This is a reminder that your self appraisal (Appraisal List: <b>{appraisal_list_name}</b>)"
    elif phase == "manager":
        subject = "Reminder: Manager Review Deadline Approaching"
        intro = (
            f"This is a reminder that the manager review for "
            f"(Appraisal List: <b>{appraisal_list_name}</b>) is due soon."
        )
    else:
        subject = "Reminder: Appraisal Deadline Approaching"
        intro = f"This is a reminder regarding Appraisal List: <b>{appraisal_list_name}</b>"

    day_text = "days"
    if remaining_days == 1:
        day_text = "day"
    elif remaining_days == 0:
        day_text = "day"

    message = f"""
        Dear Employee,<br><br>

        {intro}<br>
        It will close on <b>{end_date}</b>.<br>
        Only <b>{remaining_days}</b> {day_text} are left to complete it.<br><br>

        Please log in to the system and complete the pending actions.<br><br>

        Regards,<br>
        HR Team
    """

    frappe.sendmail(
        recipients=[email],
        subject=subject,
        message=message,
    )


def send_self_appraisal_reminder():
    today = frappe.utils.getdate()

    appraisal_lists = frappe.get_all(
        "Appraisal List",
        filters={"workflow_state": "Self Appraisal"},
        fields=["name", "employee", "appraisal_cycle", "self_appraisal_reminder_send"]
    )

    for app in appraisal_lists:
        if app.self_appraisal_reminder_send:
            continue

        cycle = frappe.get_doc("Appraisal Cycle", app.appraisal_cycle)

        start = cycle.custom_self_appraisal_start_date
        end = cycle.custom_self_appraisal_end_date

        if not (start and end):
            continue

        remaining_days = (end - today).days

        # 0, 1 or 2 days left
        if 0 <= remaining_days <= 2:
            send_email(app.employee, app.name, end, remaining_days,phase="self")

            # mark as sent so we don't send again
            frappe.db.set_value(
                "Appraisal List",
                app.name,
                "self_appraisal_reminder_send",
                1
            )

def send_manager_review_reminder():
    today = frappe.utils.getdate()

    appraisal_lists = frappe.get_all(
        "Appraisal List",
        filters={"workflow_state": "Self Appraisal"},
        fields=["name", "reports_to", "appraisal_cycle", "manager_review_reminder_sent"]
    )

    for app in appraisal_lists:
        if app.manager_review_reminder_sent:
            continue

        cycle = frappe.get_doc("Appraisal Cycle", app.appraisal_cycle)

        start = cycle.custom_manager_review_start_date
        end = cycle.custom_manager_review_end_date

        if not (start and end):
            continue
        remaining_days = (end - today).days
        if 0 <= remaining_days <= 2:
            send_email(app.reports_to, app.name, end, remaining_days,phase="manager")

            frappe.db.set_value(
                "Appraisal List",
                app.name,
                "manager_review_reminder_sent",
                1
            )
