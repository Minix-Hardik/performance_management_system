frappe.listview_settings['Task'] = {
    onload(listview) {
        listview.page.add_button(__('Fetch from Jira'), async function () {
            let d = new frappe.ui.Dialog({
                title: "Fetch Task from Jira",
                fields: [
                    {
                        label: "Project Name",
                        fieldname: "project_name",
                        fieldtype: "Link",
                        options: "Project",
                        reqd: 1
                    }
                ],
                primary_action_label: "Fetch",
                primary_action(values) {
                    frappe.call({
                        method: "pms_system.api.get_task_to_jira.fetch_project_tasks",
                        args: {
                            project_id: values.project_name
                        },
                        freeze: true,
                        freeze_message: "Fetching tasks from Jira...",
                        callback: function (r) {
                            if (!r.exc) {
                                // frappe.msgprint("Tasks fetched successfully!");
                                listview.refresh();
                                d.hide();
                            }
                        }
                    });
                }
            });
            d.show();
        }).addClass("btn-primary");
    }
};


