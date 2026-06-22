__version__ = "0.0.1"
import pms_system.overrides.goal
import pms_system.overrides.appraisal

# Monkeypatch frappe.desk.search.get_link_title to fix OperationalError when title_field is not set
import frappe
import frappe.desk.search

@frappe.whitelist()
def custom_get_link_title(doctype, docname):
	meta = frappe.get_meta(doctype)
	if meta.show_title_field_in_link and meta.title_field:
		return frappe.db.get_value(doctype, docname, meta.title_field)
	return docname

frappe.desk.search.get_link_title = custom_get_link_title

