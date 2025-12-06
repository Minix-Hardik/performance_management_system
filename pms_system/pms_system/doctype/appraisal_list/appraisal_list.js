// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

// function lock_child_table(frm, childfield) {
//     const grid = frm.get_field(childfield).grid;
//     grid.cannot_add_rows = true;
//     grid.cannot_delete_rows = true;
//     grid.cannot_delete_all_rows = true;
//     frm.refresh_field(childfield);
// }
function load_appraisal_cycle_weights(frm) {
    frappe.db.get_doc("Appraisal Cycle", frm.doc.appraisal_cycle)
        .then(doc => {
            frm.appraisal_cycle_data = {
                kra_weight: doc.custom_kra_weight || 70,           // fallback
                competency_weight: doc.custom_competency_weight || 30
            };
        });
}
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

function hide_all_workflow_actions(frm) {
    $(frm.page.wrapper).find('button[data-label="Actions"]').hide();
    $(frm.page.wrapper)
        .find('button:contains("Actions")')
        .closest("button")
        .hide();

    // Hide dropdown if rendered as secondary button
    frm.page.btn_secondary?.hide();
}


frappe.ui.form.on('Appraisal List', {
    onload: function (frm) {
        make_all_readonly(frm)
        const user = frappe.session.user;
        if (frm.doc.workflow_state === "Self Appraisal" && user !== frm.doc.employee_user_id) {
            hide_all_workflow_actions(frm)
        }
        if (frm.doc.workflow_state === "Manager Appraisal" && user !== frm.doc.reports_to_user_id) {
            hide_all_workflow_actions(frm)
        }
        if (frm.doc.workflow_state === "Second Manager Review" && user !== frm.doc.reports_to_second_user) {
            hide_all_workflow_actions(frm)
        }
    },
    refresh: function (frm) {
        frm.get_field('appraisal').$wrapper.html(
            `<appraisal-rating></appraisal-rating>`
        );
        const user = frappe.session.user;
        if (frm.doc.appraisal_cycle) {
            load_appraisal_cycle_weights(frm);
        }
        make_all_readonly(frm);
        if (frm.doc.workflow_state === "Self Appraisal" && user !== frm.doc.employee_user_id) {
            hide_all_workflow_actions(frm);
        }

        // Condition 2: Manager Appraisal stage → only manager can see button
        if (frm.doc.workflow_state === "Manager Appraisal" && user !== frm.doc.reports_to_user_id) {
            hide_all_workflow_actions(frm);
        }
    },
    before_workflow_action: (frm) => {

        const old_state = frm.doc.workflow_state;
        const action = frm.selected_workflow_action;

        const wf = frappe.workflow.workflows[frm.doctype];
        if (!wf) {
            console.log("No workflow found for this doctype");
            return;
        }

        // Find transition based on selected action
        const transition = wf.transitions.find(t => t.action === action);
        const new_state = transition ? transition.next_state : null;

        console.log("OLD:", old_state);
        console.log("ACTION:", action);
        console.log("NEW:", new_state);

        // 🚨 Trigger popup ONLY on Self → Manager Appraisal
        if (old_state === "Self Appraisal" && new_state === "Manager Appraisal") {

            frappe.validated = false;

            const dialog = new frappe.ui.Dialog({
                title: "Additional Information Required",
                fields: [
                    { fieldtype: "HTML", fieldname: "custom_section" }
                ],
                primary_action_label: "Submit",
                primary_action() {

                    const name = dialog.$wrapper.find("#popup_name").val();
                    const remarks = dialog.$wrapper.find("#popup_remarks").val();
                    const rating = dialog.$wrapper.find("#rating_value").val();
                    if (!remarks || remarks.length < 10) {
                        frappe.msgprint("Remarks must be at least 10 characters");
                        return;
                    }
                    if (!rating) {
                        frappe.msgprint("Please select a rating between 8 and 20");
                        return;
                    }

                    frm.set_value("remarks", remarks);
                    frm.set_value("as_employee_what_he_deserve", rating);

                    dialog.hide();
                    frappe.validated = true;
                    frm.save();
                }
            });

            // Insert popup HTML content
            dialog.fields_dict.custom_section.$wrapper.html(`
            <div style="padding:10px 0">

                <h3>As per you, what do you deserve</h3>
                <div id="rating_buttons" style="margin: 10px 0; display:flex; flex-wrap:wrap; gap:6px;"></div>
                <input type="hidden" id="rating_value">

                <label style="margin-top:10px"><b>Remarks</b></label>
                <textarea id="popup_remarks" class="form-control" rows="3" placeholder="Enter remarks (min 10 characters)"></textarea>
            </div>
        `);

            dialog.show();

            // ⭐ Generate Rating Buttons 8 → 20
            let container = dialog.$wrapper.find("#rating_buttons");

            for (let i = 8; i <= 20; i++) {
                container.append(`
                <button type="button" 
                    class="btn btn-sm btn-default rating-btn" 
                    data-value="${i}"
                    style="padding:4px 8px; font-size:12px;">
                    ${i} %
                </button>
            `);
            }

            // ⭐ Rating button click handler
            dialog.$wrapper.find(".rating-btn").on("click", function () {
                dialog.$wrapper.find(".rating-btn")
                    .removeClass("btn-primary")
                    .addClass("btn-default");

                $(this).removeClass("btn-default").addClass("btn-primary");

                dialog.$wrapper.find("#rating_value").val($(this).data("value"));
            });

        }
    }

});

function validate_rating_value(frm, row, field) {
    if (row[field] < 0 || row[field] > 10) {
        frappe.msgprint("Rating must be between 0 and 10");
        row[field] = 0;
        frm.refresh_field("competency_calculation");
    }
}

function calculate_row_weighted_score(frm, row) {
    let employee = cint(row.employee_rating_number) || 0;
    let manager = cint(row.manager_rating) || 0;
    let combined_score = (manager + employee) / 2;
    return ((combined_score / 10) * (row.weightage || 0));
}



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

// function make_readonly_except_multi(frm, table_map) {
//     make_all_readonly(frm);

//     Object.entries(table_map).forEach(([table, cfg]) => {

//         frm.set_df_property(table, "read_only", 0);

//         let grid = frm.fields_dict[table].grid;
//         let child_meta = frappe.get_meta(grid.doctype);

//         let editable_fields = cfg.readonly || [];
//         let hidden_fields = cfg.hidden || [];
//         let mandatory_fields = cfg.mandatory || [];

//         child_meta.fields.forEach(cdf => {
//             let fname = cdf.fieldname;
//             if (hidden_fields.includes(fname)) {
//                 grid.update_docfield_property(fname, "hidden", 1);
//                 grid.update_docfield_property(fname, "read_only", 1);
//                 return;
//             }
//             if (editable_fields.includes(fname)) {
//                 grid.update_docfield_property(fname, "read_only", 0);
//                 return;
//             }
//             if (mandatory_fields.includes(fname)) {
//                 grid.update_docfield_property(fname, "reqd", 1);
//             }
//             grid.update_docfield_property(fname, "read_only", 1);
//         });

//         frm.refresh_field(table);
//     });
// }
