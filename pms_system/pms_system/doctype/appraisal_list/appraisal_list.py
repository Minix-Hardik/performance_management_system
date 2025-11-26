# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AppraisalList(Document):
    def validate(self):
        self.update_competency_rows()
        self.update_kra_rows()
        self.add_question()
        self.check_duplicate_entry()

    def update_competency_rows(self):
        if not self.competency_rating:
            return
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
    def add_question(self):
        if not self.question:
            return
        existing = {d.title for d in self.answer}
        questions = frappe.get_all(
            "Question Master",
            filters={"disable": 0},
            fields=["title","question","question_type","options"]
        )
        for ques in questions:
            if ques.title not in existing:
                self.append("answer", {
                    "title": ques.title,
                    "question": ques.question,
                    "question_type": ques.question_type,
                    "options": ques.options
                })

    def update_kra_rows(self):
        if not self.employee or not self.kra_rating:
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

    def check_duplicate_entry(self):
        if not self.employee or not self.appraisal_cycle:
            return

        # Filter for existing Appraisal List for same employee & cycle
        existing = frappe.get_all(
            "Appraisal List",
            filters={
                "employee": self.employee,
                "appraisal_cycle": self.appraisal_cycle,
                "name": ("!=", self.name)   # exclude current doc
            },
            fields=["name"]
        )

        if existing:
            docname = existing[0].name
            employee_name = frappe.db.get_value("Employee", self.employee, "employee_name")
            frappe.throw(
                f"<b>{docname}</b> already exists for Employee <b>{employee_name}</b> "
                f"for this Appraisal Cycle or overlapping period",
                title="Duplicate Entry"
            )

