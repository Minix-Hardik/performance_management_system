import frappe
from frappe import _
from hrms.hr.doctype.appraisal_cycle.appraisal_cycle import AppraisalCycle


class CustomAppraisalCycle(AppraisalCycle):
    def validate(self):
        super().validate()
        self.validate_weightage()

    def validate_weightage(self):
        kra = self.custom_kra_weight or 0
        comp = self.custom_competency_weight or 0
        total = kra + comp

        if total != 100:
            frappe.throw(
                f"Total weightage must be exactly 100%. "
                f"Current total = {total}%"
            )