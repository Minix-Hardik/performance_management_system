import frappe

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
        
    # 2. Get all employees reporting to this manager
    reporting_employees = frappe.get_all("Employee", 
        filters={"reports_to": manager_employee, "status": "Active"},
        fields=["name", "employee_name"]
    )
    
    if not reporting_employees:
        return {
            "total_employees": 0,
            "pending_reviews": 0,
            "average_score": 0,
            "employees": []
        }
        
    reporting_employee_ids = [e.name for e in reporting_employees]
    
    # 3. Get latest Appraisal for each reporting employee
    appraisals = frappe.get_all("Appraisal",
        filters={
            "employee": ["in", reporting_employee_ids],
            "docstatus": ["<", 2]
        },
        fields=["name", "employee_name", "employee", "final_score", "total_score", "self_score", "docstatus"],
        order_by="creation desc"
    )
    
    # Deduplicate: only get the most recent appraisal per employee
    latest_appraisals = {}
    for a in appraisals:
        if a.employee not in latest_appraisals:
            latest_appraisals[a.employee] = a
            
    total_employees = len(reporting_employees)
    pending_reviews = 0
    total_kra_score = 0
    employees_data = []
    
    # Loop through reporting employees
    for emp in reporting_employees:
        a = latest_appraisals.get(emp.name)
        
        # Only show employees who have created an appraisal
        if a:
            kra_score = a.final_score or a.total_score or 0
            self_rating = a.self_score or 0
            
            # Simple heuristic for pending review
            if kra_score == 0:
                pending_reviews += 1
                
            total_kra_score += kra_score
            
            employees_data.append({
                "name": emp.name,
                "appraisal_id": a.name,
                "employee_name": emp.employee_name,
                "kra_score": kra_score,
                "self_rating": self_rating,
                "manager_rating": kra_score, # using kra_score if no manager_rating exists
                "docstatus": getattr(a, "docstatus", 0)
            })
            
    # Recalculate total_employees based on those who actually have an appraisal
    total_employees = len(employees_data)
    avg_score = round(total_kra_score / total_employees, 2) if total_employees > 0 else 0
    
    return {
        "manager_employee_id": manager_employee,
        "total_employees": total_employees,
        "pending_reviews": pending_reviews,
        "average_score": avg_score,
        "employees": employees_data
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
