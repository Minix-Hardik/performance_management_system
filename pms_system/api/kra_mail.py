import frappe

@frappe.whitelist()
def send_bulk_kra_mail(kras):

    import json

    if isinstance(kras, str):
        kras = json.loads(kras)

    grouped = {}

    for kra_name in kras:

        doc = frappe.get_doc("KRA", kra_name)

        employee = doc.custom_employee

        if employee not in grouped:
            grouped[employee] = []

        grouped[employee].append(doc)

    site_url = frappe.utils.get_url()

    for employee, kra_list in grouped.items():

        emp_doc = frappe.get_doc("Employee", employee)

        rows = ""

        for kra in kra_list:

            rows += f"""
                <tr>
                    <td>{kra.name}</td>
                    <td>{kra.kra}</td>
                </tr>
            """

        kra_url = f"{site_url}/app/kra"

        message = f"""
            <p>Dear {emp_doc.employee_name},</p>

            <p>
                Your KRAs have been submitted for approval.
                Please review them.
            </p>

            <table border="1" cellpadding="5" cellspacing="0"
            style="border-collapse: collapse;">
                <tr>
                    <th>KRA ID</th>
                    <th>KRA</th>
                </tr>

                {rows}
            </table>

            <br>

            <a href="{kra_url}"
            style="
                background:#000;
                color:#fff;
                padding:12px 18px;
                border-radius:6px;
                text-decoration:none;
                display:inline-block;
            ">
                Review KRAs
            </a>

            <br><br>

            <p>Regards,<br>HR Team</p>
        """

        frappe.sendmail(
            recipients=[emp_doc.user_id],
            subject="KRA Approval Required",
            message=message
        )

    return True