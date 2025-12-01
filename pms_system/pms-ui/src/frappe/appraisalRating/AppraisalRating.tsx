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

// import { calculateSelfScore, calculateFinalScore } from "./utils/scoring";

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
            },
            {
                id: 2,
                title: "Code Quality",
                description: "Maintain high code quality standards",
                weightage: 25,
                goals: [
                    {
                        id: 3,
                        description: "Reduce bug count by 20%",
                        progress: 2.00,
                        selfRating: 9,
                        selfComments: "Reduced bugs by 25%",
                        managerRating: 9,
                        managerComments: "Outstanding",
                    },
                ],
            },
            {
                id: 3,
                title: "Team Collaboration",
                description: "Work effectively with team members",
                weightage: 20,
                selfRating: 8,
                selfComments: "Collaborated well",
                managerRating: 8,
                managerComments: "Great team player",
                goals: [],
            },
            {
                id: 4,
                title: "Innovation",
                description: "Contribute innovative ideas",
                weightage: 15,
                goals: [
                    {
                        id: 4,
                        description: "Propose 2 process improvements",
                        progress: 2.00,
                        selfRating: 8,
                        selfComments: "Proposed automation",
                        managerRating: 8,
                        managerComments: "Good job",
                    },
                ],
            },
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
            },
            {
                id: 2,
                name: "Communication",
                description: "Effective communication",
                weightage: 15,            // <-- NEW
                selfRating: 7,
                selfComments: "Improving",
                managerRating: 8,
                managerComments: "Much better",
            },
        ],
        questions: [
            {
                id: 1,
                question: "What are your key achievements?",
                selfAnswer: "Led migration project",
                managerComments: "Excellent ownership",
            },
            {
                id: 2,
                question: "What areas do you want to develop?",
                selfAnswer: "Public speaking",
                managerComments: "Good focus",
            },
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
                                selfAppraisalSubmitted={appraisalData.selfAppraisalSubmitted}
                                updateGoalRating={updateGoalRating}
                                updateKRARating={updateKRARating}
                            />
                        )}

                        {activeTab === "competency" && (
                            <CompetencyTab
                                competencies={appraisalData.competencies}
                                appraisalMode={appraisalMode}
                                selfAppraisalSubmitted={appraisalData.selfAppraisalSubmitted}
                                updateCompetency={updateCompetency}
                            />
                        )}

                        {activeTab === "questions" && (
                            <QuestionsTab
                                questions={appraisalData.questions}
                                appraisalMode={appraisalMode}
                                selfAppraisalSubmitted={appraisalData.selfAppraisalSubmitted}
                                updateQuestion={updateQuestion}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

AppraisalRating.component = "appraisal-rating";
