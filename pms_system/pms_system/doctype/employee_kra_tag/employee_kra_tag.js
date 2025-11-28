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
		frm.set_query("kra", "kra_and_goal_add", function () {
			return {
				query: "pms_system.pms_system.doctype.employee_kra_tag.employee_kra_tag.get_kra_list",
				filters: {
					employee: frm.doc.employee,
				},
			};
		});
	},
	refresh(frm) {
		frm.set_query("kra", "kra_vs_goal", function () {
			// get all KRA from first child table
			let kra_list = (frm.doc.kra_and_goal_add || []).map((row) => row.kra);

			return {
				filters: [["KRA", "name", "in", kra_list]],
			};
		});
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
