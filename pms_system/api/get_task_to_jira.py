# pyrefly: ignore [missing-import]
import frappe
import requests
from requests.auth import HTTPBasicAuth
import json
from frappe import _


@frappe.whitelist()
def check_user_jira_connection():
	"""
	Verifies if the global Jira Setting is enabled and if the current user
	has configured their User Jira Connection credentials.
	"""
	jira_setting = frappe.get_single("Jira Setting")
	if not jira_setting.enabled or not jira_setting.jira_url:
		return {
			"status": "disabled",
			"message": _("Jira Integration is disabled by the administrator. Please contact your system manager.")
		}

	user = frappe.session.user
	if not frappe.db.exists("User Jira Connection", user):
		return {
			"status": "not_connected",
			"user": user,
			"message": _("Your Jira account is not connected. Connect it to fetch tasks.")
		}

	return {
		"status": "connected"
	}


@frappe.whitelist()
def fetch_project_tasks(goal_name, project_id=None, task_id=None, start_at=0, limit=100):
	"""
	Fetches a single batch of tasks from Jira based on project_id and/or task_id, using the logged-in
	user's Jira credentials, and maps them to the Goal document child table.
	Prevents timeouts by paginating on the client-side.
	"""
	# 1. Verify global settings
	jira_setting = frappe.get_single("Jira Setting")
	if not jira_setting.enabled or not jira_setting.jira_url:
		frappe.throw(_("Jira Integration is disabled by the administrator."))

	# 2. Verify user connection
	user = frappe.session.user
	if not frappe.db.exists("User Jira Connection", user):
		frappe.throw(
			_("Jira connection not set for user {0}. Please set up your email and API token.").format(user),
			title=_("Jira Connection Required")
		)

	user_conn = frappe.get_doc("User Jira Connection", user)
	jira_email = user_conn.jira_email
	# Use standard frappe password getter to decrypt Password field securely
	jira_api_token = user_conn.get_password("jira_api_token")

	if not jira_email or not jira_api_token:
		frappe.throw(_("Invalid Jira credentials in User Jira Connection."))

	headers = {
		"Accept": "application/json"
	}
	auth = HTTPBasicAuth(jira_email, jira_api_token)
	base_url = jira_setting.jira_url.rstrip('/')

	issues = []
	has_more = False

	# Convert parameters to integers safely
	start_at = int(start_at)
	limit = int(limit)

	# 3. Retrieve Tasks
	if task_id:
		# Direct fetch for single task using Jira's issue API (more robust than JQL search)
		url = f"{base_url}/rest/api/3/issue/{task_id}"
		response = requests.get(url, headers=headers, auth=auth)
		
		if response.status_code == 200:
			issues = [response.json()]
			has_more = False
		else:
			frappe.throw(
				_("Failed to fetch task '{0}' from Jira (Status Code: {1}). Response: {2}").format(task_id, response.status_code, response.text),
				title=_("Task Not Found")
			)
	elif project_id:
		# Fetch single batch using Jira search API with startAt and maxResults parameters
		url = f"{base_url}/rest/api/3/search/jql"
		jql_query = f'project = "{project_id}" AND assignee = "{jira_email}"'
		
		query = {
			"jql": jql_query,
			"startAt": start_at,
			"maxResults": limit,
			"fields": "summary,description,status,priority,assignee,reporter"
		}
		
		response = requests.get(url, headers=headers, params=query, auth=auth)
		
		if response.status_code != 200:
			frappe.throw(
				f"Failed to fetch tasks from Jira (Status Code: {response.status_code}): {response.text}"
			)
			
		data = response.json()
		issues = data.get("issues", [])
		has_more = len(issues) == limit
	else:
		frappe.throw(_("Please provide either a Project ID or a Task ID (Issue Key)."))

	# 4. Map/Save to Goal Document
	goal_doc = frappe.get_doc("Goal", goal_name)

	# Process all fetched issues (single or project level) without creating duplicates
	for issue in issues:
		fields = issue.get("fields", {})
		issue_key = issue.get("key")
		issue_id = issue.get("id")

		# Look for existing task in custom_jira_task child table
		existing_row = None
		for row in goal_doc.custom_jira_task:
			if row.key == issue_key or row.id == issue_id:
				existing_row = row
				break

		row_data = {
			"key": issue_key,
			"id": issue_id,
			"summary": fields.get("summary"),
			"description": str(fields.get("description") or ""),
			"status": fields.get("status", {}).get("name") if fields.get("status") else "",
			"priority": fields.get("priority", {}).get("name") if fields.get("priority") else "",
			"assignee": fields.get("assignee", {}).get("displayName") if fields.get("assignee") else "",
			"reporter": fields.get("reporter", {}).get("displayName") if fields.get("reporter") else ""
		}

		if existing_row:
			existing_row.update(row_data)
		else:
			goal_doc.append("custom_jira_task", row_data)

	goal_doc.save(ignore_permissions=True)
	frappe.db.commit()

	return {
		"message": "Tasks Imported",
		"count": len(issues)
	}