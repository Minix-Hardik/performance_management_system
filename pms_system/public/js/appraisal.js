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
        toggle_questions_visibility(frm);
        if (frm.fields_dict.custom_self_appraisal_rating_html) {
            let $container = frm.get_field('custom_self_appraisal_rating_html').$wrapper;
            let $existing = $container.find('self-appraisal-rating-interface');
            if (!$existing.length || $existing.attr('docname') !== frm.doc.name) {
                $container.html(
                    `<self-appraisal-rating-interface docname="${frm.doc.name}"></self-appraisal-rating-interface>`
                );
            }
        }
    },
    onload(frm) {
        if (frm.fields_dict.self_ratings) {
            frm.toggle_display("self_ratings", false);
        }
        toggle_questions_visibility(frm);
        if (frm.fields_dict.custom_self_appraisal_rating_html) {
            let $container = frm.get_field('custom_self_appraisal_rating_html').$wrapper;
            let $existing = $container.find('self-appraisal-rating-interface');
            if (!$existing.length || $existing.attr('docname') !== frm.doc.name) {
                $container.html(
                    `<self-appraisal-rating-interface docname="${frm.doc.name}"></self-appraisal-rating-interface>`
                );
            }
        }
    },
    appraisal_cycle(frm) {
        toggle_questions_visibility(frm);
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

    if (flt(frm.doc.total_score) !== flt(total)) {
        frm.set_value('total_score', total);
    }
    if (flt(frm.doc.final_score) !== flt(total)) {
        frm.set_value('final_score', total);
    }
}

function toggle_questions_visibility(frm) {
    if (!frm.doc.appraisal_cycle) {
        set_questions_display(frm, false);
        return;
    }

    // Check if the Appraisal Cycle is already loaded in locals
    let local_cycle = frappe.get_doc("Appraisal Cycle", frm.doc.appraisal_cycle);
    if (local_cycle && local_cycle.custom_question !== undefined) {
        set_questions_display(frm, Boolean(local_cycle.custom_question));
    } else {
        // Initially hide until fetched from server to prevent flash of content
        set_questions_display(frm, false);
    }

    frappe.db.get_value("Appraisal Cycle", frm.doc.appraisal_cycle, "custom_question", function(r) {
        let show = false;
        if (r && (r.custom_question == 1 || r.custom_question === true)) {
            show = true;
        }
        set_questions_display(frm, show);
    });
}

function set_questions_display(frm, show) {
    // 1. Standard Frappe toggle_display and set_df_property on Tab Break & Fields
    if (frm.fields_dict.custom_questions) {
        frm.set_df_property("custom_questions", "hidden", show ? 0 : 1);
        frm.toggle_display("custom_questions", show);
    }
    if (frm.fields_dict.custom_question) {
        frm.set_df_property("custom_question", "hidden", show ? 0 : 1);
        frm.toggle_display("custom_question", show);
        if (show) {
            if (!frm.get_field('custom_question').$wrapper.find('question-interface').length) {
                frm.get_field('custom_question').$wrapper.html(
                    `<question-interface docname="${frm.doc.name}"></question-interface>`
                );
            }
        } else {
            frm.get_field('custom_question').$wrapper.html('');
        }
    }
    if (frm.fields_dict.custom_section_break_l40xg) {
        frm.set_df_property("custom_section_break_l40xg", "hidden", show ? 0 : 1);
        frm.toggle_display("custom_section_break_l40xg", show);
    }
    if (frm.fields_dict.custom_question_child_table) {
        frm.set_df_property("custom_question_child_table", "hidden", show ? 0 : 1);
        frm.toggle_display("custom_question_child_table", show);
    }

    // 2. Frappe Layout Tab object toggle
    if (frm.layout && frm.layout.tabs) {
        let tab = frm.layout.tabs.find(t => t.df && t.df.fieldname === "custom_questions");
        if (tab) {
            tab.df.hidden = show ? 0 : 1;
            tab.toggle(show);
            tab.refresh();
            if (!show && tab.is_active()) {
                let first_tab = frm.layout.tabs.find(t => !t.is_hidden() && t !== tab);
                if (first_tab) {
                    first_tab.set_active();
                }
            }
        }
    }

    // 3. Direct DOM safety check for Frappe tab nav item and tab pane
    if (frm.$wrapper) {
        let tab_nav = frm.$wrapper.find('[data-fieldname="custom_questions"]').closest('.nav-item');
        if (tab_nav.length) {
            if (show) {
                tab_nav.removeClass('hide').show();
            } else {
                tab_nav.addClass('hide').hide();
            }
        }
        let tab_pane = frm.$wrapper.find('[id*="custom_questions"].tab-pane');
        if (tab_pane.length) {
            if (show) {
                tab_pane.removeClass('hide');
            } else {
                tab_pane.addClass('hide');
                if (tab_pane.hasClass('active')) {
                    tab_pane.removeClass('active show');
                    let first_nav = frm.$wrapper.find('.nav-link:visible:first');
                    if (first_nav.length) {
                        first_nav.trigger('click');
                    }
                }
            }
        }
    }
}