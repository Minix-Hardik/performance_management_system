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

        // Check if there are existing answers in the child table
        const existingAnswers = frm.doc.custom_question_child_table || [];

        if (existingAnswers.length > 0) {
            // Load from existing child table rows
            const mappedQuestions = existingAnswers.map((row: any) => ({
                id: row.name, // Use row name as ID for existing rows
                question: row.question,
                selfAnswer: row.employee_ans_in_discriptive || "",
                managerComments: row.manager_comment || "",
                secondManagerComment: row.second_manager_description || ""
            }));
            setQuestions(mappedQuestions);
            setLoading(false);
        } else {
            // No existing answers, fetch from Question Master
            fetch("/api/resource/Question Master?limit_page_length=100", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data && data.data) {
                        const mappedQuestions = data.data.map((q: any) => {
                            // Add row directly to frappe child table so it can be saved
                            const row = window.frappe.model.add_child(frm.doc, "Question Child Table", "custom_question_child_table");
                            row.title = q.name;
                            row.question = q.name || q.question;
                            row.employee_ans_in_discriptive = "";
                            row.manager_comment = "";
                            row.second_manager_description = "";

                            return {
                                id: row.name, // Use the newly generated row name
                                question: row.question,
                                selfAnswer: "",
                                managerComments: "",
                                secondManagerComment: ""
                            };
                        });
                        
                        // Notify frappe that the child table has been modified
                        frm.refresh_field("custom_question_child_table");
                        setQuestions(mappedQuestions);
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Failed to fetch questions:", err);
                    setLoading(false);
                });
        }
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
