# pyrefly: ignore [missing-import]
import frappe
# pyrefly: ignore [missing-import]
from frappe.utils import flt
# pyrefly: ignore [missing-import]
from hrms.hr.doctype.employee_performance_feedback.employee_performance_feedback import EmployeePerformanceFeedback

class CustomEmployeePerformanceFeedback(EmployeePerformanceFeedback):
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

                self.append(
                    "feedback_ratings",
                    {
                        "criteria": entry.criteria,
                        "per_weightage": entry.per_weightage,
                        "custom_kra_title": kra_title,
                        "custom_employee_self_rating": self_rating,
                        "custom_justification": entry.custom_justification,
                    },
                )
        else:
            # Fallback to the standard template criteria if no self ratings exist
            template = frappe.db.get_value("Appraisal", self.appraisal, "appraisal_template")
            if template:
                template = frappe.get_doc("Appraisal Template", template)
                template_goals = template.get("goals") or []
                for idx, entry in enumerate(template.rating_criteria):
                    kra_title = None
                    if idx < len(template_goals):
                        kra_title = template_goals[idx].key_result_area
                    self.append(
                        "feedback_ratings",
                        {
                            "criteria": entry.criteria,
                            "per_weightage": entry.per_weightage,
                            "custom_kra_title": kra_title,
                        },
                    )

        return self


