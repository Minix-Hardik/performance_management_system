frappe.ui.form.on('Appraisal', {
    refresh(frm) {

        frm.fields_dict.appraisal_kra.grid.get_field('kra').get_query = function(doc, cdt, cdn) {

            return {
                filters: {
                    custom_employee: frm.doc.employee
                }
            };
        };
        frm.get_field('custom_question').$wrapper.html(
            `<question-interface docname="${frm.doc.name}"></question-interface>`
        );
    },
    onload(frm) {
        frm.get_field('custom_question').$wrapper.html(
            `<question-interface docname="${frm.doc.name}"></question-interface>`
        );
    }
});