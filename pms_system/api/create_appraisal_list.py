import frappe

@frappe.whitelist()
def create_appraisal_list(doc_name):
    doc = frappe.get_doc("Appraisal Cycle", doc_name)

    # get employee rows from Appraisees child table
    employees = doc.appraisees  # child table fieldname
    
    # get template map (if using designation-template mapping)
    appraisal_templates = doc.get_appraisal_template_map() if hasattr(doc, "get_appraisal_template_map") else {}

    created_appraisals = []

    if employees:
        for d in employees:

            appraisal = frappe.get_doc({
                "doctype": "Appraisal List",
                "employee": d.employee,          
                "appraisal_cycle": doc.name,
                "start_date": doc.start_date,
                "end_date": doc.end_date
            })

            appraisal.insert(ignore_permissions=True)
            created_appraisals.append(appraisal.name)

    else:
        frappe.msgprint(_("No employees found in Appraisees table."))

    return created_appraisals

