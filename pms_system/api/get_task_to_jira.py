# pyrefly: ignore [missing-import]
import frappe
import requests
from requests.auth import HTTPBasicAuth
import json


@frappe.whitelist()
def fetch_project_tasks(goal_name, project_id):

    goal_doc = frappe.get_doc("Goal", goal_name)

    jira_data = frappe.get_doc("Jira Setting", "Jira Settings")

    url = jira_data.jira_url + "/rest/api/3/search/jql"

    auth = HTTPBasicAuth(
        jira_data.jira_email,
        jira_data.jira_api_token
    )

    headers = {
        "Accept": "application/json"
    }

    query = {
        "jql": f'project = "{project_id}"',
        "maxResults": "5000",
        "fields": "summary,description,status,priority,assignee,reporter"
    }

    response = requests.get(
        url,
        headers=headers,
        params=query,
        auth=auth
    )

    if response.status_code != 200:
        frappe.throw(
            f"Failed to fetch tasks from Jira: {response.status_code}"
        )

    data = response.json()

    # OPTIONAL: CLEAR OLD ROWS
    goal_doc.set("jira_tasks", [])

    for issue in data.get("issues", []):

        fields = issue.get("fields", {})

        goal_doc.append("custom_jira_task", {

            "key": issue.get("key"),
            "id": issue.get("id"),

            "summary": fields.get("summary"),

            "description": str(fields.get("description")),

            "status": fields.get("status", {}).get("name")
                if fields.get("status") else "",

            "priority": fields.get("priority", {}).get("name")
                if fields.get("priority") else "",

            "assignee": fields.get("assignee", {}).get("displayName")
                if fields.get("assignee") else "",

            "reporter": fields.get("reporter", {}).get("displayName")
                if fields.get("reporter") else ""
        })

    goal_doc.save(ignore_permissions=True)

    frappe.db.commit()

    return {
        "message": "Tasks Imported",
        "count": len(data.get("issues", []))
    }