import frappe
from hrms.hr.doctype.goal.goal import Goal
from frappe.utils import flt


# ==========================================
# REMOVE KRA VALIDATION BETWEEN PARENT/CHILD
# ==========================================

def custom_validate_parent_fields(self):

    if not self.parent_goal:
        return

    parent_details = frappe.db.get_value(
        "Goal",
        self.parent_goal,
        ["employee", "appraisal_cycle"],
        as_dict=True
    )

    if not parent_details:
        return

    # Employee validation
    if self.employee != parent_details.employee:
        frappe.throw(
            "Goal should be owned by same employee as parent goal."
        )

    # Appraisal Cycle validation
    if self.appraisal_cycle != parent_details.appraisal_cycle:
        frappe.throw(
            "Goal should belong to same Appraisal Cycle as parent goal."
        )

    # SKIP KRA VALIDATION


Goal.validate_parent_fields = custom_validate_parent_fields


# ==========================================
# CUSTOM APPRAISAL UPDATE
# ==========================================

from frappe.utils import flt


def custom_update_goal_progress_in_appraisal(self):

    print(
        "\nUpdating appraisal progress for goal:",
        self.name,
        "is_group:",
        self.is_group,
    )

    # Skip group goals
    if self.is_group:
        return

    if not self.appraisal_cycle or not self.kra:
        return

    appraisal_name = frappe.db.get_value(
        "Appraisal",
        {
            "employee": self.employee,
            "appraisal_cycle": self.appraisal_cycle
        }
    )

    if not appraisal_name:
        return

    appraisal = frappe.get_doc("Appraisal", appraisal_name)

    print("Found appraisal:", appraisal.name)

    updated = False

    total_score = 0

    for row in appraisal.appraisal_kra:

        print("ROW KRA:", row.kra)
        print("GOAL KRA:", self.kra)

        if str(row.kra).strip() == str(self.kra).strip():

            print("MATCHED")

            # KRA Score is unweighted progress (0-100)
            score = flt(self.progress)

            # FORCE DB UPDATE
            row.db_set("goal_completion", self.progress)
            row.db_set("goal_score", score)

            updated = True

    if updated:
        # Recalculate parent Appraisal scores
        appraisal.calculate_total_score()
        appraisal.calculate_final_score()

        # Direct store in database
        appraisal.db_set("total_score", appraisal.total_score)
        appraisal.db_set("final_score", appraisal.final_score)

        print("Appraisal updated successfully")

    else:
        print("NO MATCH FOUND")
        
Goal.update_goal_progress_in_appraisal = custom_update_goal_progress_in_appraisal