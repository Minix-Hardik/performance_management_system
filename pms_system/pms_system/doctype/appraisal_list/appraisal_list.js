// Copyright (c) 2025, Hybrowlabs and contributors
// For license information, please see license.txt

function lock_child_table(frm, childfield) {
    const grid = frm.get_field(childfield).grid;
    grid.cannot_add_rows = true;
    grid.cannot_delete_rows = true;
    grid.cannot_delete_all_rows = true;
    frm.refresh_field(childfield);
}
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
            if (hidden_fields.includes(fname)) {
                grid.update_docfield_property(fname, "hidden", 1);
                grid.update_docfield_property(fname, "read_only", 1);
                return;
            }
            if (editable_fields.includes(fname)) {
                grid.update_docfield_property(fname, "read_only", 0);
                return;
            }
            grid.update_docfield_property(fname, "read_only", 1);
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
        if (frm.doc.workflow_state === "Manager Appraisal" && frm.doc.reports_to_user_id === user) {
            make_readonly_except_multi(frm, {
                competency: {
                    readonly: ["manager_rating", "manager_description"],
                    hidden: []
                }
            });
        }

    },
    refresh: function (frm) {
        const user = frappe.session.user;
        if (frm.doc.appraisal_cycle) {
            load_appraisal_cycle_weights(frm);
        }
        make_all_readonly(frm);
        lock_child_table(frm, "competency");
        lock_child_table(frm, "answer");
        lock_child_table(frm, "kra_vs_goal");
        lock_child_table(frm, "kra");
        if (frm.doc.workflow_state === "Self Appraisal" && user !== frm.doc.employee_user_id) {
            hide_all_workflow_actions(frm);
        }

        // Condition 2: Manager Appraisal stage → only manager can see button
        if (frm.doc.workflow_state === "Manager Appraisal" && user !== frm.doc.reports_to_user_id) {
            hide_all_workflow_actions(frm);
        }
        if (frm.doc.workflow_state === "Self Appraisal" && frm.doc.employee_user_id === user) {
            make_readonly_except_multi(frm, {
                answer: {
                    readonly: ["employee_ans_in_discriptive"],
                    hidden: []

                },
                competency: {
                    readonly: ["employee_rating_number", "employee_description"],
                    hidden: ["manager_rating", "manager_description"]
                }
            });

        }
        if (frm.doc.workflow_state === "Manager Appraisal" && frm.doc.reports_to_user_id === user) {
            make_readonly_except_multi(frm, {
                competency: {
                    readonly: ["manager_rating", "manager_description"],
                    hidden: []
                }
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
    calculate_competency_total(frm);
}

function calculate_row_weighted_score(frm, row) {
    let employee = cint(row.employee_rating_number) || 0;
    let manager = cint(row.manager_rating) || 0;
    let combined_score = (manager + employee) / 2;
    return ((combined_score / 10) * (row.weightage || 0));
}

function calculate_competency_total(frm) {
    let raw_total = 0;

    (frm.doc.competency || []).forEach(row => {
        raw_total += calculate_row_weighted_score(frm, row);
    });

    let comp_weight_ratio = (frm.appraisal_cycle_data?.competency_weight || 50) / 100;
    if (frm.appraisal_cycle_data && frm.appraisal_cycle_data.competency_weight) {
        comp_weight = frm.appraisal_cycle_data.competency_weight / 100;
    }

    let final_score = raw_total * comp_weight_ratio;

    frm.set_value("competency_score", final_score);
    frm.set_value("final_score", final_score)
    frm.refresh_field("competency_score");
    frm.refresh_field("final_score")
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


// function validate_rating_value(frm, row, fieldname) {
//     if (row[fieldname] > 10) {
//         frappe.msgprint(__("Value cannot be greater than 10"));
//         row[fieldname] = 10;
//         frm.refresh_field("competency");
//     }
// }
