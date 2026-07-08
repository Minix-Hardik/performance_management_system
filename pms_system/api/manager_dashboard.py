# pyrefly: ignore [missing-import]
import frappe

def get_employee_node_data(emp_name, employee_name, reviewer_employee):
    children = get_reports_tree(emp_name)
    
    # Get latest Appraisal for this employee
    a = frappe.get_all("Appraisal",
        filters={
            "employee": emp_name,
            "docstatus": ["<", 2]
        },
        fields=["name", "employee_name", "employee", "final_score", "total_score", "self_score", "docstatus"],
        order_by="creation desc",
        limit=1
    )
    
    kra_score = 0
    self_rating = 0
    docstatus = 0
    appraisal_id = None
    
    if a:
        a_doc = a[0]
        kra_score = a_doc.final_score or a_doc.total_score or 0
        self_rating = a_doc.self_score or 0
        docstatus = a_doc.docstatus
        appraisal_id = a_doc.name
        
    # Get manager rating and feedback ID from linked Employee Performance Feedback
    manager_rating = 0
    feedback_id = None
    custom_avg_score = 0
    if appraisal_id and reviewer_employee:
        feedback = frappe.get_all("Employee Performance Feedback",
            filters={
                "appraisal": appraisal_id,
                "reviewer": reviewer_employee
            },
            fields=["name", "total_score", "custom_avg_score"],
            limit=1
        )
        if feedback:
            manager_rating = feedback[0].total_score or 0
            feedback_id = feedback[0].name
            custom_avg_score = feedback[0].custom_avg_score or 0
        
    team_kra_avg = 0
    team_self_avg = 0
    team_manager_avg = 0
    has_team = len(children) > 0
    
    if has_team:
        sub_total, sub_pending, sub_appr, sub_kra, sub_self, sub_manager = get_stats_from_tree(children)
        team_kra_avg = round(sub_kra / sub_appr, 2) if sub_appr > 0 else 0
        team_self_avg = round(sub_self / sub_appr, 2) if sub_appr > 0 else 0
        team_manager_avg = round(sub_manager / sub_appr, 2) if sub_appr > 0 else 0

    return {
        "name": emp_name,
        "appraisal_id": appraisal_id,
        "employee_name": employee_name,
        "kra_score": kra_score,
        "self_rating": self_rating,
        "manager_rating": manager_rating,
        "docstatus": docstatus,
        "feedback_id": feedback_id,
        "custom_avg_score": custom_avg_score,
        "employees": children,
        "has_team": has_team,
        "team_kra_avg": team_kra_avg,
        "team_self_avg": team_self_avg,
        "team_manager_avg": team_manager_avg
    }

def get_reports_tree(manager_employee):
    reporting_employees = frappe.get_all("Employee", 
        filters={"reports_to": manager_employee, "status": "Active"},
        fields=["name", "employee_name"]
    )
    
    employees_data = []
    for emp in reporting_employees:
        node_data = get_employee_node_data(emp.name, emp.employee_name, manager_employee)
        employees_data.append(node_data)
        
    return employees_data

def get_stats_from_tree(employees):
    total_count = 0
    pending_reviews = 0
    appraisal_count = 0
    total_kra = 0
    total_self = 0
    total_manager = 0
    
    for emp in employees:
        total_count += 1
        if emp.get("appraisal_id"):
            appraisal_count += 1
            if (emp.get("kra_score") or 0) == 0:
                pending_reviews += 1
            total_kra += (emp.get("kra_score") or 0)
            total_self += (emp.get("self_rating") or 0)
            total_manager += (emp.get("manager_rating") or 0)
        else:
            pending_reviews += 1
            
        sub_total, sub_pending, sub_appr, sub_kra, sub_self, sub_manager = get_stats_from_tree(emp.get("employees", []))
        total_count += sub_total
        pending_reviews += sub_pending
        appraisal_count += sub_appr
        total_kra += sub_kra
        total_self += sub_self
        total_manager += sub_manager
        
    return total_count, pending_reviews, appraisal_count, total_kra, total_self, total_manager

@frappe.whitelist()
def get_dashboard_data():
    # Sync Custom HTML Block from fixture file on each dashboard load
    try:
        frappe.clear_cache()
        import os
        import json
        fixture_path = frappe.get_app_path("pms_system", "fixtures", "custom_html_block.json")
        if os.path.exists(fixture_path):
            with open(fixture_path, "r") as f:
                data = json.load(f)
            if data and isinstance(data, list):
                block_data = data[0]
                name = block_data.get("name")
                if frappe.db.exists("Custom HTML Block", name):
                    db_doc = frappe.get_doc("Custom HTML Block", name)
                    if db_doc.script != block_data.get("script") or db_doc.html != block_data.get("html") or db_doc.style != block_data.get("style"):
                        db_doc.script = block_data.get("script")
                        db_doc.html = block_data.get("html")
                        db_doc.style = block_data.get("style")
                        db_doc.save(ignore_permissions=True)
                        frappe.db.commit()
                        frappe.clear_cache()
                else:
                    db_doc = frappe.get_doc({
                        "doctype": "Custom HTML Block",
                        "name": name,
                        "html": block_data.get("html"),
                        "script": block_data.get("script"),
                        "style": block_data.get("style")
                    })
                    db_doc.insert(ignore_permissions=True)
                    frappe.db.commit()
                    frappe.clear_cache()
    except Exception as e:
        import traceback
        with open("/Users/hardik/minix-bench/dashboard_sync_error.log", "w") as log_file:
            log_file.write(traceback.format_exc())

    user = frappe.session.user
    roles = frappe.get_roles(user)
    is_hr_admin = "HR Admin" in roles or "System Manager" in roles
    
    # 1. Get Employee for logged in user
    manager_employee = frappe.get_value("Employee", {"user_id": user, "status": "Active"}, "name")
    
    if not manager_employee and not is_hr_admin:
        return {
            "total_employees": 0,
            "pending_reviews": 0,
            "average_score": 0,
            "employees": []
        }
        
    # 2. Get recursive tree
    if is_hr_admin:
        # Fetch all top-level active employees
        top_employees = frappe.get_all(
            "Employee",
            filters={
                "reports_to": ["in", [None, ""]],
                "status": "Active"
            },
            fields=["name", "employee_name"]
        )
        employees_tree = []
        for top_emp in top_employees:
            node_data = get_employee_node_data(top_emp.name, top_emp.employee_name, manager_employee)
            employees_tree.append(node_data)
    else:
        employees_tree = get_reports_tree(manager_employee)
    
    # 3. Calculate statistics recursively
    total_employees, pending_reviews, appraisal_count, total_kra, total_self, total_manager = get_stats_from_tree(employees_tree)
    avg_score = round(total_kra / total_employees, 2) if total_employees > 0 else 0
    
    team_kra_avg = round(total_kra / appraisal_count, 2) if appraisal_count > 0 else 0
    team_self_avg = round(total_self / appraisal_count, 2) if appraisal_count > 0 else 0
    team_manager_avg = round(total_manager / appraisal_count, 2) if appraisal_count > 0 else 0
    
    return {
        "manager_employee_id": manager_employee,
        "total_employees": total_employees,
        "pending_reviews": pending_reviews,
        "average_score": avg_score,
        "team_kra_avg": team_kra_avg,
        "team_self_avg": team_self_avg,
        "team_manager_avg": team_manager_avg,
        "employees": employees_tree
    }

@frappe.whitelist()
def submit_feedback(employee, appraisal, data):
    import json
    
    if isinstance(data, str):
        data = json.loads(data)
        
    rating = data.get("rating")
    remarks = data.get("remarks")
    
    doc = frappe.new_doc("Employee Performance Feedback")
    doc.employee = employee
    doc.appraisal = appraisal
    
    # Map rating to standard Frappe Feedback Rating field (if necessary, check field type. Assuming rating is valid)
    doc.rating = rating
    # Map remarks to standard feedback field. In standard Frappe HRMS it might be feedback instead of remarks
    if doc.meta.has_field("feedback"):
        doc.feedback = remarks
    else:
        doc.remarks = remarks
        
    if doc.meta.has_field("reviewer"):
        doc.reviewer = frappe.session.user
    elif doc.meta.has_field("manager"):
        doc.manager = frappe.session.user
        
    doc.insert(ignore_permissions=True)
    
    return {"status": "success"}
