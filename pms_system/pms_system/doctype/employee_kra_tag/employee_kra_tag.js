// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Employee KRA Tag", {
	setup: function (frm) {
		frm.fields_dict["kra_vs_goal"].grid.get_field("goal").get_query = function (doc, cdt, cdn) {
			let row = locals[cdt][cdn];

			return {
				filters: {
					"custom_kr": row.kra   // filter goals based on selected KRA
				}
			};
		};
	},

	employee: function (frm) {
		if (!frm.doc.employee) {
			return;
		}
		frappe.db.get_value(
			"Employee",
			frm.doc.employee,
			["department", "designation"],
			function (r) {
				if (!r) return;

				frm.set_query("kra", "kra_and_goal_add", function (doc, cdt, cdn) {
					return {
						filters: {
							// employee: frm.doc.employee,
							custom_department: r.department,
							// custom_designation: r.designation
						}
					};
				});
			}
		);
	},
	refresh(frm) {
		frappe.db.get_value(
			"Employee",
			frm.doc.employee,
			["department", "designation"],
			function (r) {
				if (!r) return;

				frm.set_query("kra", "kra_and_goal_add", function (doc, cdt, cdn) {
					return {
						filters: {
							// employee: frm.doc.employee,
							custom_department: r.department,
							// custom_designation: r.designation
						}
					};
				});
			}
		);
	},
	validate(frm) {
		let total = 0;
		let kra_list = [];

		frm.doc.kra_and_goal_add.forEach((row) => {
			total += row.weightage;

			if (kra_list.includes(row.kra)) {
				frappe.throw(`Duplicate KRA not allowed: <b>${row.kra}</b>`);
			}

			kra_list.push(row.kra);
		});

		if (total !== 100) {
			frappe.throw(`Total Weightage must be 100%. Current: <b>${total}</b>`);
		}
	},
});


