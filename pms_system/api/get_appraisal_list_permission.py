import frappe


def get_permission_query_conditions(user):
    roles = frappe.get_roles(user)

    if user == "Administrator" or "HR Manager" in roles:
        return ""

    employee = frappe.db.get_value("Employee", {"user_id": user}, "name")
    if not employee:
        return "1=2"

    return f"""
        (`tabAppraisal List`.employee = '{employee}'
        OR `tabAppraisal List`.reports_to = '{employee}'
        OR `tabAppraisal List`.reports_to_second = '{employee}')
    """




