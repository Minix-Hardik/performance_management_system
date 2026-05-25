import frappe

def get_reports_tree(manager_employee):
    reporting_employees = frappe.get_all("Employee", 
        filters={"reports_to": manager_employee, "status": "Active"},
        fields=["name", "employee_name"]
    )
    
    employees_data = []
    for emp in reporting_employees:
        children = get_reports_tree(emp.name)
        
        # Get latest Appraisal for this employee
        a = frappe.get_all("Appraisal",
            filters={
                "employee": emp.name,
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
            
        employees_data.append({
            "name": emp.name,
            "appraisal_id": appraisal_id,
            "employee_name": emp.employee_name,
            "kra_score": kra_score,
            "self_rating": self_rating,
            "manager_rating": kra_score, # using kra_score if no manager_rating exists
            "docstatus": docstatus,
            "employees": children
        })
        
    return employees_data

def get_stats_from_tree(employees):
    total_count = 0
    pending_reviews = 0
    total_score = 0
    
    for emp in employees:
        total_count += 1
        if emp.get("appraisal_id"):
            if (emp.get("kra_score") or 0) == 0:
                pending_reviews += 1
            total_score += (emp.get("kra_score") or 0)
        else:
            pending_reviews += 1
            
        sub_total, sub_pending, sub_score = get_stats_from_tree(emp.get("employees", []))
        total_count += sub_total
        pending_reviews += sub_pending
        total_score += sub_score
        
    return total_count, pending_reviews, total_score

@frappe.whitelist()
def get_dashboard_data():
    user = frappe.session.user
    
    # 1. Get Employee for logged in user
    manager_employee = frappe.get_value("Employee", {"user_id": user, "status": "Active"}, "name")
    
    if not manager_employee:
        return {
            "total_employees": 0,
            "pending_reviews": 0,
            "average_score": 0,
            "employees": []
        }
        
    # 2. Get recursive tree
    employees_tree = get_reports_tree(manager_employee)
    
    # 3. Calculate statistics recursively
    total_employees, pending_reviews, total_kra_score = get_stats_from_tree(employees_tree)
    avg_score = round(total_kra_score / total_employees, 2) if total_employees > 0 else 0
    
    return {
        "manager_employee_id": manager_employee,
        "total_employees": total_employees,
        "pending_reviews": pending_reviews,
        "average_score": avg_score,
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
