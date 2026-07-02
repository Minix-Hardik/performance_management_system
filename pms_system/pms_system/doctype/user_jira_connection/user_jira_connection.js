// Copyright (c) 2026, Hybrowlabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("User Jira Connection", {
	onload(frm) {
		if (frm.is_new()) {
			if (!frm.doc.user) {
				frm.set_value("user", frappe.session.user);
			}
			if (frappe.session.user !== 'Administrator' && !frm.doc.jira_email) {
				frm.set_value("jira_email", frappe.session.user);
			}
		}
	},
	generate_token_btn(frm) {
		window.open('https://id.atlassian.com/manage-profile/security/api-tokens', '_blank');
	}
});
