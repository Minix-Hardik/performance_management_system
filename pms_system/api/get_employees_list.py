import frappe

@frappe.whitelist()
def get_employees_list(doc):
    doc = frappe.get_doc(frappe.parse_json(doc))
    employees = doc.get_employees_for_appraisal()
    appraisal_templates = doc.get_appraisal_template_map()

    # temporary list to return
    updated_rows = []

    if employees:
        for d in employees:
            updated_rows.append(
                {
                    "employee": d.name,
                    "employee_name": d.employee_name,
                    "branch": d.branch,
                    "designation": d.designation,
                    "department": d.department,
                    "appraisal_template": appraisal_templates.get(d.designation),
                }
            )
    else:
        frappe.msgprint(_("No employees found for the selected criteria"))

    return updated_rows
