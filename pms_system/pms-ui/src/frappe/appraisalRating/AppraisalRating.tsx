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
import { AppraisalQuestionsTab } from "./component/appraisal_questions/appraisal_question_tab";

export const AppraisalRating = () => {
    const [activeTab, setActiveTab] = useState<"kra" | "competency" | "questions" | "appraisal_questions">("kra");
    const [appraisalMode, setAppraisalMode] = useState<"self" | "manager" | "second_manager">("self");
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
                        secondManagerRating: 3.4,
                        secondManagerComment: "Excellent Work"
                    },
                    {
                        id: 2,
                        description: "Maintain 95% on-time delivery",
                        progress: 2.00,
                        selfRating: 7,
                        selfComments: "Achieved 90%",
                        managerRating: 7,
                        managerComments: "Slight delay",
                        secondManagerRating: 3.4,
                        secondManagerComment: "Excellent Work"
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
                secondManagerRating: 3.4,
                secondManagerComment: "Excellent Work"
            }
        ],
        questions: [
            {
                id: 1,
                question: "What are your key achievements?",
                selfAnswer: "Led migration project",
                managerComments: "Excellent ownership",
                secondManagerComment: "Excellent Work"
            }
        ],
        AppraisalQuestions: []
    });
    function transformAppraisal(frmDoc: any) {
        if (frmDoc.workflow_state == "Self Appraisal") {
            setAppraisalMode("self")
        } else if (frmDoc.workflow_state == "Manager Appraisal") {
            setAppraisalMode("manager")
        }
        else {
            setAppraisalMode("second_manager")
        }
        const kraList = frmDoc.kra || [];
        const goalsList = frmDoc.kra_vs_goal || [];
        const tasksList = frmDoc.goal_vs_task || [];

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
                    .filter((g: any) => g.kra === k.kra)   // match KRA
                    .map((g: any, idx: number) => {
                        const tasks = tasksList
                            .filter((t: any) => t.goal === g.goal)
                            .map((t: any, tidx: number) => ({
                                id: tidx + 1,
                                task_name: t.task,
                                completed_percentage: t.completed_percentage,
                                selfComments: t.employee_description,
                                managerScore: t.manager_score,
                                managerComments: t.manager_description,
                                secondManagerScore: t.second_manager_score,
                                secondManagerComment: t.second_manager_description,
                            }));

                        return {
                            id: idx + 1,
                            description: g.goal_name,
                            progress: g.progress,
                            weightage: g.weightage,

                            selfRating: g.employee_rating_number,
                            selfComments: g.employee_description,

                            managerRating: g.manager_rating_number,
                            managerComments: g.management_description,

                            secondManagerRating: g.second_manager_rating,
                            secondManagerComment: g.second_manager_description,

                            // 🔥 Add tasks array to goal
                            tasks
                        };
                    });

                return {
                    id: index + 1,
                    title: k.kra,                     // KRA name
                    description: k.description || "", // if any
                    weightage: k.weightage,
                    selfRating: k.employee_rating_number,
                    selfComments: k.employee_description,
                    managerRating: k.manager_rating_number,
                    managerComments: k.management_description,
                    secondManagerRating: k.second_manager_rating,
                    secondManagerComment: k.second_manager_description,
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
                managerComments: c.manager_description,
                secondManagerRating: c.second_manager_rating,
                secondManagerComment: c.second_manager_description
            })) || [],

            questions: frmDoc.answer?.map((q: any, index: number) => ({
                id: index + 1,
                question: q.question,
                selfAnswer: q.employee_ans_in_discriptive,
                managerComments: q.manager_comment,
                secondManagerComment: q.second_manager_description
            })) || [],
            AppraisalQuestions: frmDoc.appraisal_feedback_question.map((q: any, index: number) => ({
                id: index + 1,
                question: q.question,
                selfAnswer: q.employee_ans,
                managerComments: q.manager_ans,
                secondManagerComment: q.second_manager_ans
            })) || [],
        };
    }
    const saveToFrappe = () => {
        if (!validateMandatory()) return;
        const frm = (window as any).cur_frm;
        if (!frm?.doc) return;

        const doc = frm.doc;

        const scores = calculateAppraisalScores(
            appraisalData,
            doc.kra_percentage,
            doc.competency_percentage,
            doc.reports_to_second_user ? true : false
        );

        doc.final_score = scores.finalScore;
        doc.employee_score = scores.employeeSelfScore;
        doc.manager_rating = scores.manager1Score;
        doc.second_manager_rating = scores.manager2Score;
        doc.kra.forEach((k: any, idx: number) => {
            const updated = appraisalData.kra.find(x => x.id === idx + 1);
            if (!updated) return;

            if (employeeCanEdit) {
                k.employee_rating_number = updated.selfRating;
                k.employee_description = updated.selfComments;
            }

            if (managerCanEdit) {
                k.manager_rating_number = updated.managerRating;
                k.management_description = updated.managerComments;
            }

            if (secondManagerCanEdit) {
                k.second_manager_rating = updated.secondManagerRating;
                k.second_manager_description = updated.secondManagerComment;
            }
            k.weightage = updated.weightage;
        });

        doc.kra_vs_goal.forEach((g: any) => {
            const parent = appraisalData.kra.find(k => k.title === g.kra);
            if (!parent) return;

            const updatedGoal = parent.goals.find(goal => goal.description === g.goal_name);
            if (!updatedGoal) return;

            if (employeeCanEdit) {
                g.employee_rating_number = updatedGoal.selfRating;
                g.employee_description = updatedGoal.selfComments;
            }

            if (managerCanEdit) {
                g.manager_rating_number = updatedGoal.managerRating;
                g.management_description = updatedGoal.managerComments;
            }

            if (secondManagerCanEdit) {
                g.second_manager_rating = updatedGoal.secondManagerRating;
                g.second_manager_description = updatedGoal.secondManagerComment;
            }

            g.progress = updatedGoal.progress;
            g.weightage = updatedGoal.weightage;
        });

        doc.competency.forEach((c: any, idx: number) => {
            const updated = appraisalData.competencies.find(x => x.id === idx + 1);
            if (!updated) return;

            if (employeeCanEdit) {
                c.employee_rating_number = updated.selfRating;
                c.employee_description = updated.selfComments;
            }

            if (managerCanEdit) {
                c.manager_rating = updated.managerRating;
                c.manager_description = updated.managerComments;
            }

            if (secondManagerCanEdit) {
                c.second_manager_rating = updated.secondManagerRating;
                c.second_manager_description = updated.secondManagerComment;
            }

            c.weightage = updated.weightage;
        });

        doc.answer.forEach((q: any, idx: number) => {
            const updated = appraisalData.questions.find(x => x.id === idx + 1);
            if (!updated) return;

            if (employeeCanEdit) {
                q.employee_ans_in_discriptive = updated.selfAnswer;
            }

            if (managerCanEdit) {
                q.manager_comment = updated.managerComments;
            }

            if (secondManagerCanEdit) {
                q.second_manager_description = updated.secondManagerComment;
            }
        });
        doc.appraisal_feedback_question.forEach((q: any, idx: number) => {
            const updated = appraisalData.AppraisalQuestions.find(x => x.id === idx + 1);
            if (!updated) return;

            if (employeeCanEdit) {
                q.employee_ans = updated.selfAnswer;
            }

            if (managerCanEdit) {
                q.manager_ans = updated.managerComments;
            }

            if (secondManagerCanEdit) {
                q.second_manager_ans = updated.secondManagerComment;
            }
        });

        doc.__unsaved = 1;
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
    const updateAppraisalQuestion = (
        qId: number,
        field: keyof Question,
        value: any
    ) => {
        setAppraisalData((prev) => ({
            ...prev,
            AppraisalQuestions: prev.AppraisalQuestions.map((q) =>
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
    const reportsToSecondUserId = frm.doc.reports_to_second_user;
    const workflowStatus = frm.doc.workflow_state;

    // --- Identify user type ---
    const isEmployee = currentUser === employeeUserId;
    const isManager = currentUser === reportsToUserId;
    const isSecondManager = currentUser === reportsToSecondUserId;

    const roles = frappe.user_roles || [];
    const isHR = roles.includes("HR Manager");
    const isAdmin = currentUser === "Administrator";
    const isAuditUser = isHR || isAdmin;
    const employeeCanEdit =
        isEmployee &&
        workflowStatus === "Self Appraisal";
    const managerCanEdit = isManager && workflowStatus === "Manager Appraisal";  // HR/Admin cannot edit
    const secondManagerCanEdit = isSecondManager && workflowStatus === "Second Manager Review";
    const showManagerData = isManager || isSecondManager || isAuditUser;
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

            if (doc.competency_comment_mandatory) {
                appraisalData.competencies.forEach(c => {
                    if (!c.selfComments) {
                        errors.push(`Self Comment missing in Competency: ${c.name}`);
                    }
                });
            }

            if (doc.question_answer_mandatory) {
                appraisalData.questions.forEach(q => {
                    if (!q.selfAnswer) {
                        errors.push(`Answer missing for Question: ${q.question}`);
                    }
                });
            }
        }
        if (managerCanEdit) {
            if (doc.manager_kra_rating_mandatory) {
                appraisalData.kra.forEach(k => {
                    if (!k.goals.length && !k.managerRating) {
                        errors.push(`Manager Rating missing in KRA: ${k.title}`);
                    }
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
    const canShowSaveButton = employeeCanEdit || managerCanEdit || secondManagerCanEdit;
    return (
        <div className="ef-min-h-screen ef-bg-gray-50 ef-p-6">
            <div className="ef-max-w-7xl ef-mx-auto">
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
                            <button
                                onClick={() => setActiveTab("appraisal_questions")}
                                className={`ef-px-6 ef-py-4 ef-font-semibold ${activeTab === "appraisal_questions"
                                    ? "ef-border-b-2 ef-border-blue-600 ef-text-blue-600"
                                    : "ef-text-gray-600"
                                    }`}
                            >
                                Appraisal Questions
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
                                secondManagerCanEdit={secondManagerCanEdit}
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
                                secondManagerCanEdit={secondManagerCanEdit}
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
                                secondManagerCanEdit={secondManagerCanEdit}
                                employeeCanEdit={employeeCanEdit}
                                managerCanEdit={managerCanEdit}
                                showManagerData={showManagerData}
                            />
                        )}
                        {activeTab === "appraisal_questions" && (
                            <AppraisalQuestionsTab
                                questions={appraisalData.AppraisalQuestions}
                                appraisalMode={appraisalMode}
                                selfAppraisalSubmitted={appraisalData.selfAppraisalSubmitted}
                                updateQuestion={updateAppraisalQuestion}
                                secondManagerCanEdit={secondManagerCanEdit}
                                employeeCanEdit={employeeCanEdit}
                                managerCanEdit={managerCanEdit}
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
