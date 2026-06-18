frappe.ui.form.on("Employee Performance Feedback", {
    onload(frm) {
        if (frm.is_new() && frm.doc.appraisal && (!frm.doc.feedback_ratings || frm.doc.feedback_ratings.length === 0)) {
            frm.trigger("appraisal");
        }
    },
    refresh(frm) {
        if (frm.is_new() && frm.doc.appraisal && (!frm.doc.feedback_ratings || frm.doc.feedback_ratings.length === 0)) {
            frm.trigger("appraisal");
        }
        calculate_scores(frm);
    }
});

frappe.ui.form.on("Employee Feedback Rating", {
    rating(frm, cdt, cdn) {
        calculate_scores(frm);
    },
    custom_employee_self_rating(frm, cdt, cdn) {
        calculate_scores(frm);
    },
    per_weightage(frm, cdt, cdn) {
        calculate_scores(frm);
    },
    feedback_ratings_remove(frm) {
        calculate_scores(frm);
    },
    custom_kra_title(frm, cdt, cdn) {
        let row = frappe.get_doc(cdt, cdn);
        if (row.custom_kra_title) {
            frappe.db.get_value("KRA", row.custom_kra_title, "description")
                .then(r => {
                    let desc = r.message?.description || "";
                    frappe.model.set_value(cdt, cdn, "custom_description", desc);
                });
        }
    }
});

function calculate_scores(frm) {
    let total = 0;
    let self_total = 0;
    (frm.doc.feedback_ratings || []).forEach(row => {
        let weight = flt(row.per_weightage || 0) / 100.0;
        let rating = flt(row.rating || 0);
        let self_rating = flt(row.custom_employee_self_rating || 0);

        total += rating * 5.0 * weight;
        self_total += self_rating * 5.0 * weight;
    });

    frm.set_value("total_score", total);
    frm.set_value("custom_avg_score", (total + self_total) / 2.0);
}
