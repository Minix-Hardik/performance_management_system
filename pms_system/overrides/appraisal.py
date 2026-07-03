# pyrefly: ignore [missing-import]
import frappe
# pyrefly: ignore [missing-import]
from frappe.utils import flt
# pyrefly: ignore [missing-import]
from frappe.query_builder.functions import Avg
# pyrefly: ignore [missing-import]
from hrms.hr.doctype.appraisal.appraisal import Appraisal


def custom_set_goal_score(self, update=False):

    Goal = frappe.qb.DocType("Goal")

    for kra in self.appraisal_kra:

        # IMPORTANT:
        # removed parent_goal condition
        avg_goal_completion = (
            frappe.qb.from_(Goal)
            .select(Avg(Goal.progress).as_("avg_goal_completion"))
            .where(
                (Goal.kra == kra.kra)
                & (Goal.employee == self.employee)
                & (Goal.status != "Archived")
                & (Goal.appraisal_cycle == self.appraisal_cycle)
                & (Goal.is_group == 0)
            )
        ).run()[0][0]

        kra.goal_completion = flt(
            avg_goal_completion,
            kra.precision("goal_completion")
        )

        # YOUR CUSTOM CALCULATION: (Goal Completion * Weight) / 100
        kra.goal_score = flt(
            (kra.goal_completion * kra.per_weightage) / 100.0,
            kra.precision("goal_score")
        )

        if update:
            kra.db_update()

    self.calculate_total_score()

    if update:
        self.calculate_final_score()
        self.db_update()

    return self


def custom_calculate_total_score(self):
    total_weightage, total = 0, 0
    if self.rate_goals_manually:
        for entry in self.goals:
            if flt(entry.score) > 5:
                frappe.throw(frappe._("Row {0}: Goal Score cannot be greater than 5").format(entry.idx))

            entry.score_earned = flt(entry.score) * flt(entry.per_weightage) / 100
            total += flt(entry.score_earned)
            total_weightage += flt(entry.per_weightage)
    else:
        for entry in self.appraisal_kra:
            score = flt(entry.goal_score or 0)
            total += score
            total_weightage += flt(entry.per_weightage or 0)

        self.goal_score_percentage = flt(total, self.precision("goal_score_percentage"))

    if total_weightage and flt(total_weightage, 2) != 100.0:
        frappe.throw(
            frappe._("Total weightage for all {0} must add up to 100. Currently, it is {1}%").format(
                frappe._("Goals") if self.rate_goals_manually else frappe._("KRAs"), total_weightage
            ),
            title=frappe._("Incorrect Weightage Allocation"),
        )

    self.total_score = flt(total, self.precision("total_score"))


def custom_calculate_final_score(self):
    total_weightage, total = 0, 0
    if self.rate_goals_manually:
        for entry in self.goals:
            entry.score_earned = flt(entry.score) * flt(entry.per_weightage) / 100
            total += flt(entry.score_earned)
            total_weightage += flt(entry.per_weightage)
    else:
        for entry in self.appraisal_kra:
            score = flt(entry.goal_score or 0)
            total += score
            total_weightage += flt(entry.per_weightage or 0)

    if total_weightage > 0:
        self.final_score = flt(total, self.precision("final_score"))
        self.total_score = flt(total, self.precision("total_score"))


# OVERRIDE
Appraisal.set_goal_score = custom_set_goal_score
Appraisal.calculate_total_score = custom_calculate_total_score
Appraisal.calculate_final_score = custom_calculate_final_score

# Store original validate
original_validate = Appraisal.validate


def custom_validate(self):
    # Call original validate
    original_validate(self)

    # Custom validation: Check self appraisal date limit for employees
    if self.appraisal_cycle:
        cycle_doc = frappe.get_doc("Appraisal Cycle", self.appraisal_cycle)
        if cycle_doc.custom_self_appraisal_end_date:
            # pyrefly: ignore [missing-import]
            from frappe.utils import getdate, today, formatdate

            # Check if the current user is the employee of this appraisal
            employee_user = frappe.db.get_value("Employee", self.employee, "user_id")
            if employee_user == frappe.session.user:
                if getdate(today()) > getdate(cycle_doc.custom_self_appraisal_end_date):
                    frappe.throw(
                        frappe._("Self Appraisal period ended on {0}. You are not allowed to save or submit this appraisal.")
                        .format(formatdate(cycle_doc.custom_self_appraisal_end_date))
                    )


Appraisal.validate = custom_validate


def custom_before_submit(self):
    for entry in self.get("custom_question_child_table") or []:
        if not entry.employee_ans_in_discriptive or not entry.employee_ans_in_discriptive.strip():
            frappe.throw(frappe._("Please answer all questions before submitting the appraisal."))


Appraisal.before_submit = custom_before_submit