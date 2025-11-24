// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Employee KRA Tag", {
    refresh(frm) {
        frm.set_query("kra", "kra_vs_goal", function () {

            // get all KRA from first child table
            let kra_list = (frm.doc.kra_and_goal_add || []).map(row => row.kra);

            return {
                filters: [
                    ["KRA", "name", "in", kra_list]
                ]
            };
        });
    },
    validate(frm) {
        let total = 0;
        let kra_list = [];

        frm.doc.kra_and_goal_add.forEach(row => {
            total += row.weightage;

            if (kra_list.includes(row.kra)) {
                frappe.throw(`Duplicate KRA not allowed: <b>${row.kra}</b>`);
            }

            kra_list.push(row.kra);
        });

        if (total !== 100) {
            frappe.throw(`Total Weightage must be 100%. Current: <b>${total}</b>`);
        }
    }
});
