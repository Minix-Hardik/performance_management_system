# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AppraisalList(Document):
    def validate(self):
        self.update_competency_rows()
        self.update_kra_rows()

    def update_competency_rows(self):
        existing = {d.competency for d in self.competency}

        competencies = frappe.get_all(
            "Competency",
            filters={"disabled": 0},
            fields=["name", "weightage"]
        )

        for comp in competencies:
            if comp.name not in existing:
                self.append("competency", {
                    "competency": comp.name,
                    "weightage": comp.weightage
                })

    def update_kra_rows(self):
        if not self.employee:
            return

        try:
            employee_kra = frappe.get_doc("Employee KRA Tag", self.employee)
        except frappe.DoesNotExistError:
            return

        existing_kra = {row.kra for row in self.kra}
        existing_vs_goal = {row.kra for row in self.kra_vs_goal}

        for row in employee_kra.kra_and_goal_add:
            if row.kra not in existing_kra:
                self.append("kra", {
                    "kra": row.kra,
                    "weightage": row.weightage
                })

        for row in employee_kra.kra_vs_goal:
            if row.kra not in existing_vs_goal:
                self.append("kra_vs_goal", {
                    "kra": row.kra,
					"goal": row.goal
                })
