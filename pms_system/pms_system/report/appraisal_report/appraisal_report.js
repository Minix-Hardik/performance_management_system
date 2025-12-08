// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

frappe.query_reports["Appraisal Report"] = {
	"filters": [
		{
			"fieldname": "appraisal_cycle",
			"label": "Appraisal Cycle",
			"fieldtype": "Link",
			"options": "Appraisal Cycle",
			"reqd": 0
		}
	]
};
