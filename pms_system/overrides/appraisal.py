import frappe
from frappe.utils import flt
from frappe.query_builder.functions import Avg
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


# OVERRIDE
Appraisal.set_goal_score = custom_set_goal_score