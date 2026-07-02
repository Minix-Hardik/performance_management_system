// Disable standard crashing setup_chart handler
frappe.ui.form.off('Appraisal', 'setup_chart');

// Register safe chart handler
frappe.ui.form.on('Appraisal', 'setup_chart', function(frm) {
    const labels = [];
    const maximum_scores = [];
    const scores = [];

    (frm.doc.appraisal_kra || []).forEach((d) => {
        labels.push(d.kra);
        maximum_scores.push(d.per_weightage || 0);
        scores.push(d.goal_score || 0);
    });

    if (labels.length && maximum_scores.length && scores.length) {
        try {
            frm.dashboard.render_graph({
                data: {
                    labels: labels,
                    datasets: [
                        {
                            name: "Maximum Score",
                            chartType: "bar",
                            values: maximum_scores,
                        },
                        {
                            name: "Score Obtained",
                            chartType: "bar",
                            values: scores,
                        },
                    ],
                },
                title: __("Scores"),
                height: 250,
                type: "bar",
                barOptions: {
                    spaceRatio: 0.7,
                },
                colors: ["blue", "green"],
            });
        } catch (err) {
            console.warn("Chart rendering failed (container width calculation error):", err);
        }
    }
});

frappe.ui.form.on('Appraisal', {
    refresh(frm) {

        frm.fields_dict.appraisal_kra.grid.get_field('kra').get_query = function (doc, cdt, cdn) {

            return {
                filters: {
                    custom_employee: frm.doc.employee
                }
            };
        };
        if (frm.fields_dict.self_ratings) {
            frm.toggle_display("self_ratings", false);
        }
        frm.get_field('custom_question').$wrapper.html(
            `<question-interface docname="${frm.doc.name}"></question-interface>`
        );
        if (frm.fields_dict.custom_self_appraisal_rating_html) {
            frm.get_field('custom_self_appraisal_rating_html').$wrapper.html(
                `<self-appraisal-rating-interface docname="${frm.doc.name}"></self-appraisal-rating-interface>`
            );
        }
        calculate_final_score(frm);
    },
    onload(frm) {
        if (frm.fields_dict.self_ratings) {
            frm.toggle_display("self_ratings", false);
        }
        frm.get_field('custom_question').$wrapper.html(
            `<question-interface docname="${frm.doc.name}"></question-interface>`
        );
        if (frm.fields_dict.custom_self_appraisal_rating_html) {
            frm.get_field('custom_self_appraisal_rating_html').$wrapper.html(
                `<self-appraisal-rating-interface docname="${frm.doc.name}"></self-appraisal-rating-interface>`
            );
        }
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