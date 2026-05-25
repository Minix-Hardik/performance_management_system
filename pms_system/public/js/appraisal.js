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
        calculate_final_score(frm);
    },
    onload(frm) {
        frm.get_field('custom_question').$wrapper.html(
            `<question-interface docname="${frm.doc.name}"></question-interface>`
        );
    },
    validate(frm) {
        calculate_final_score(frm);
    }
});

frappe.ui.form.on('Appraisal KRA', {
    goal_completion(frm, cdt, cdn) {
        calculate_final_score(frm);
    },
    per_weightage(frm, cdt, cdn) {
        calculate_final_score(frm);
    }
});

function calculate_final_score(frm) {
    let total = 0;

    (frm.doc.appraisal_kra || []).forEach(row => {
        let completion = flt(row.goal_completion || 0); // Goal Completion (%)
        let weight = flt(row.per_weightage || 0); // KRA Weight (%)

        let score = (completion * weight) / 100;

        if (flt(row.goal_score) !== flt(score)) {
            frappe.model.set_value(row.doctype, row.name, 'goal_score', score);
        }

        total += score;
    });

    frm.set_value('total_score', total);
    frm.set_value('final_score', total);
}