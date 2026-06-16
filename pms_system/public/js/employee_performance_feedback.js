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
    }
});
