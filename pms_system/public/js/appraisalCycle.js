frappe.ui.form.on("Appraisal Cycle", {
    refresh(frm) {
        frm.trigger("override_create_appraisal_button");
    },

    override_create_appraisal_button(frm) {
        const BTN_LABEL = __("Create Appraisals");

        frm.remove_custom_button(BTN_LABEL);
        frm.page.clear_primary_action();

        const appraisals_created = !!frm.doc.__onload?.appraisals_created;

        if (frm.doc.docstatus !== 2) {
            if (appraisals_created) {
                frm.add_custom_button("Create Appraisal", () => {
                    frm.trigger("my_custom_create_appraisals");
                });
            } else {
                frm.page.set_primary_action("Create Appraisal", () => {
                    frm.trigger("my_custom_create_appraisals");
                });
            }
        }
    },

    my_custom_create_appraisals(frm) {
        frappe.call({
            method: "pms_system.api.create_appraisal_list.create_appraisal_list",
            args: { doc_name: frm.doc.name },
            freeze: true,
            freeze_message: __("Running Custom Appraisal Creation"),
            callback() {
                frm.reload_doc();
            }
        });
    },
    custom_get_employee(frm) {
        frappe.call({
            method: "pms_system.api.get_employees_list.get_employees_list",
            args: {
                doc: frm.doc
            },
            freeze: true,
            freeze_message: __("Fetching Employees"),

            callback: function (r) {
                if (!r.message) {
                    frappe.msgprint("No employees found.");
                    return;
                }

                // Clear existing rows
                frm.clear_table("appraisees");

                // Add returned rows
                r.message.forEach(row => {
                    let child = frm.add_child("appraisees");
                    Object.assign(child, row);
                });

                // Refresh only child table (no full form refresh)
                frm.refresh_field("appraisees");

                frm.dirty();
            },
        });
    },
})
