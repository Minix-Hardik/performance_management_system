// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Skill Set", {
    refresh(frm) {
        frm.set_df_property(
            "skill_level",
            "read_only",
            !frm.is_new() ? 1 : 0
        );
        if (!frm.is_new()) {

            frm.add_custom_button("Skill Level Up", function () {
                open_skill_popup(frm, "up");
            });

            frm.add_custom_button("Skill Level Down", function () {
                open_skill_popup(frm, "down");
            });

        }
    }
});

function open_skill_popup(frm, action) {
    const dialog = new frappe.ui.Dialog({
        title: "Update Skill Level",
        fields: [
            {
                fieldname: "remarks",
                label: "Remarks",
                fieldtype: "Small Text",
                reqd: 1
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
            frm.save();

            dialog.hide();
        }
    });

    dialog.show();
}
