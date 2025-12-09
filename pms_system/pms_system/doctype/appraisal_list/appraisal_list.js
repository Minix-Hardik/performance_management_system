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

        const tab_field = "final_report_tab";
        const allowed_roles = ["HR Manager"];
        let has_role = allowed_roles.some(role => frappe.user_roles.includes(role));
        if (frappe.session.user === "Administrator") {
            has_role = true;
        }
        frm.toggle_display(tab_field, has_role);

        frm.get_field('appraisal').$wrapper.html(
            `<appraisal-rating></appraisal-rating>`
        );
        frm.get_field('final_report').$wrapper.html(
            `<appraisal-report></appraisal-report>`
        );
        const user = frappe.session.user;
        if (frm.doc.appraisal_cycle) {
            load_appraisal_cycle_weights(frm);
        }
        make_all_readonly(frm);
        if (frm.doc.workflow_state === "Self Appraisal" && user !== frm.doc.employee_user_id) {
            hide_all_workflow_actions(frm);
        }
        if (frm.doc.workflow_state === "Manager Appraisal" && user !== frm.doc.reports_to_user_id) {
            hide_all_workflow_actions(frm);
        }
        if (frm.doc.workflow_state === "Second Manager Review" && user !== frm.doc.reports_to_second_user) {
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
            // Insert popup HTML content
            dialog.fields_dict.custom_section.$wrapper.html(`
                <div style="padding:10px 0">

                    <h3>As per you, what do you deserve</h3>

                    <label><b>Rating (10% to 20%)</b></label>
                    <input type="range" id="rating_slider" min="10" max="20" value="10" step="1"
                        style="width:100%; cursor:pointer;">

                    <div style="margin-top:5px;">
                        <span>Selected: </span>
                        <span id="rating_display" style="font-weight:bold;">10%</span>
                    </div>

                    <input type="hidden" id="rating_value" value="10">

                    <label style="margin-top:10px"><b>Remarks</b></label>
                    <textarea id="popup_remarks" class="form-control" rows="3" placeholder="Enter remarks (min 10 characters)"></textarea>
                </div>
                `);
            dialog.show();

            // ⭐ Slider change handler
            dialog.$wrapper.find("#rating_slider").on("input", function () {
                let value = $(this).val();
                dialog.$wrapper.find("#rating_display").text(value + "%");
                dialog.$wrapper.find("#rating_value").val(value);
            });


        }
        if (
            old_state === "Manager Appraisal" &&
            (new_state === "Approved" || new_state === "Second Manager Review")
        ) {
            frappe.validated = false;

            const employee_rating = frm.doc.as_employee_what_he_deserve || "Not Submitted";
            const employee_remarks = frm.doc.remarks || "No Remarks Provided";

            const dialog = new frappe.ui.Dialog({
                title: "Promotion & Review Details",
                fields: [
                    {
                        fieldtype: "Section Break",
                        label: "Employee Submitted Details"
                    },
                    {
                        fieldtype: "HTML",
                        fieldname: "employee_info_html",
                    },

                    {
                        fieldtype: "Section Break"
                    },

                    // 🔹 Step 1 → Decide if employee is eligible
                    {
                        fieldtype: "Check",
                        label: "Is Employee Eligible for Promotion",
                        fieldname: "is_promote"
                    },

                    // 🔹 Step 2 → If eligible, manager chooses whether to promote
                    {
                        fieldtype: "Check",
                        label: "Promote to New Designation",
                        fieldname: "enable_promotion",
                        depends_on: "eval:doc.is_promote == 1"
                    },

                    // 🔹 Step 3 → New Designation (only if both checkboxes TRUE)
                    {
                        fieldtype: "Link",
                        label: "New Designation",
                        fieldname: "new_designation",
                        options: "Designation",
                        depends_on: "eval:doc.is_promote == 1 && doc.enable_promotion == 1"
                    },

                    // 🔹 Increment % only if employee is eligible (promotion optional)
                    {
                        fieldtype: "Float",
                        label: "Percentage Increment (%)",
                        fieldname: "increment_percentage",
                        description: "Enter increment like 10, 12.5, 20 etc.",
                        depends_on: "eval:doc.is_promote == 1"
                    },

                    // 🔹 Mandatory remarks
                    {
                        fieldtype: "Small Text",
                        label: "Remarks",
                        fieldname: "remarks",
                        reqd: 1
                    }
                ],
                primary_action_label: "Submit",
                primary_action(values) {

                    if (values.remarks.length < 10) {
                        frappe.msgprint("Remarks must be at least 10 characters.");
                        return;
                    }

                    frm.set_value("manager_updated_designation", values.new_designation);
                    frm.set_value("as_manager_increment_percentage", values.increment_percentage);
                    frm.set_value("manager_final_comment", values.remarks);
                    frm.set_value("is_first_manager_promotion", values.is_promote ? 1 : 0);

                    dialog.hide();
                    frappe.validated = true;
                    frm.save();
                }
            });

            // 🔥 Inject banner content
            dialog.fields_dict.employee_info_html.$wrapper.html(`
        <div style="
            background:#f8f9fa;
            padding:12px 15px;
            border-radius:6px;
            border-left:5px solid #5e64ff;
            margin-bottom:15px;
        ">
            <h4 style="margin:0 0 8px 0;">Employee Asked Increment</h4>

            <p style="margin:0;">
                <b>Self Rating:</b> ${employee_rating}%
            </p>
            <p style="margin:4px 0 0 0; white-space:pre-wrap;">
                <b>Employee Remarks:</b><br> ${employee_remarks}
            </p>
        </div>
    `);

            dialog.show();
        }
        if (old_state === "Second Manager Review" && new_state === "Approved") {
            frappe.validated = false;

            const employee_rating = frm.doc.as_employee_what_he_deserve || "Not Submitted";
            const employee_remarks = frm.doc.remarks || "No Remarks Provided";

            // Manager submitted data
            const manager_rating = frm.doc.as_first_manager_what_he_deserve || "Not Submitted";
            const manager_remarks = frm.doc.as_manager_remarks || "No Remarks Provided";
            const manager_increment = frm.doc.as_manager_increment_percentage || "0";
            const manager_designation = frm.doc.manager_updated_designation || "No Change";

            const dialog = new frappe.ui.Dialog({
                title: "Promotion & Review Details",
                fields: [
                    {
                        fieldtype: "Section Break",
                        label: "Employee Submitted Details"
                    },
                    {
                        fieldtype: "HTML",
                        fieldname: "employee_info_html",
                    },

                    {
                        fieldtype: "Section Break"
                    },

                    // 🔹 Step 1 → Decide if employee is eligible
                    {
                        fieldtype: "Check",
                        label: "Is Employee Eligible for Promotion",
                        fieldname: "is_promote"
                    },

                    // 🔹 Step 2 → If eligible, manager chooses whether to promote
                    {
                        fieldtype: "Check",
                        label: "Promote to New Designation & Department",
                        fieldname: "enable_promotion",
                        depends_on: "eval:doc.is_promote == 1"
                    },

                    // 🔹 Step 3 → New Designation (only if both checkboxes TRUE)
                    {
                        fieldtype: "Link",
                        label: "New Designation",
                        fieldname: "new_designation",
                        options: "Designation",
                        depends_on: "eval:doc.is_promote == 1 && doc.enable_promotion == 1"
                    },
                    // 🔹 Increment % only if employee is eligible (promotion optional)
                    {
                        fieldtype: "Float",
                        label: "Percentage Increment (%)",
                        fieldname: "increment_percentage",
                        description: "Enter increment like 10, 12.5, 20 etc.",
                        depends_on: "eval:doc.is_promote == 1"
                    },

                    // 🔹 Mandatory remarks
                    {
                        fieldtype: "Small Text",
                        label: "Remarks",
                        fieldname: "remarks",
                        reqd: 1
                    }
                ],
                primary_action_label: "Submit",
                primary_action(values) {

                    if (values.remarks.length < 10) {
                        frappe.msgprint("Remarks must be at least 10 characters.");
                        return;
                    }
                    frm.set_value("is_second_manager_promotion", values.is_promote ? 1 : 0);
                    frm.set_value("second_manager_updated_designation", values.new_designation);
                    frm.set_value("as_second_manager_increment_percentage_copy", values.increment_percentage);
                    frm.set_value("second_manager_comment", values.remarks);

                    dialog.hide();
                    frappe.validated = true;
                    frm.save();
                }
            });

            // 🔥 Inject banner content
            dialog.fields_dict.employee_info_html.$wrapper.html(`
        <div style="
    background:#f8f9fa;
    padding:12px 15px;
    border-radius:6px;
    border-left:5px solid #5e64ff;
    margin-bottom:15px;
">
    <h4 style="margin:0 0 8px 0;">Employee Self Appraisal</h4>

    <p style="margin:0;">
        <b>Self Rating:</b> ${employee_rating}%
    </p>
    <p style="margin:4px 0 0 0; white-space:pre-wrap;">
        <b>Employee Remarks:</b><br> ${employee_remarks}
    </p>
</div>

<div style="
    background:#eef4ff;
    padding:12px 15px;
    border-radius:6px;
    border-left:5px solid #2490ef;
    margin-bottom:15px;
">
    <h4 style="margin:0 0 8px 0;">Manager Appraisal</h4>

    <p style="margin:0;">
        <b>Manager Rating:</b> ${manager_rating}%
    </p>
    <p style="margin:4px 0;">
        <b>Increment Percentage:</b> ${manager_increment}%
    </p>
    <p style="margin:4px 0;">
        <b>Updated Designation:</b> ${manager_designation}
    </p>
    <p style="margin:4px 0 0 0; white-space:pre-wrap;">
        <b>Manager Remarks:</b><br> ${manager_remarks}
    </p>
</div>
    `);

            dialog.show();
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
