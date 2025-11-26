import frappe
from frappe import _
from hrms.hr.doctype.appraisal_cycle.appraisal_cycle import AppraisalCycle


class CustomAppraisalCycle(AppraisalCycle):
    def validate(self):
        super().validate()
        self.validate_weightage()
        self.validate_dates()

    def validate_weightage(self):
        kra = float(self.custom_kra_weight) or 0
        comp = float(self.custom_competency_weight) or 0
        total = kra + comp

        if total != 100:
            frappe.throw(
                f"Total weightage must be exactly 100%. "
                f"Current total = {total}%"
            )
    def validate_dates(self):
        start = self.custom_process_start_date
        end = self.custom_process_end_date
        s_start = self.custom_self_appraisal_start_date
        s_end = self.custom_self_appraisal_end_date

        m_start = self.custom_manager_review_start_date
        m_end = self.custom_manager_review_end_date

        required = {
            "Process Start Date": start,
            "Process End Date": end,
            "Self Appraisal Start Date": s_start,
            "Self Appraisal End Date": s_end,
            "Manager Review Start Date": m_start,
            "Manager Review End Date": m_end,
        }

        for label, value in required.items():
            if not value:
                frappe.throw(_(f"{label} is required."))

        for label, value in {
            "Self Appraisal Start Date": s_start,
            "Self Appraisal End Date": s_end,
            "Manager Review Start Date": m_start,
            "Manager Review End Date": m_end,
        }.items():
            if not (start <= value <= end):
                frappe.throw(_(
                    f"{label} must be between Process Start Date ({start}) "
                    f"and Process End Date ({end})."
                ))

        if s_start > s_end:
            frappe.throw(_("Self Appraisal Start Date cannot be after the Self Appraisal End Date."))

        if s_end > m_start:
            frappe.throw(_("Self Appraisal End Date must be on or before the Manager Review Start Date."))

        if m_start > m_end:
            frappe.throw(_("Manager Review Start Date cannot be after the Manager Review End Date."))
