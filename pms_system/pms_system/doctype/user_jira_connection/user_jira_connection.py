# Copyright (c) 2026, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class UserJiraConnection(Document):
	def validate(self):
		if self.user != frappe.session.user and "System Manager" not in frappe.get_roles():
			frappe.throw(_("You are not authorized to save details for another user."))

	def on_trash(self):
		if self.user != frappe.session.user and "System Manager" not in frappe.get_roles():
			frappe.throw(_("You are not authorized to delete details for another user."))


def get_permission_query_conditions(user=None):
	if not user:
		user = frappe.session.user
	if "System Manager" in frappe.get_roles(user):
		return ""
	return f"`name` = {frappe.db.escape(user)}"
