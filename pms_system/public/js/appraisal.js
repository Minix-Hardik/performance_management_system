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
    goal_score(frm, cdt, cdn) {
        calculate_final_score(frm);
    },
    per_weightage(frm, cdt, cdn) {
        calculate_final_score(frm);
    }
});

function calculate_final_score(frm) {
    let total = 0;
    let total_weight = 0;

    (frm.doc.appraisal_kra || []).forEach(row => {
        let score = flt(row.goal_score || 0); // KRA Score
        let weight = flt(row.per_weightage || 0); // KRA Weight (%)

        total += score * (weight / 100);
        total_weight += weight;
    });

    if (total_weight > 0) {
        // Overall score = Σ (KRA Score × KRA Weight%) ÷ 5
        let final_score = total / 5;

        frm.set_value('total_score', final_score);
        frm.set_value('final_score', final_score);
    }
}