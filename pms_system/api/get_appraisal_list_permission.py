import frappe

import frappe

def get_permission_query_conditions(user):
    if user == "Administrator":
        return ""
    if "HR Manager" in frappe.get_roles(user):
        return ""
    employee = frappe.db.get_value("Employee", {"user_id": user}, "name")
    if not employee:
        return "1=2"
    return f"""
        (`tabAppraisal List`.employee = '{employee}'
        OR `tabAppraisal List`.reports_to = '{employee}')
    """


