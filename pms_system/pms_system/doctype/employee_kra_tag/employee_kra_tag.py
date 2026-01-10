# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class EmployeeKRATag(Document):
    def validate(self):
        self.validate_duplicate_kra()
        self.validate_total_weightage()

    def validate_duplicate_kra(self):
        seen = set()
        for row in self.kra_and_goal_add:
            if row.kra in seen:
                frappe.throw(f"Duplicate KRA not allowed: <b>{row.kra}</b>")
            seen.add(row.kra)

    def validate_total_weightage(self):
        total = sum([row.weightage for row in self.kra_and_goal_add])

        if total != 100:
            frappe.throw(f"Total Weightage must be exactly 100%. Currently: <b>{total}%</b>")



@frappe.whitelist()
def get_kra_list(doctype, txt, searchfield, start, page_len, filters):
    employee = filters.get("employee")
    if not employee:
        return []

    emp = frappe.get_doc("Employee", employee)
    designation = emp.designation
    department = emp.department

    return frappe.db.sql("""
        SELECT name
        FROM `tabKRA`
        WHERE
            -- Case 1: Both des & dept set in KRA
            (
                custom_designation IS NOT NULL
                AND custom_department IS NOT NULL
                AND custom_designation = %(designation)s
                AND custom_department = %(department)s
            )
            OR
            -- Case 2: only designation set
            (
                custom_designation IS NOT NULL
                AND custom_department IS NULL
                AND custom_designation = %(designation)s
            )
            OR
            -- Case 3: only department set
            (
                custom_designation IS NULL
                AND custom_department IS NOT NULL
                AND custom_department = %(department)s
            )
            OR
            -- Case 4: both empty → show for all
            (
                custom_designation IS NULL
                AND custom_department IS NULL
            )
            AND {search} LIKE %(txt)s
        LIMIT %(start)s, %(page_len)s
    """.format(search=searchfield), {
        "designation": designation,
        "department": department,
        "txt": "%" + txt + "%",
        "start": start,
        "page_len": page_len
    })

