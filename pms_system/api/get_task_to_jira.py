import requests
from requests.auth import HTTPBasicAuth
import json
import frappe


@frappe.whitelist()
def fetch_project_tasks(project_id):
    project_id = frappe.get_value("Project", project_id, "project_name")
    
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
        "fields": "summary,description,status,priority,assignee,reporter,created,updated",
        "expand": "",
        "nextPageToken": "",
        "reconcileIssues": ""
    }

    response = requests.request(
        "GET",
        url,
        headers=headers,
        params=query,
        auth=auth
    )
    
    if response.status_code != 200:
        frappe.throw(f"Failed to fetch tasks from Jira: {response.status_code} - {response.text}")    

    data = response.json()

    # ---- CLEAN RESULT ----
    cleaned = []

    for issue in data.get("issues", []):
        fields = issue.get("fields", {})
        
    cleaned.append({
        "key": issue.get("key"),
        "id": issue.get("id"),
        "summary": fields.get("summary"),
        "description": fields.get("description"),
        "status": fields.get("status", {}).get("name") if fields.get("status") else None,
        "priority": fields.get("priority", {}).get("name") if fields.get("priority") else None,
        "assignee": fields.get("assignee", {}).get("displayName") if fields.get("assignee") else None,
        "reporter": fields.get("reporter", {}).get("displayName") if fields.get("reporter") else None,
        "created": fields.get("created"),
        "updated": fields.get("updated"),
    })

        
    print(cleaned)

    return cleaned