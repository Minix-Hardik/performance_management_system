# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class EmployeeKRATag(Document):
    def validate(self):
        self.validate_duplicate_kra()
        self.validate_total_weightage()
        attach_kra_and_goals_task(self)

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

def attach_kra_and_goals_task(doc):
    if not doc.name:
        return

    # Find all Appraisal List documents where employee matches and workflow_state is 'Self Appraisal'
    appraisals = frappe.get_all(
        "Appraisal List",
        filters={
            "employee": doc.name,
            "workflow_state": "Self Appraisal"
        },
        fields=["name"]
    )


    for appraisal_data in appraisals:
        appraisal = frappe.get_doc("Appraisal List", appraisal_data.name)
        
        # Build lookup maps for existing entries in appraisal
        existing_kra_map = {row.kra: row for row in appraisal.kra}
        existing_vs_goal_map = {(row.kra, row.goal): row for row in appraisal.kra_vs_goal}
        existing_goal_task_map = {(row.goal, row.task): row for row in appraisal.goal_vs_task}

        # Build sets of keys from Employee KRA Tag
        doc_kra_set = {row.kra for row in doc.kra_and_goal_add}
        doc_vs_goal_set = {(row.kra, row.goal) for row in doc.kra_vs_goal}
        doc_goal_task_set = {(row.goal, row.task) for row in doc.goal_vs_task}

        has_changes = False

        # Remove KRA entries that no longer exist in Employee KRA Tag
        rows_to_remove = [row for row in appraisal.kra if row.kra not in doc_kra_set]
        for row in rows_to_remove:
            appraisal.kra.remove(row)
            has_changes = True

        # Remove KRA vs Goal entries that no longer exist
        rows_to_remove = [row for row in appraisal.kra_vs_goal if (row.kra, row.goal) not in doc_vs_goal_set]
        for row in rows_to_remove:
            appraisal.kra_vs_goal.remove(row)
            has_changes = True

        # Remove Goal vs Task entries that no longer exist
        rows_to_remove = [row for row in appraisal.goal_vs_task if (row.goal, row.task) not in doc_goal_task_set]
        for row in rows_to_remove:
            appraisal.goal_vs_task.remove(row)
            has_changes = True

        # Rebuild lookup maps after removal
        existing_kra_map = {row.kra: row for row in appraisal.kra}
        existing_vs_goal_map = {(row.kra, row.goal): row for row in appraisal.kra_vs_goal}
        existing_goal_task_map = {(row.goal, row.task): row for row in appraisal.goal_vs_task}

        # Add or update KRA entries from kra_and_goal_add
        for row in doc.kra_and_goal_add:
            if row.kra in existing_kra_map:
                # Update weightage if changed
                existing_row = existing_kra_map[row.kra]
                if existing_row.weightage != row.weightage:
                    existing_row.weightage = row.weightage
                    has_changes = True
            else:
                # Add new entry
                appraisal.append("kra", {
                    "kra": row.kra,
                    "weightage": row.weightage
                })
                has_changes = True

        # Add or update KRA vs Goal entries
        for row in doc.kra_vs_goal:
            key = (row.kra, row.goal)
            if key in existing_vs_goal_map:
                # Update weightage and other fields if changed
                existing_row = existing_vs_goal_map[key]

                if existing_row.weightage != row.weightage:
                    existing_row.weightage = row.weightage
                    has_changes = True
                if existing_row.goal_name != row.goal_name:
                    existing_row.goal_name = row.goal_name
                    has_changes = True
                if existing_row.progress != row.progress:
                    existing_row.progress = row.progress
                    has_changes = True
            else:
                # Add new entry
                appraisal.append("kra_vs_goal", {
                    "kra": row.kra,
                    "goal": row.goal,
                    "weightage": row.weightage,
                    "goal_name": row.goal_name,
                    "progress": row.progress
                })
                has_changes = True

        # Add or update Goal vs Task entries
        for row in doc.goal_vs_task:
            key = (row.goal, row.task)
            if key in existing_goal_task_map:
                # Update fields if changed
                existing_row = existing_goal_task_map[key]
                if existing_row.subject != row.subject:
                    existing_row.subject = row.subject
                    has_changes = True
                if existing_row.completed_percentage != row.completed_percentage:
                    existing_row.completed_percentage = row.completed_percentage
                    has_changes = True
            else:
                # Add new entry
                appraisal.append("goal_vs_task", {
                    "goal": row.goal,
                    "task": row.task,
                    "subject": row.subject,
                    "completed_percentage": row.completed_percentage
                })
                has_changes = True

        # Only save if there are changes to avoid unnecessary database writes
        if has_changes:
            # Set flag to prevent update_kra_rows from overwriting with old DB values
            appraisal.flags.skip_kra_sync = True
            appraisal.save(ignore_permissions=True)
