# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt
import frappe

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)
    return columns, data


def get_columns():
    return [
        {"label": "Employee ID", "fieldname": "employee", "fieldtype": "Link", "options": "Employee", "width": 120},
        {"label": "Employee Name", "fieldname": "employee_name", "fieldtype": "Data", "width": 150},
        {"label": "Department", "fieldname": "department", "fieldtype": "Link", "options": "Department", "width": 150},
        {"label": "Designation", "fieldname": "designation", "fieldtype": "Link", "options": "Designation", "width": 150},
        {"label": "Date of Joining", "fieldname": "date_of_joining", "fieldtype": "Date", "width": 120},

        {"label": "Employee Score", "fieldname": "employee_score", "fieldtype": "Float", "width": 120},
        {"label": "Employee Self Rating", "fieldname": "as_employee_what_he_deserve", "fieldtype": "Data", "width": 160},

        {"label": "Manager Name", "fieldname": "reports_to_name", "fieldtype": "Data", "width": 150},
        {"label": "Manager Rating", "fieldname": "manager_rating", "fieldtype": "Float", "width": 120},
        {"label": "Manager Final Comment", "fieldname": "manager_final_comment", "fieldtype": "Data", "width": 200},
        {"label": "Manager Increment %", "fieldname": "as_manager_increment_percentage", "fieldtype": "Float", "width": 150},
        {"label": "Manager Promotion Designation", "fieldname": "manager_updated_designation", "fieldtype": "Data", "width": 180},
        {"label": "Manager Promotion Department", "fieldname": "manager_updated_department", "fieldtype": "Data", "width": 180},
        {"label": "Manager Promotion?", "fieldname": "is_first_manager_promotion", "fieldtype": "Data", "width": 120},

        {"label": "Second Manager Name", "fieldname": "manager2", "fieldtype": "Data", "width": 150},
        {"label": "Second Manager Rating", "fieldname": "manager2Rating", "fieldtype": "Float", "width": 150},
        {"label": "Second Manager Comment", "fieldname": "manager2Comment", "fieldtype": "Data", "width": 200},
        {"label": "Second Manager Increment %", "fieldname": "manager2Increment", "fieldtype": "Float", "width": 150},
        {"label": "2nd Manager Promotion Designation", "fieldname": "manager2PromotionDesignation", "fieldtype": "Data", "width": 200},
        {"label": "2nd Manager Promotion Department", "fieldname": "manager2PromotionDepartment", "fieldtype": "Data", "width": 200},
        {"label": "2nd Manager Promotion?", "fieldname": "manager2Promotion", "fieldtype": "Data", "width": 120},
    ]

def get_data(filters):
    if not filters.get("appraisal_cycle"):
        frappe.msgprint("Please select an Appraisal Cycle to view the report.")
        return []

    values = {"appraisal_cycle": filters.get("appraisal_cycle")}

    query = """
        SELECT
            employee,
            employee_name,
            department,
            designation,
            date_of_joining,

            employee_score,
            as_employee_what_he_deserve,

            reports_to_name,
            manager_rating,
            manager_final_comment,
            as_manager_increment_percentage,
            manager_updated_designation,
            manager_updated_department,
            is_first_manager_promotion,

            reports_to_second_name AS manager2,
            second_manager_rating AS manager2Rating,
            second_manager_comment AS manager2Comment,
            as_second_manager_increment_percentage_copy AS manager2Increment,
            second_manager_updated_designation AS manager2PromotionDesignation,
            second_manager_updated_department AS manager2PromotionDepartment,
            is_second_manager_promotion

        FROM `tabAppraisal List`
        WHERE docstatus < 2 
        AND appraisal_cycle = %(appraisal_cycle)s
        ORDER BY employee_name
    """

    records = frappe.db.sql(query, values, as_dict=True)

    for row in records:
        row["manager2Promotion"] = "Yes" if row.get("is_second_manager_promotion") else "No"

    return records
