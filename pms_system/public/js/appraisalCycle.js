frappe.ui.form.on("Appraisal Cycle", {
    refresh(frm) {
        // run standard refresh first
        this._super && this._super(frm);

        // override the button after standard buttons are created
        frm.trigger("override_create_appraisal_button");
    },

    override_create_appraisal_button(frm) {
        frm.remove_custom_button("Create Appraisals");
        frm.page.clear_primary_action();

        let appraisals_created = frm.doc.__onload?.appraisals_created;
        if (frm.doc.status !== "Completed") {
            if (appraisals_created) {
                frm.add_custom_button(__("Create Appraisals"), () => {
                    frm.trigger("my_custom_create_appraisals");
                });
            } else {
                frm.page.set_primary_action(__("Create Appraisals"), () => {
                    frm.trigger("my_custom_create_appraisals");
                });
            }
        }
    },

    my_custom_create_appraisals(frm) {
        frappe.msgprint(__("Custom Appraisal Creation Triggered"));
        // frappe.call({
        //     method: "your_app.your_module.doctype.appraisal_cycle.appraisal_cycle.custom_create_appraisals",
        //     args: { docname: frm.doc.name },
        //     freeze: true,
        //     freeze_message: __("Running Custom Appraisal Creation"),
        //     callback() {
        //         frm.reload_doc();
        //     }
        // });
    }
})
