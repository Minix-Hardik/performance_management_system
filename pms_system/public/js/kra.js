frappe.ui.form.on('KRA', {
    after_workflow_action(frm) {
        if (frm.doc.workflow_state === 'Request To Modify') {
            dialog = new frappe.ui.Dialog({
                title: 'Add Note for Modification',
                fields: [
                    {
                        fieldtype: 'Small Text',
                        fieldname: 'note_for_modification',
                        label: 'Note for Modification',
                        reqd: 1
                    }
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    frappe.call({
                        method: 'pms_system.api.kra_mail.update_note_kra',
                        args: {
                            kra_name: frm.doc.name,
                            note_for_modification: values.note_for_modification
                        },
                        callback() {
                            dialog.hide();
                            frm.reload_doc();
                        }
                    });
                }
            });
            dialog.show();
        }
        
    },
    refresh(frm) {

    console.log("Refreshing KRA form");

        const is_hr = frappe.user.has_role("HR Manager")
            || frappe.user.has_role("HR User");

        if (!is_hr) {
            frm.set_df_property("custom_employee", "read_only", 1);
            frm.set_df_property("custom_designation", "read_only", 1);
            frm.set_df_property("custom_department", "read_only", 1);
            frm.set_df_property("custom_kpi", "read_only", 1);
            frm.set_df_property("description", "read_only", 1);
            frm.set_df_property("name", "read_only", 1);
            frm.set_df_property("custom_modify_kra_note", "read_only", 0);
        }
    }
});