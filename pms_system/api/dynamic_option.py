@frappe.whitelist()
def get_options(doc=None, doctype=None, docname=None, fieldname=None):
    row = frappe.get_doc(doctype, docname)
        options = row.options or ""
        opts = [o.strip() for o in options.split(",") if o.strip()]
        return "\n".join(opts)