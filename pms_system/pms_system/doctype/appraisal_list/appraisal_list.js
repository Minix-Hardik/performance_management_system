// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

frappe.ui.form.on('Appraisal List', {
    onload: function (frm) {
        set_all_employee_options(frm);
    },
    refresh: function (frm) {
        set_all_employee_options(frm);
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