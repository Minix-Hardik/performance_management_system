import frappe


def get_permission_query_conditions(user):
    if not user:
        user = frappe.session.user

    roles = frappe.get_roles(user)
    if user == "Administrator" or "HR Manager" in roles or "System Manager" in roles:
        return ""

    employee = frappe.db.get_value("Employee", {"user_id": user}, "name")
    if not employee:
        return "1=2"

    return f"""
        (`tabEmployee Performance Feedback`.employee != '{employee}'
        AND (`tabEmployee Performance Feedback`.reviewer = '{employee}' OR `tabEmployee Performance Feedback`.user = '{user}'))
    """


def has_permission(doc, ptype="read", user=None, debug=False):
    if not user:
        user = frappe.session.user

    roles = frappe.get_roles(user)
    if user == "Administrator" or "HR Manager" in roles or "System Manager" in roles:
        return True

    employee = frappe.db.get_value("Employee", {"user_id": user}, "name")
    if not employee:
        return False

    if isinstance(doc, str):
        doc = frappe.get_doc("Employee Performance Feedback", doc)

    # When creating feedback
    if ptype == "create":
        # Disallow employee from creating feedback for themselves
        if doc.get("employee") and doc.get("employee") == employee:
            return False
        return True

    # If employee == employee, do not show / deny permission
    if doc.get("employee") == employee:
        return False

    # If employee == reviewer, show / allow all records for manager
    if doc.get("reviewer") == employee or (doc.get("user") and doc.get("user") == user):
        return True

    return False
