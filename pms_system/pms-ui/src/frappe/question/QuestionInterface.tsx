import { useEffect, useState } from "react";
import { QuestionsTab } from "./component/questiontab";

// Declare global variables from Frappe context
declare global {
    interface Window {
        cur_frm: any;
        frappe: any;
    }
}

export interface Question {
    id: string | number;
    question: string;
    selfAnswer?: string;
    managerComments?: string;
    secondManagerComment?: string;
}

export const QuestionInterface = ({ docname }: { docname?: string }) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const frm = window.cur_frm;
        if (!frm) {
            setLoading(false);
            return;
        }

        // Always fetch from Question Master to ensure we have any newly added questions, filtering out disabled ones
        fetch("/api/resource/Question Master?fields=[\"name\",\"question\"]&filters=[[\"disable\",\"=\",0]]&limit_page_length=100", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                const existingAnswers = frm.doc.custom_question_child_table || [];
                let hasNewAdditions = false;

                if (data && data.data) {
                    const mappedQuestions = data.data.map((q: any) => {
                        // Check if this question already exists in the child table
                        // The title field in the child table links to the Question Master name
                        const existingRow = existingAnswers.find((row: any) => row.title === q.name);

                        if (existingRow) {
                            // Use existing row
                            return {
                                id: existingRow.name,
                                question: q.question || existingRow.question || q.name,
                                selfAnswer: existingRow.employee_ans_in_discriptive || "",
                                managerComments: existingRow.manager_comment || "",
                                secondManagerComment: existingRow.second_manager_description || ""
                            };
                        } else {
                            // Question not in child table yet! Add new row
                            const row = window.frappe.model.add_child(frm.doc, "Question Child Table", "custom_question_child_table");
                            row.title = q.name;
                            row.question = q.question || q.name;
                            row.employee_ans_in_discriptive = "";
                            row.manager_comment = "";
                            row.second_manager_description = "";
                            hasNewAdditions = true;

                            return {
                                id: row.name, // Use the newly generated row name
                                question: row.question,
                                selfAnswer: "",
                                managerComments: "",
                                secondManagerComment: ""
                            };
                        }
                    });
                    
                    if (hasNewAdditions) {
                        // Notify frappe that the child table has been modified with new rows
                        frm.refresh_field("custom_question_child_table");
                    }
                    
                    setQuestions(mappedQuestions);
                } else {
                    // Fallback if Question Master is empty but we have existing rows
                    if (existingAnswers.length > 0) {
                        const mappedQuestions = existingAnswers.map((row: any) => ({
                            id: row.name,
                            question: row.question,
                            selfAnswer: row.employee_ans_in_discriptive || "",
                            managerComments: row.manager_comment || "",
                            secondManagerComment: row.second_manager_description || ""
                        }));
                        setQuestions(mappedQuestions);
                    }
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch questions:", err);
                
                // Fallback to existing rows if fetch fails
                const existingAnswers = frm.doc.custom_question_child_table || [];
                if (existingAnswers.length > 0) {
                    const mappedQuestions = existingAnswers.map((row: any) => ({
                        id: row.name,
                        question: row.question,
                        selfAnswer: row.employee_ans_in_discriptive || "",
                        managerComments: row.manager_comment || "",
                        secondManagerComment: row.second_manager_description || ""
                    }));
                    setQuestions(mappedQuestions);
                }
                setLoading(false);
            });
    }, [docname]);

    const updateQuestion = (qId: string | number, field: keyof Question, value: any) => {
        // Update React State
        setQuestions((prev) =>
            prev.map((q) => (q.id === qId ? { ...q, [field]: value } : q))
        );

        // Update Frappe Child Table Row
        const frm = window.cur_frm;
        if (frm && frm.doc.custom_question_child_table) {
            const row = frm.doc.custom_question_child_table.find((r: any) => r.name === qId);
            if (row) {
                let fieldname = "";
                if (field === "selfAnswer") {
                    row.employee_ans_in_discriptive = value;
                    fieldname = "employee_ans_in_discriptive";
                }
                if (field === "managerComments") {
                    row.manager_comment = value;
                    fieldname = "manager_comment";
                }
                if (field === "secondManagerComment") {
                    row.second_manager_description = value;
                    fieldname = "second_manager_description";
                }
                
                // Notify frappe that the field has changed to mark the form as dirty
                // Since fields are 'Allow on Submit', this works for docstatus 1 as well
                frm.refresh_field("custom_question_child_table");
                frm.dirty();
            }
        }
    };

    if (loading) return <div className="ef-p-4">Loading questions...</div>;

    if (questions.length === 0) return <div className="ef-p-4">No questions found.</div>;

    return (
        <QuestionsTab
            questions={questions}
            appraisalMode="self" // TODO: Update appraisal mode dynamically if needed
            selfAppraisalSubmitted={false}
            updateQuestion={updateQuestion as any}
            secondManagerCanEdit={true}
            employeeCanEdit={true}
            managerCanEdit={true}
            showManagerData={true}
        />
    );
};

QuestionInterface.component = "question-interface";
