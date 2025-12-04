# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AppraisalList(Document):

    def before_workflow_action(self, action):
        current_user = frappe.session.user
        if action == "Submit Self Appraisal":
            if current_user != self.employee_user_id:
                frappe.throw("Only the employee can submit Self Appraisal.")
        elif action == "Manager Review":
            if current_user != self.reports_to_user_id:
                frappe.throw("Only the reporting manager can perform Manager Appraisal.")
        elif action == "Approve":
            if current_user != self.reports_to_user_id:
                frappe.throw("Only the reporting manager can approve this appraisal.")

    def validate(self):
        # Only checks needed in every save
        self.check_duplicate_entry()
        self.update_kra_rows()   # KRA should sync whenever employee's KRA Tag changes

    def after_insert(self):
        self.update_competency_rows()
        self.add_question()
        self.save(ignore_permissions=True)

    # ----------------------------
    # COMPETENCY – Add Only Once
    # ----------------------------
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

    # ----------------------------
    # QUESTIONS – Add Only Once
    # ----------------------------
    def add_question(self):
        existing = {d.title for d in self.answer}

        questions = frappe.get_all(
            "Question Master",
            filters={"disable": 0},
            fields=["title", "question"]
        )

        for ques in questions:
            if ques.title not in existing:
                self.append("answer", {
                    "title": ques.title,
                    "question": ques.question,
                })

    # ----------------------------
    # KRA – Needs dynamic update
    # ----------------------------
    def update_kra_rows(self):
        if not self.employee:
            return

        try:
            employee_kra = frappe.get_doc("Employee KRA Tag", self.employee)
        except frappe.DoesNotExistError:
            return

        existing_kra = {row.kra for row in self.kra}
        existing_vs_goal = {row.kra for row in self.kra_vs_goal}
        existing_goal_task = {
        (row.goal, row.task) for row in self.goal_vs_task
    }
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
                    "goal": row.goal,
                    "weightage": row.weightage,
                    "goal_name": row.goal_name,
                    "progress": row.progress
                })

        for row in employee_kra.goal_vs_task:
            key = (row.goal, row.task)
            if key not in existing_goal_task:
                self.append("goal_vs_task", {
                    "goal": row.goal,
                    "task": row.task,
                    "subject":row.subject,
                    "completed_percentage": row.completed_percentage
                })

    def check_duplicate_entry(self):
        if not self.employee or not self.appraisal_cycle:
            return

        existing = frappe.get_all(
            "Appraisal List",
            filters={
                "employee": self.employee,
                "appraisal_cycle": self.appraisal_cycle,
                "name": ("!=", self.name)
            },
            fields=["name"]
        )

        if existing:
            docname = existing[0].name
            employee_name = frappe.db.get_value("Employee", self.employee, "employee_name")
            frappe.throw(
                f"<b>{docname}</b> already exists for Employee <b>{employee_name}</b> "
                f"for this Appraisal Cycle",
                title="Duplicate Entry"
            )
