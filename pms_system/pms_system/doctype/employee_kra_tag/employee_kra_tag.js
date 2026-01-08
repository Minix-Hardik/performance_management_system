frappe.ui.form.on("Employee KRA Tag", {
	setup(frm) {
		// KRA → Goal filtering (already correct)
		frm.fields_dict["kra_vs_goal"].grid.get_field("goal").get_query =
			function (doc, cdt, cdn) {
				let row = locals[cdt][cdn];
				return {
					filters: {
						custom_kr: row.kra
					}
				};
			};
	},

	employee(frm) {
		if (!frm.doc.employee) return;

		frappe.db.get_value(
			"Employee",
			frm.doc.employee,
			["department"],
			(r) => {
				if (!r || !r.department) {
					// If employee has no department → no KRA options
					frm.set_query("kra", "kra_and_goal_add", () => ({
						filters: { name: ["=", ""] }
					}));
					return;
				}

				// Filter KRA by employee department
				frm.set_query("kra", "kra_and_goal_add", () => ({
					filters: {
						custom_department: r.department
					}
				}));
			}
		);
	},

	refresh(frm) {
		if (frm.doc.employee) {
			frm.trigger("employee");
		}

		// KRA in kra_vs_goal → only those selected in kra_and_goal_add
		frm.set_query("kra", "kra_vs_goal", function () {
			let selected_kras = (frm.doc.kra_and_goal_add || [])
				.map(r => r.kra)
				.filter(Boolean);

			if (!selected_kras.length) {
				return { filters: { name: ["=", ""] } };
			}

			return {
				filters: {
					name: ["in", selected_kras]
				}
			};
		});

		// Goal in goal_vs_task → only goals selected in kra_vs_goal
		frm.set_query("goal", "goal_vs_task", function () {
			let selected_goals = (frm.doc.kra_vs_goal || [])
				.map(r => r.goal)
				.filter(Boolean);

			if (!selected_goals.length) {
				return { filters: { name: ["=", ""] } };
			}

			return {
				filters: {
					name: ["in", selected_goals]
				}
			};
		});
	},

	validate(frm) {
		let total = 0;
		let kra_list = [];

		(frm.doc.kra_and_goal_add || []).forEach(row => {
			total += flt(row.weightage || 0);

			if (kra_list.includes(row.kra)) {
				frappe.throw(
					`Duplicate KRA not allowed: <b>${row.kra}</b>`
				);
			}
			kra_list.push(row.kra);
		});

		if (total !== 100) {
			frappe.throw(
				`Total Weightage must be 100%. Current: <b>${total}</b>`
			);
		}
	}
});
