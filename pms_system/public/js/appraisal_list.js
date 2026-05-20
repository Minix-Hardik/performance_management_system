frappe.listview_settings["Appraisal"] = {

    button: {
        show(doc) {
            return doc.docstatus === 1;
        },

        get_label() {
            return "Feedback";
        },

        get_description(doc) {
            return `Create Feedback for ${doc.employee_name || doc.name}`;
        },

        
        action(doc) {
            frappe.db.get_doc("Appraisal", doc.name)
                .then(appraisal => {

                    frappe.route_options = {
                        appraisal: appraisal.name,
                        employee: appraisal.employee,
                        employee_name: appraisal.employee_name,
                        appraisal_cycle: appraisal.appraisal_cycle,
                    };

                    frappe.new_doc("Employee Performance Feedback");

                });

        }
    },

    refresh(listview) {

        setTimeout(() => {

            $('.btn-action').css({
                'background': '#000',
                'color': '#fff',
                'border-color': '#000'
            });

        }, 500);

    }
};