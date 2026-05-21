frappe.listview_settings["KRA"] = {

    onload(listview) {

        listview.page.add_inner_button("Send Approval Mail", function() {

            let selected = listview.get_checked_items();

            if (!selected.length) {
                frappe.msgprint("Please select KRA records");
                return;
            }

            let kras = selected.map(d => d.name);

            frappe.call({
                method: "pms_system.api.kra_mail.send_bulk_kra_mail",
                args: {
                    kras: kras
                },
                callback: function(r) {

                    frappe.msgprint("Mail Sent Successfully");

                }
            });

        });

    }
};