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

        // Debug dirty fields to find what triggers the Not Saved status
        setTimeout(() => {
            if (frm.is_dirty()) {
                let changed = [];
                for (let key in frm.doc) {
                    if (frm._original_doc && frm.doc[key] !== frm._original_doc[key]) {
                        if (!key.startsWith("__") && key !== "modified") {
                            changed.push(`${key}: current=${JSON.stringify(frm.doc[key])}, original=${JSON.stringify(frm._original_doc[key])}`);
                        }
                    }
                }
                console.log("PMS SYSTEM DEBUG: Form is dirty. Changed fields:", changed);
            }
        }, 100);
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

    const new_avg = (total + self_total) / 2.0;

    if (Math.abs(flt(frm.doc.total_score) - total) > 0.001) {
        frm.set_value("total_score", total);
    }
    if (Math.abs(flt(frm.doc.custom_avg_score) - new_avg) > 0.001) {
        frm.set_value("custom_avg_score", new_avg);
    }
}
