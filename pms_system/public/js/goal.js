frappe.ui.form.on('Goal', {
	refresh(frm) {
		let btn = frm.page.add_inner_button(
			__('Fetch from Jira'),
			function () {
				// 1. Check user connection first
				frappe.call({
					method: 'pms_system.api.get_task_to_jira.check_user_jira_connection',
					freeze: true,
					freeze_message: __('Checking connection...'),
					callback: function(r) {
						if (!r.message) return;

						let status = r.message.status;
						if (status === 'disabled') {
							frappe.msgprint({
								title: __('Jira Integration Disabled'),
								indicator: 'red',
								message: r.message.message
							});
							return;
						}

						if (status === 'not_connected') {
							frappe.confirm(
								__('Your Jira credentials are not configured. Would you like to set them up now?'),
								function() {
									// Redirect to User Jira Connection creation
									frappe.new_doc('User Jira Connection', {
										user: frappe.session.user
									});
								}
							);
							return;
						}

						if (status === 'connected') {
							// 2. Show the Fetch dialog
							show_fetch_dialog(frm);
						}
					}
				});
			}
		);

		// KEEP BUTTON STYLE SAME AS DEFAULT
		$(btn).removeClass('btn-primary');
		$(btn).addClass('btn-default');
	}
});

function show_fetch_dialog(frm) {
	let d = new frappe.ui.Dialog({
		title: __('Fetch Tasks from Jira'),
		fields: [
			{
				label: __('Jira Project ID'),
				fieldname: 'project_id',
				fieldtype: 'Data',
				default: frm.doc.custom_jira_project_id || ''
			},
			{
				label: __('Jira Task ID (Issue Key)'),
				fieldname: 'task_id',
				fieldtype: 'Data',
				description: __('Optional. E.g., PMS-123')
			}
		],
		primary_action_label: __('Fetch'),
		primary_action: async function(values) {
			if (!values.project_id && !values.task_id) {
				frappe.msgprint(__('Please enter a Project ID or a Task ID.'));
				return;
			}

			// Disable buttons during the fetch call
			d.get_primary_btn().attr('disabled', true);
			d.get_close_btn().attr('disabled', true);

			let start_at = 0;
			let limit = 100;
			let total_fetched = 0;

			// Define chunk fetch function
			let fetch_chunk = async () => {
				// Update the loader message on screen
				if ($('.freeze-message').length) {
					$('.freeze-message').text(__('Fetching tasks from Jira... ({0} imported)', [total_fetched]));
				}

				try {
					let r = await frappe.call({
						method: 'pms_system.api.get_task_to_jira.fetch_project_tasks',
						args: {
							project_id: values.project_id || '',
							task_id: values.task_id || '',
							goal_name: frm.doc.name,
							start_at: start_at,
							limit: limit
						},
						freeze: true,
						freeze_message: __('Fetching tasks from Jira... ({0} imported)', [total_fetched])
					});

					let res = r.message || { count: 0, has_more: false };
					total_fetched += res.count;

					if (res.has_more && !values.task_id) {
						start_at += limit;
						await fetch_chunk();
					} else {
						frappe.msgprint(__('Tasks fetched successfully: {0} tasks imported', [total_fetched]));
						d.hide();
						frm.reload_doc();
					}
				} catch (err) {
					console.error(err);
					frappe.msgprint(__('Failed to fetch Jira tasks. Saved up to {0} tasks.', [total_fetched]));
					// Re-enable buttons on error
					if (d && d.get_primary_btn()) {
						d.get_primary_btn().attr('disabled', false);
					}
					if (d && d.get_close_btn()) {
						d.get_close_btn().attr('disabled', false);
					}
				}
			};

			// Trigger the first page fetch
			await fetch_chunk();
		}
	});

	d.show();
}