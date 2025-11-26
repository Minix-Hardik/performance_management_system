// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt


function make_all_readonly(frm) {
    Object.keys(frm.fields_dict).forEach(f => {
        frm.set_df_property(f, "read_only", 1);
    });
    frm.meta.fields
        .filter(df => df.fieldtype === "Table")
        .forEach(table_df => {

            const table = table_df.fieldname;
            frm.set_df_property(table, "read_only", 1);
            let child_meta = frappe.get_meta(table_df.options);

            child_meta.fields.forEach(cdf => {
                frm.fields_dict[table].grid.update_docfield_property(
                    cdf.fieldname,
                    "read_only",
                    1
                );
            });

            frm.refresh_field(table);
        });
}


function make_readonly_except_multi(frm, table_map) {
    make_all_readonly(frm);

    Object.entries(table_map).forEach(([table, cfg]) => {

        frm.set_df_property(table, "read_only", 0);

        let grid = frm.fields_dict[table].grid;
        let child_meta = frappe.get_meta(grid.doctype);

        let editable_fields = cfg.readonly || [];
        let hidden_fields = cfg.hidden || [];

        child_meta.fields.forEach(cdf => {
            let fname = cdf.fieldname;

            // HIDE only the specified fields
            if (hidden_fields.includes(fname)) {
                grid.update_docfield_property(fname, "hidden", 1);
                grid.update_docfield_property(fname, "read_only", 1);
                return;
            }

            // MAKE ONLY THESE FIELDS EDITABLE
            if (editable_fields.includes(fname)) {
                grid.update_docfield_property(fname, "read_only", 0);
                // DO NOT TOUCH hidden property
                return;
            }
            grid.update_docfield_property(fname, "read_only", 1);
        });

        frm.refresh_field(table);
    });
}



frappe.ui.form.on('Appraisal List', {
    onload: function (frm) {
        set_all_employee_options(frm);
        make_all_readonly(frm)
        const user = frappe.session.user;
        if (frm.doc.workflow_state === "Self Appraisal" && frm.doc.employee_user_id === user) {
            make_readonly_except_multi(frm, {
                answer: {
                    readonly: ["employee_ans_in_option", "employee_ans_in_discriptive"],
                    hidden: []

                },
                competency: {
                    readonly: ["employee_rating_number", "employee_description"],
                    hidden: ["manager_rating", "manager_description"]
                }
            });
        }
    },
    refresh: function (frm) {
        set_all_employee_options(frm);
        const user = frappe.session.user;
        make_all_readonly(frm);
        if (frm.doc.workflow_state === "Self Appraisal" && frm.doc.employee_user_id === user) {
            make_readonly_except_multi(frm, {
                answer: {
                    readonly: ["employee_ans_in_option", "employee_ans_in_discriptive"],
                    hidden: []

                },
                competency: {
                    readonly: ["employee_rating_number", "employee_description"],
                    hidden: ["manager_rating", "manager_description"]
                }
            });
        }

    }
});

function set_all_employee_options(frm) {
    if (frm.doc.answer && frm.doc.answer.length) {
        frm.doc.answer.forEach(row => {
            const options_text = row.options || "";
            const options_list = options_text.split(',').map(item => item.trim()).join('\n');

            frm.fields_dict['answer'].grid.update_docfield_property(
                'employee_ans_in_option', // fieldname of the select field
                'options',                 // property to update
                options_list,              // new value
                row.name                   // row name/cdn
            );
        });
    }
}

frappe.ui.form.on('Question Child Table', {
    options: function (frm, cdt, cdn) {
        const row = frappe.get_doc(cdt, cdn);
        const options_text = row.options || "";
        const options_list = options_text.split(',').map(item => item.trim()).join('\n');

        frm.fields_dict['answer'].grid.get_field("employee_ans_in_option").set_options(options_list, cdn);
    }
});

frappe.ui.form.on("Competency Calculation", {
    employee_rating_number(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        validate_rating_value(frm, row, "employee_rating_number");
    },

    manager_rating(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        validate_rating_value(frm, row, "manager_rating");
    }
});

function validate_rating_value(frm, row, fieldname) {
    if (row[fieldname] > 10) {
        frappe.msgprint(__("Value cannot be greater than 10"));
        row[fieldname] = 10;
        frm.refresh_field("competency");
    }
}
