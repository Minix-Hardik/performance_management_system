import frappe


def workflow_patch():
    states = [
        {"name":"Self Appraisal"},
        {"name":"Manager Appraisal"},
        {"name":"Second Manager Review"},
        {"name":"Approved"}
    ]
    action = [
        {"workflow_action_name": "Send To Manager"},
        {"workflow_action_name": "Send To Second Level"},
        {"workflow_action_name": "Approve"}
    ]
    for state in states:
		if not frappe.db.exists("Workflow State", state["name"]):
			frappe.get_doc(
				{"doctype": "Workflow State", "workflow_state_name": state["name"]}
			).insert()
    for act in action:
        if not frappe.db.exists("Workflow Action Master", act["workflow_action_name"]):
            frappe.get_doc(
                {"doctype": "Workflow Action Master", "workflow_action_name": act["workflow_action_name"]}
            ).insert()
    def create_doc_workflow()
        workflow_data = {
    "name": "Appraisl",
    "owner": "Administrator",
    "creation": "2025-11-25 16:48:09.913879",
    "modified": "2025-12-02 12:57:53.437273",
    "modified_by": "Administrator",
    "docstatus": 0,
    "idx": 0,
    "workflow_name": "Appraisl",
    "document_type": "Appraisal List",
    "is_active": 1,
    "override_status": 0,
    "send_email_alert": 0,
    "workflow_state_field": "workflow_state",
    "doctype": "Workflow",
    "states": [
        {
            "name": "93j6nh0d15",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 1,
            "state": "Self Appraisal",
            "doc_status": "0",
            "is_optional_state": 0,
            "avoid_status_override": 0,
            "allow_edit": "All",
            "send_email": 1,
            "parent": "Appraisl",
            "parentfield": "states",
            "parenttype": "Workflow",
            "doctype": "Workflow Document State"
        },
        {
            "name": "93j9empqta",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 2,
            "state": "Manager Appraisal",
            "doc_status": "0",
            "is_optional_state": 0,
            "avoid_status_override": 0,
            "allow_edit": "All",
            "send_email": 1,
            "parent": "Appraisl",
            "parentfield": "states",
            "parenttype": "Workflow",
            "doctype": "Workflow Document State"
        },
        {
            "name": "93j05d9s36",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 3,
            "state": "Approved",
            "doc_status": "0",
            "is_optional_state": 0,
            "avoid_status_override": 0,
            "allow_edit": "HR Manager",
            "send_email": 1,
            "parent": "Appraisl",
            "parentfield": "states",
            "parenttype": "Workflow",
            "doctype": "Workflow Document State"
        },
        {
            "name": "h0ojhs86iu",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 4,
            "state": "Second Manager Review",
            "doc_status": "0",
            "is_optional_state": 0,
            "avoid_status_override": 0,
            "allow_edit": "All",
            "send_email": 1,
            "parent": "Appraisl",
            "parentfield": "states",
            "parenttype": "Workflow",
            "doctype": "Workflow Document State"
        }
    ],
    "transitions": [
        {
            "name": "93j20orcnk",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 1,
            "state": "Self Appraisal",
            "action": "Send To Manager",
            "next_state": "Manager Appraisal",
            "allowed": "All",
            "allow_self_approval": 1,
            "send_email_to_creator": 0,
            "parent": "Appraisl",
            "parentfield": "transitions",
            "parenttype": "Workflow",
            "doctype": "Workflow Transition"
        },
        {
            "name": "93j0jc73g4",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 2,
            "state": "Manager Appraisal",
            "action": "Send To Second Level",
            "next_state": "Second Manager Review",
            "allowed": "All",
            "allow_self_approval": 1,
            "send_email_to_creator": 0,
            "condition": "doc.reports_to_second",
            "parent": "Appraisl",
            "parentfield": "transitions",
            "parenttype": "Workflow",
            "doctype": "Workflow Transition"
        },
        {
            "name": "h0o3me1ne9",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 3,
            "state": "Second Manager Review",
            "action": "Approve",
            "next_state": "Approved",
            "allowed": "All",
            "allow_self_approval": 1,
            "send_email_to_creator": 0,
            "condition": "doc.reports_to_second\n",
            "parent": "Appraisl",
            "parentfield": "transitions",
            "parenttype": "Workflow",
            "doctype": "Workflow Transition"
        },
        {
            "name": "h0o9svo8bk",
            "owner": "Administrator",
            "creation": "2025-11-25 16:48:09.913879",
            "modified": "2025-12-02 12:57:53.437273",
            "modified_by": "Administrator",
            "docstatus": 0,
            "idx": 4,
            "state": "Manager Appraisal",
            "action": "Approve",
            "next_state": "Approved",
            "allowed": "All",
            "allow_self_approval": 1,
            "send_email_to_creator": 0,
            "condition": "not doc.reports_to_second",
            "parent": "Appraisl",
            "parentfield": "transitions",
            "parenttype": "Workflow",
            "doctype": "Workflow Transition"
        }
    ],
    "__last_sync_on": "2025-12-15T11:09:39.240Z"
}
def execute():
    workflow_patch()