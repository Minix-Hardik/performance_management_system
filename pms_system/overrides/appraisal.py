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

        # YOUR CUSTOM CALCULATION
        kra.goal_score = flt(
            kra.goal_completion,
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
        goal_score_percentage = 0
        for entry in self.appraisal_kra:
            score = flt(entry.goal_score or 0)
            weight = flt(entry.per_weightage or 0)
            goal_score_percentage += score * (weight / 100.0)
            total_weightage += weight

        self.goal_score_percentage = flt(goal_score_percentage, self.precision("goal_score_percentage"))
        total = goal_score_percentage / 5.0

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
            weight = flt(entry.per_weightage or 0)
            total += score * (weight / 100.0)
            total_weightage += weight

    if total_weightage > 0:
        final_score = total / 5.0
        self.final_score = flt(final_score, self.precision("final_score"))
        self.total_score = flt(final_score, self.precision("total_score"))


# OVERRIDE
Appraisal.set_goal_score = custom_set_goal_score
Appraisal.calculate_total_score = custom_calculate_total_score
Appraisal.calculate_final_score = custom_calculate_final_score