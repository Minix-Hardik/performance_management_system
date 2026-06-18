# pyrefly: ignore [missing-import]
import frappe
# pyrefly: ignore [missing-import]
from frappe.utils import flt
# pyrefly: ignore [missing-import]
from hrms.hr.doctype.employee_performance_feedback.employee_performance_feedback import EmployeePerformanceFeedback

class CustomEmployeePerformanceFeedback(EmployeePerformanceFeedback):
    def validate(self):
        # Call standard validation first to populate total_score
        super().validate()

        # Fetch Appraisal KRA goal completions
        appraisal_kras = []
        if self.appraisal:
            appraisal_kras = frappe.db.get_all("Appraisal KRA",
                filters={"parent": self.appraisal},
                fields=["kra", "goal_completion"]
            )

        # Ensure KRA details are populated in feedback child table rows
        for idx, entry in enumerate(self.feedback_ratings):
            if entry.custom_kra_title:
                if not entry.custom_description:
                    entry.custom_description = frappe.db.get_value("KRA", entry.custom_kra_title, "description") or ""
                
                if not entry.custom_goal_completion:
                    kra_row = None
                    for k in appraisal_kras:
                        if k.kra == entry.custom_kra_title:
                            kra_row = k
                            break
                    if not kra_row and idx < len(appraisal_kras):
                        kra_row = appraisal_kras[idx]
                    if kra_row:
                        entry.custom_goal_completion = flt(kra_row.goal_completion)

        # Calculate employee self rating total
        self_total = 0.0
        for entry in self.feedback_ratings:
            self_score = flt(entry.custom_employee_self_rating) * 5.0 * flt(entry.per_weightage / 100.0)
            self_total += flt(self_score)

        # Calculate average score (average of self total and manager total score)
        manager_total = flt(self.total_score)
        self.custom_avg_score = flt((self_total + manager_total) / 2.0)

    @frappe.whitelist()
    def set_feedback_criteria(self):
        if not self.appraisal:
            return

        # Fetch the linked Appraisal doc
        appraisal_doc = frappe.get_doc("Appraisal", self.appraisal)

        self.set("feedback_ratings", [])
        
        # If the Appraisal has self ratings populated, copy them directly
        if appraisal_doc.get("self_ratings"):
            appraisal_kras = appraisal_doc.get("appraisal_kra") or []
            for idx, entry in enumerate(appraisal_doc.self_ratings):
                # Keep it as a fraction (0.0 to 1.0) as expected by Frappe's Rating control
                self_rating = flt(entry.rating)
                if self_rating > 1.0:
                    self_rating = self_rating / 5.0

                # Fetch KRA by matching index from the Appraisal's KRA vs Goal table if custom_kra_title is not set
                kra_title = entry.custom_kra_title
                if not kra_title and idx < len(appraisal_kras):
                    kra_title = appraisal_kras[idx].kra

                # Fetch KRA description
                description = ""
                if kra_title:
                    description = frappe.db.get_value("KRA", kra_title, "description") or ""

                # Fetch goal completion
                goal_completion = 0.0
                kra_row = None
                if kra_title:
                    for k in appraisal_kras:
                        if k.kra == kra_title:
                            kra_row = k
                            break
                if not kra_row and idx < len(appraisal_kras):
                    kra_row = appraisal_kras[idx]
                if kra_row:
                    goal_completion = flt(kra_row.goal_completion)

                self.append(
                    "feedback_ratings",
                    {
                        "criteria": entry.criteria,
                        "per_weightage": entry.per_weightage,
                        "custom_kra_title": kra_title,
                        "custom_description": description,
                        "custom_goal_completion": goal_completion,
                        "custom_employee_self_rating": self_rating,
                        "custom_justification": entry.custom_justification,
                    },
                )
        else:
            # Fallback to the standard template criteria if no self ratings exist
            template = frappe.db.get_value("Appraisal", self.appraisal, "appraisal_template")
            appraisal_kras = []
            if self.appraisal:
                appraisal_kras = frappe.db.get_all("Appraisal KRA",
                    filters={"parent": self.appraisal},
                    fields=["kra", "goal_completion"]
                )
            if template:
                template = frappe.get_doc("Appraisal Template", template)
                template_goals = template.get("goals") or []
                for idx, entry in enumerate(template.rating_criteria):
                    kra_title = None
                    if idx < len(template_goals):
                        kra_title = template_goals[idx].key_result_area

                    # Fetch KRA description
                    description = ""
                    if kra_title:
                        description = frappe.db.get_value("KRA", kra_title, "description") or ""

                    # Fetch goal completion
                    goal_completion = 0.0
                    kra_row = None
                    if kra_title:
                        for k in appraisal_kras:
                            if k.kra == kra_title:
                                kra_row = k
                                break
                    if not kra_row and idx < len(appraisal_kras):
                        kra_row = appraisal_kras[idx]
                    if kra_row:
                        goal_completion = flt(kra_row.goal_completion)

                    self.append(
                        "feedback_ratings",
                        {
                            "criteria": entry.criteria,
                            "per_weightage": entry.per_weightage,
                            "custom_kra_title": kra_title,
                            "custom_description": description,
                            "custom_goal_completion": goal_completion,
                        },
                    )

        return self


