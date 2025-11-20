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

