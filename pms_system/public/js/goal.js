frappe.ui.form.on('Goal', {
    refresh(frm) {

        // if (frm.jira_btn_added) return;

        // frm.jira_btn_added = true;

        let btn = frm.page.add_inner_button(
            __('Fetch from Jira'),

            function () {

                let d = new frappe.ui.Dialog({
                    title: __('Fetch Task from Jira'),

                    fields: [
                        {
                            label: __('Project Name'),
                            fieldname: 'project_name',
                            fieldtype: 'Data',
                            reqd: 1,

                            // AUTO SET VALUE FROM GOAL DOCTYPE FIELD
                            default: frm.doc.custom_jira_project_id || ''
                        }
                    ],

                    primary_action_label: __('Fetch'),

                    primary_action: async function(values) {

                        try {

                            await frappe.call({
                                method: 'pms_system.api.get_task_to_jira.fetch_project_tasks',

                                args: {
                                    project_id: values.project_name,
                                    goal_name: frm.doc.name
                                },

                                freeze: true,
                                freeze_message: __('Fetching tasks from Jira...')
                            });

                            frappe.msgprint(__('Tasks fetched successfully'));

                            d.hide();

                            frm.reload_doc();

                        } catch (err) {

                            console.error(err);

                            frappe.msgprint(__('Failed to fetch Jira tasks'));
                        }
                    }
                });

                d.show();
            }
        );

        // KEEP BUTTON STYLE SAME AS DEFAULT
        $(btn).removeClass('btn-primary');
        $(btn).addClass('btn-default');
    }
});