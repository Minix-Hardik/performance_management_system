import type { Question } from "../../types/appraisalTypes";
import { Lock } from "lucide-react"; // ICON (optional)

interface QuestionCardProps {
    question: Question;
    appraisalMode: "self" | "manager";
    selfAppraisalSubmitted: boolean;
    updateQuestion: (qId: number, field: keyof Question, value: any) => void;
    index: number;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
}

export const QuestionCard = ({
    question,
    appraisalMode,
    updateQuestion,
    index,
    employeeCanEdit,
    managerCanEdit,
    showManagerData
}: QuestionCardProps) => {

    const LockTag = () => (
        <div className="ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-py-1 ef-px-2 ef-rounded-lg ef-shadow-sm">
            <Lock size={12} />
            Locked
        </div>
    );

    return (
        <div className="ef-relative ef-bg-white ef-rounded-2xl ef-border ef-border-gray-200 ef-p-5 ef-shadow-md ef-space-y-4 ef-transition-all ef-duration-300 hover:ef-shadow-lg">

            {/* Question Number + Text */}
            <div className="ef-flex ef-items-start ef-gap-3">
                <div className="ef-flex-shrink-0 ef-w-8 ef-h-8 ef-bg-gray-800 ef-rounded-lg ef-flex ef-items-center ef-justify-center ef-text-white ef-font-bold">
                    {index + 1}
                </div>
                <h3 className="ef-text-base ef-font-semibold ef-text-gray-900">
                    {question.question}
                </h3>
            </div>
            {appraisalMode === "self" && (
                <div className="ef-relative ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200">
                    {!employeeCanEdit && <LockTag />}

                    <h4 className="ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2">
                        Your Answer
                    </h4>

                    <textarea
                        value={question.selfAnswer}
                        onChange={(e) =>
                            employeeCanEdit &&
                            updateQuestion(question.id, "selfAnswer", e.target.value)
                        }
                        disabled={!employeeCanEdit}
                        className={`
                            ef-w-full ef-p-3 ef-rounded-xl ef-resize-none ef-text-sm ef-transition
                            ${employeeCanEdit
                                ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400"
                                : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `}
                        rows={4}
                        placeholder="Enter your answer..."
                    />
                </div>
            )}
            {appraisalMode === "manager" && (
                <div className="ef-space-y-4">

                    {/* Employee Answer (always visible to manager) */}
                    <div className="ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200">
                        <h4 className="ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2">
                            Employee's Answer
                        </h4>

                        <div className="ef-bg-white ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px] ef-border ef-border-blue-100">
                            {question.selfAnswer || (
                                <span className="ef-text-gray-400 ef-italic">
                                    No answer provided
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Manager Comments */}
                    {showManagerData && (
                        <div className="ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-xl ef-border ef-border-purple-200">
                            {!managerCanEdit && <LockTag />}

                            <h4 className="ef-font-semibold ef-text-gray-700 ef-text-sm ef-mb-2">
                                Manager's Comments
                            </h4>

                            <textarea
                                value={question.managerComments}
                                onChange={(e) =>
                                    managerCanEdit &&
                                    updateQuestion(
                                        question.id,
                                        "managerComments",
                                        e.target.value
                                    )
                                }
                                disabled={!managerCanEdit}
                                className={`
                                    ef-w-full ef-p-3 ef-rounded-xl ef-resize-none ef-text-sm ef-transition
                                    ${managerCanEdit
                                        ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400"
                                        : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                                `}
                                rows={4}
                                placeholder="Enter your feedback..."
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
