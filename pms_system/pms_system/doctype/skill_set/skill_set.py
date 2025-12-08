# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SkillSet(Document):
	def set_reporting_manager(self):
		employee = frappe.get_doc("Employee", self.employee)
		self.reporting_manager = employee.reports_to
		self.save()
	def after_insert(self):
		self.set_reporting_manager()