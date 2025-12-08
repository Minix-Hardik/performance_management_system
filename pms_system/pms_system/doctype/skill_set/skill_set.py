# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SkillSet(Document):
	def set_reporting_manager(self):
		employee = frappe.get_doc("Employee", self.employee)
		self.reporting_manager = employee.reports_to
		self.save()
	def save_skill_level_log(self):
		old_skill_data = self.get_doc_before_save() 
		if old_skill_data and old_skill_data.skill_level != self.skill_level:
			self.append("skill_level_change_log", {
				"old_level": old_skill_data.skill_level,
				"new_level": self.skill_level,
				"changed_by": frappe.session.user,
				"remarks": self.remarks,
				"updated_at": frappe.utils.now(),
				"changed_by": frappe.session.user
			})


	def before_save(self):
		self.save_skill_level_log()
	def after_insert(self):
		self.set_reporting_manager()