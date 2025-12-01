import { useEffect, useState } from "react";

import type {
    AppraisalData,
    KRA,
    Goal,
    Competency,
    Question,
} from "./types/appraisalTypes";

import { KRATab } from "./component/kra/KraTab";
import { CompetencyTab } from "./component/compenency/CompetencyTab";
import { QuestionsTab } from "./component/question/QuestionsTab";
import { calculateAppraisalScores } from "./utils/scoring"

export const AppraisalRating = () => {
    const [activeTab, setActiveTab] = useState<"kra" | "competency" | "questions">("kra");
    const [appraisalMode, setAppraisalMode] = useState<"self" | "manager">("self");
    const [expandedKRA, setExpandedKRA] = useState<Record<number, boolean>>({});

    const [appraisalData, setAppraisalData] = useState<AppraisalData>({
        employee: {
            name: "John Doe",
            designation: "Senior Developer",
            department: "Engineering",
            period: "Jan 2025 - Dec 2025",
        },
        selfAppraisalSubmitted: true,
        kra: [
            {
                id: 1,
                title: "Project Delivery",
                description: "Deliver assigned projects on time",
                weightage: 30,
                goals: [
                    {
                        id: 1,
                        description: "Complete 3 major projects",
                        progress: 2.00,
                        selfRating: 8,
                        selfComments: "Completed 3 projects successfully",
                        managerRating: 9,
                        managerComments: "Excellent delivery",
                    },
                    {
                        id: 2,
                        description: "Maintain 95% on-time delivery",
                        progress: 2.00,
                        selfRating: 7,
                        selfComments: "Achieved 90%",
                        managerRating: 7,
                        managerComments: "Slight delay",
                    },
                ],
            }
        ],
        competencies: [
            {
                id: 1,
                name: "Technical Skills",
                description: "Proficiency in technologies",
                weightage: 25,            // <-- NEW
                selfRating: 8,
                selfComments: "Strong in React/Node",
                managerRating: 8,
                managerComments: "Very competent",
            }
        ],
        questions: [
            {
                id: 1,
                question: "What are your key achievements?",
                selfAnswer: "Led migration project",
                managerComments: "Excellent ownership",
            }
        ],
    });
    function transformAppraisal(frmDoc: any) {
        if (frmDoc.workflow_state == "Self Appraisal") {
            setAppraisalMode("self")
        } else {
            setAppraisalMode("manager")
        }
        const kraList = frmDoc.kra || [];
        const goalsList = frmDoc.kra_vs_goal || [];
        return {
            employee: {
                name: frmDoc.employee_name,
                designation: frmDoc.designation,
                department: frmDoc.department,
                period: `${frmDoc.from_date} - ${frmDoc.to_date}`,
            },

            selfAppraisalSubmitted: frmDoc.self_appraisal_submitted || true,

            kra: kraList.map((k: any, index: number) => {
                // Filter goals matching the kra name/value
                const goals = goalsList
                    .filter((g: any) => g.kra === k.kra) // 👈 match by KRA name
                    .map((g: any, idx: number) => ({
                        id: idx + 1,
                        description: g.goal_name,
                        progress: g.progress || "",
                        weightage: g.weightage,
                        selfRating: g.employee_rating_number,
                        selfComments: g.employee_description,
                        managerRating: g.manager_rating_number,
                        managerComments: g.management_description
                    }));

                return {
                    id: index + 1,
                    title: k.kra,                     // KRA name
                    description: k.description || "", // if any
                    weightage: k.weightage,
                    selfRating: k.employee_rating_number,
                    selfComments: k.employee_description,
                    managerRating: k.manager_rating_number,
                    managerComments: k.management_description,
                    goals
                };
            }) || [],

            competencies: frmDoc.competency?.map((c: any, index: number) => ({
                id: index + 1,
                name: c.competency,
                description: c.description || "",
                weightage: c.weightage,
                selfRating: c.employee_rating_number,
                selfComments: c.employee_description,
                managerRating: c.manager_rating,
                managerComments: c.manager_description
            })) || [],

            questions: frmDoc.answer?.map((q: any, index: number) => ({
                id: index + 1,
                question: q.question,
                selfAnswer: q.employee_ans_in_discriptive,
                managerComments: q.manager_comment
            })) || [],
        };
    }
    const saveToFrappe = () => {
        if (!validateMandatory()) return;
        const frm = (window as any).cur_frm;
        if (!frm) return;
        const doc = frm.doc;

        const scores = calculateAppraisalScores(
            appraisalData,
            frm.doc.kra_percentage,
            frm.doc.competency_percentage,
        );
        console.log(scores)
        doc.final_score = scores.finalScore;
        doc.employee_score = scores.employeeSelfScore;
        doc.kra.forEach((k: any, idx: number) => {
            const updated = appraisalData.kra.find(kra => kra.id === idx + 1);
            if (!updated) return;

            k.employee_rating_number = updated.selfRating;
            k.employee_description = updated.selfComments;
            k.manager_rating_number = updated.managerRating;
            k.management_description = updated.managerComments;
            k.weightage = updated.weightage;
        });

        doc.kra_vs_goal.forEach((g: any) => {
            const parentKRA = appraisalData.kra.find(k => k.title === g.kra);
            if (!parentKRA) return;

            const updatedGoal = parentKRA.goals.find(goal => goal.description === g.goal_name);
            if (!updatedGoal) return;

            g.employee_rating_number = updatedGoal.selfRating;
            g.employee_description = updatedGoal.selfComments;
            g.manager_rating_number = updatedGoal.managerRating;
            g.management_description = updatedGoal.managerComments;
            g.progress = updatedGoal.progress;
            g.weightage = updatedGoal.weightage;
        });

        doc.competency.forEach((c: any, idx: number) => {
            const updated = appraisalData.competencies.find(comp => comp.id === idx + 1);
            if (!updated) return;

            c.employee_rating_number = updated.selfRating;
            c.employee_description = updated.selfComments;
            c.manager_rating = updated.managerRating;
            c.manager_description = updated.managerComments;
            c.weightage = updated.weightage;
        });

        doc.answer.forEach((q: any, idx: number) => {
            const updated = appraisalData.questions.find(x => x.id === idx + 1);
            if (!updated) return;

            q.employee_ans_in_discriptive = updated.selfAnswer;
            q.manager_comment = updated.managerComments;
        });
        frm.doc.__unsaved = 1;
        frm.dirty();
        frm.save()
            .catch((err: any) => console.error(err));

    };

    const toggleKRA = (kraId: number) => {
        setExpandedKRA((prev) => ({
            ...prev,
            [kraId]: !prev[kraId],
        }));
    };

    const updateGoalRating = (
        kraId: number,
        goalId: number,
        field: keyof Goal,
        value: any
    ) => {
        setAppraisalData((prev) => ({
            ...prev,
            kra: prev.kra.map((k) =>
                k.id === kraId
                    ? {
                        ...k,
                        goals: k.goals.map((g) =>
                            g.id === goalId ? { ...g, [field]: value } : g
                        ),
                    }
                    : k
            ),
        }));
    };

    const updateKRARating = (
        kraId: number,
        field: keyof KRA,
        value: any
    ) => {
        setAppraisalData((prev) => ({
            ...prev,
            kra: prev.kra.map((k) =>
                k.id === kraId ? { ...k, [field]: value } : k
            ),
        }));
    };

    const updateCompetency = (
        compId: number,
        field: keyof Competency,
        value: any
    ) => {
        setAppraisalData((prev) => ({
            ...prev,
            competencies: prev.competencies.map((c) =>
                c.id === compId ? { ...c, [field]: value } : c
            ),
        }));
    };

    const updateQuestion = (
        qId: number,
        field: keyof Question,
        value: any
    ) => {
        setAppraisalData((prev) => ({
            ...prev,
            questions: prev.questions.map((q) =>
                q.id === qId ? { ...q, [field]: value } : q
            ),
        }));
    };
    const frm = (window as any).cur_frm;

    if (!frm?.doc) return "Loading...";

    useEffect(() => {
        setAppraisalData(transformAppraisal(frm.doc))
    }, [frm?.doc])

    const currentUser = frappe.session.user;
    const employeeUserId = frm.doc.employee_user_id;
    const reportsToUserId = frm.doc.reports_to_user_id;
    const workflowStatus = frm.doc.workflow_state;

    // --- Identify user type ---
    const isEmployee = currentUser === employeeUserId;
    const isManager = currentUser === reportsToUserId;

    const roles = frappe.user_roles || [];
    const isHR = roles.includes("HR Manager");
    const isAdmin = currentUser === "Administrator";

    // HR + Administrator → read-only view with full visibility
    const isAuditUser = isHR || isAdmin;

    // Employees can edit only during Self Appraisal
    const employeeCanEdit =
        isEmployee &&
        workflowStatus === "Self Appraisal" &&
        !isAuditUser;  // HR/Admin cannot edit

    // Managers can edit only during Manager Review
    const managerCanEdit =
        isManager &&
        workflowStatus === "Manager Appraisal" &&
        !isAuditUser;  // HR/Admin cannot edit

    // Who can see manager data? (employee must not)
    const showManagerData =
        isManager || isAuditUser;  // HR & Admin can see everything
    const validateMandatory = () => {
        const doc = window?.cur_frm?.doc;
        const errors: string[] = [];

        // ============================================================
        // EMPLOYEE VALIDATION
        // ============================================================
        if (employeeCanEdit) {

            if (doc.kra_rating_mandatory) {
                appraisalData.kra.forEach(k => {

                    // ❌ Skip KRA rating if goals exist
                    if (!k.goals.length && !k.selfRating) {
                        errors.push(`Self Rating missing in KRA: ${k.title}`);
                    }

                    // ✔ Goal rating always required
                    k.goals.forEach(g => {
                        if (!g.selfRating) {
                            errors.push(`Self Rating missing in Goal: ${g.description}`);
                        }
                    });
                });
            }
            if (doc.kra_comment_mandatory) {
                appraisalData.kra.forEach(k => {

                    // ❌ Skip KRA comment if goals exist
                    if (!k.goals.length && !k.selfComments) {
                        errors.push(`Self Comment missing in KRA: ${k.title}`);
                    }

                    // ✔ Goal comment always required
                    k.goals.forEach(g => {
                        if (!g.selfComments) {
                            errors.push(`Self Comment missing in Goal: ${g.description}`);
                        }
                    });
                });
            }

            // -----------------------------
            // COMPETENCY RATING (Employee)
            // -----------------------------
            if (doc.competency_rating_mandatory) {
                appraisalData.competencies.forEach(c => {
                    if (!c.selfRating) {
                        errors.push(`Self Rating missing in Competency: ${c.name}`);
                    }
                });
            }

            // -----------------------------
            // COMPETENCY COMMENT (Employee)
            // -----------------------------
            if (doc.competency_comment_mandatory) {
                appraisalData.competencies.forEach(c => {
                    if (!c.selfComments) {
                        errors.push(`Self Comment missing in Competency: ${c.name}`);
                    }
                });
            }

            // -----------------------------
            // QUESTION ANSWER (Employee)
            // -----------------------------
            if (doc.question_answer_mandatory) {
                appraisalData.questions.forEach(q => {
                    if (!q.selfAnswer) {
                        errors.push(`Answer missing for Question: ${q.question}`);
                    }
                });
            }
        }

        // ============================================================
        // MANAGER VALIDATION
        // ============================================================
        if (managerCanEdit) {

            // -----------------------------
            // MANAGER KRA RATING MANDATORY
            // -----------------------------
            if (doc.manager_kra_rating_mandatory) {
                appraisalData.kra.forEach(k => {

                    // ❌ Skip KRA rating if goals exist
                    if (!k.goals.length && !k.managerRating) {
                        errors.push(`Manager Rating missing in KRA: ${k.title}`);
                    }

                    // ✔ Goal rating always required
                    k.goals.forEach(g => {
                        if (!g.managerRating) {
                            errors.push(`Manager Rating missing in Goal: ${g.description}`);
                        }
                    });
                });
            }
            if (doc.manager_kra_comment_mandatory) {
                appraisalData.kra.forEach(k => {
                    if (!k.goals.length && !k.managerComments) {
                        errors.push(`Manager Comment missing in KRA: ${k.title}`);
                    }
                    k.goals.forEach(g => {
                        if (!g.managerComments) {
                            errors.push(`Manager Comment missing in Goal: ${g.description}`);
                        }
                    });
                });
            }
            if (doc.manager_competency_rating_mandatory) {
                appraisalData.competencies.forEach(c => {
                    if (!c.managerRating) {
                        errors.push(`Manager Rating missing in Competency: ${c.name}`);
                    }
                });
            }
            if (doc.manager_competency_comment_mandatory) {
                appraisalData.competencies.forEach(c => {
                    if (!c.managerComments) {
                        errors.push(`Manager Comment missing in Competency: ${c.name}`);
                    }
                });
            }
            if (doc.manager_question_report_mandatory) {
                appraisalData.questions.forEach(q => {
                    if (!q.managerComments) {
                        errors.push(`Manager Comment missing for Question: ${q.question}`);
                    }
                });
            }
        }
        if (errors.length > 0) {
            frappe.msgprint({
                title: "Mandatory Fields Missing",
                indicator: "red",
                message: `<ul>${errors.map(e => `<li>${e}</li>`).join("")}</ul>`
            });
            return false;
        }

        return true;
    };
    const canShowSaveButton = employeeCanEdit || managerCanEdit;
    return (
        <div className="ef-min-h-screen ef-bg-gray-50 ef-p-6">
            <div className="ef-max-w-7xl ef-mx-auto">
                {/* TABS */}
                <div className="ef-bg-white ef-rounded-lg ef-shadow-sm">
                    <div className="ef-border-b">
                        <div className="ef-flex">
                            <button
                                onClick={() => setActiveTab("kra")}
                                className={`ef-px-6 ef-py-4 ef-font-semibold ${activeTab === "kra"
                                    ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600"
                                    : "ef-text-gray-600"
                                    }`}
                            >
                                KRA vs Goals
                            </button>

                            <button
                                onClick={() => setActiveTab("competency")}
                                className={`ef-px-6 ef-py-4 ef-font-semibold ${activeTab === "competency"
                                    ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600"
                                    : "ef-text-gray-600"
                                    }`}
                            >
                                Competencies
                            </button>

                            <button
                                onClick={() => setActiveTab("questions")}
                                className={`ef-px-6 ef-py-4 ef-font-semibold ${activeTab === "questions"
                                    ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600"
                                    : "ef-text-gray-600"
                                    }`}
                            >
                                Questions
                            </button>
                        </div>
                    </div>

                    {/* TAB CONTENT */}
                    <div className="ef-p-6">
                        {activeTab === "kra" && (
                            <KRATab
                                kraList={appraisalData.kra}
                                expandedKRA={expandedKRA}
                                toggleKRA={toggleKRA}
                                appraisalMode={appraisalMode}
                                updateGoalRating={updateGoalRating}
                                updateKRARating={updateKRARating}

                                employeeCanEdit={employeeCanEdit}
                                managerCanEdit={managerCanEdit}
                                showManagerData={showManagerData}
                            />
                        )}

                        {activeTab === "competency" && (
                            <CompetencyTab
                                competencies={appraisalData.competencies}
                                appraisalMode={appraisalMode}
                                selfAppraisalSubmitted={appraisalData.selfAppraisalSubmitted}
                                updateCompetency={updateCompetency}

                                employeeCanEdit={employeeCanEdit}
                                managerCanEdit={managerCanEdit}
                                showManagerData={showManagerData}
                            />
                        )}

                        {activeTab === "questions" && (
                            <QuestionsTab
                                questions={appraisalData.questions}
                                appraisalMode={appraisalMode}
                                selfAppraisalSubmitted={appraisalData.selfAppraisalSubmitted}
                                updateQuestion={updateQuestion}

                                employeeCanEdit={employeeCanEdit}
                                managerCanEdit={managerCanEdit}
                                showManagerData={showManagerData}
                            />
                        )}
                    </div>
                    {canShowSaveButton && (
                        <div className="ef-flex ef-justify-end ef-px-6 ef-pb-6">
                            <button
                                onClick={saveToFrappe}
                                className="ef-bg-blue-600 ef-text-white ef-px-6 ef-py-2 ef-rounded-lg ef-font-semibold hover:ef-bg-blue-700 ef-transition"
                            >
                                Save Appraisal
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

AppraisalRating.component = "appraisal-rating";
