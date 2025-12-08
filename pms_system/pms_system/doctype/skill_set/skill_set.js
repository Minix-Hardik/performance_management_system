// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Skill Set", {
    refresh(frm) {
        frm.set_df_property(
            "skill_level",
            "read_only",
            !frm.is_new() ? 1 : 0
        );
        current_user = window?.frappe?.session?.user;
        if (!frm.is_new() && (frm.doc.reporting_manager_user_id === current_user || frm.doc.employee_user_id === current_user)) {

            frm.add_custom_button("Skill Level Up", function () {
                open_skill_popup(frm, "up");
            });

            frm.add_custom_button("Skill Level Down", function () {
                open_skill_popup(frm, "down");
            });

        }
    }
});

async function open_skill_popup(frm, action) {
    current_user = window?.frappe?.session?.user;
    const pms_number = await frappe.db.get_single_value("PMS Setting", "skill_max_level")
    console.log("PMS Number:", pms_number);
    if (frm.doc.skill_level >= pms_number && action === "up") {
        frappe.msgprint(`Skill Level cannot be increased beyond ${pms_number}.`);
        return;
    }
    const dialog = new frappe.ui.Dialog({
        title: "Update Skill Level",
        fields: [
            {
                fieldname: "remarks",
                label: "Remarks",
                fieldtype: "Small Text",
                reqd: frm.doc.reporting_manager_user_id === current_user ? 1 : 0
            }
        ],
        primary_action_label: "Submit",
        primary_action(values) {

            let current_value = frm.doc.skill_level || 0;
            let new_value = current_value;

            if (action === "up") {
                new_value = current_value + 1;
            }
            if (action === "down" && current_value > 0) {
                new_value = current_value - 1;
            }

            frm.set_value("skill_level", new_value);
            frm.set_value("remarks", values.remarks || "");
            frm.save();

            dialog.hide();
        }
    });

    dialog.show();
}
