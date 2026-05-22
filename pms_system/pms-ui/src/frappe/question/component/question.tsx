import { Lock } from "lucide-react"; // ICON (optional)

interface QuestionCardProps {
    question: Question;
    appraisalMode: "self" | "manager" | "second_manager";
    selfAppraisalSubmitted: boolean;
    updateQuestion: (qId: string | number, field: keyof Question, value: any) => void;
    index: number;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
    secondManagerCanEdit: boolean
}

export interface Question {
    id: string | number;
    question: string;
    selfAnswer?: string;
    managerComments?: string;
    secondManagerComment?: string;
}

export const QuestionCard = ({
    question,
    appraisalMode,
    updateQuestion,
    index,
    employeeCanEdit,
    managerCanEdit,
    showManagerData,
    secondManagerCanEdit
}: QuestionCardProps) => {

    const LockIcon = () => (
        <div className="ef-flex ef-items-center ef-gap-1 ef-text-gray-400 ef-text-xs">
            <Lock size={10} />
        </div>
    );

    return (
        <div className="ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm">
            {/* Question Header */}
            <div className="ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center gap-2">
                <span className="ef-flex-shrink-0 ef-w-6 ef-h-6 ef-bg-gray-800 ef-rounded ef-text-white ef-text-xs ef-font-semibold ef-flex ef-items-center ef-justify-center">
                    {index + 1}
                </span>
                <p className="ef-mx-2 ef-text-sm ef-font-medium ef-text-gray-900">{question.question}</p>
            </div>

            {/* Table-like Content */}
            <div className="ef-divide-y ef-divide-gray-100">
                {/* Self Answer Row */}
                {appraisalMode === "self" && (
                    <div className="ef-px-3 ef-py-2">
                        <div className="ef-flex ef-items-center ef-gap-2 ef-mb-1">
                            <span className="ef-text-xs ef-font-semibold ef-text-gray-600">Your Answer</span>
                            {!employeeCanEdit && <LockIcon />}
                        </div>
                        <textarea
                            value={question.selfAnswer}
                            onChange={(e) =>
                                employeeCanEdit &&
                                updateQuestion(question.id, "selfAnswer", e.target.value)
                            }
                            disabled={!employeeCanEdit}
                            className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${employeeCanEdit
                                ? "ef-bg-white ef-border-blue-200 ef-focus:ring-1 ef-focus:ring-blue-400 ef-focus:outline-none"
                                : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                }`}
                            rows={3}
                            placeholder="Enter your answer..."
                        />
                    </div>
                )}

                {/* Manager View */}
                {appraisalMode === "manager" && (
                    <>
                        {/* Employee Answer Row */}
                        <div className="ef-px-3 ef-py-2 ef-bg-blue-50">
                            <span className="ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1">
                                Employee's Answer
                            </span>
                            <div className="ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100">
                                {question.selfAnswer || (
                                    <span className="ef-text-gray-400 ef-italic">No answer provided</span>
                                )}
                            </div>
                        </div>

                        {/* Manager Comments Row */}
                        {showManagerData && (
                            <div className="ef-px-3 ef-py-2 ef-bg-purple-50">
                                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-1">
                                    <span className="ef-text-xs ef-font-semibold ef-text-gray-600">
                                        Manager's Comments
                                    </span>
                                    {!managerCanEdit && <LockIcon />}
                                </div>
                                <textarea
                                    value={question.managerComments}
                                    onChange={(e) =>
                                        managerCanEdit &&
                                        updateQuestion(question.id, "managerComments", e.target.value)
                                    }
                                    disabled={!managerCanEdit}
                                    className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${managerCanEdit
                                        ? "ef-bg-white ef-border-purple-200 ef-focus:ring-1 focus:ring-purple-400 ef-focus:outline-none"
                                        : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                        }`}
                                    rows={3}
                                    placeholder="Enter your feedback..."
                                />
                            </div>
                        )}
                    </>
                )}

                {/* Second Manager View */}
                {appraisalMode === "second_manager" && (
                    <>
                        {/* Employee Answer Row */}
                        <div className="ef-px-3 ef-py-2 ef-bg-blue-50">
                            <span className="ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1">
                                Employee's Answer
                            </span>
                            <div className="ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-blue-100">
                                {question.selfAnswer || (
                                    <span className="ef-text-gray-400 ef-italic">No answer provided</span>
                                )}
                            </div>
                        </div>

                        {/* Manager Comments Row */}
                        {showManagerData && (
                            <div className="ef-px-3 ef-py-2 ef-bg-purple-50">
                                <span className="ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-1">
                                    Manager's Comments
                                </span>
                                <div className="ef-bg-white ef-p-2 ef-rounded ef-text-xs ef-min-h-[60px] ef-border ef-border-purple-100">
                                    {question.managerComments || (
                                        <span className="ef-text-gray-400 ef-italic">No comments provided</span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Second Manager Comments Row */}
                        {showManagerData && (
                            <div className="ef-px-3 ef-py-2 ef-bg-green-50">
                                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-1">
                                    <span className="ef-text-xs ef-font-semibold ef-text-gray-600">
                                        Second Manager's Comments
                                    </span>
                                    {!secondManagerCanEdit && <LockIcon />}
                                </div>
                                <textarea
                                    value={question.secondManagerComment}
                                    onChange={(e) =>
                                        secondManagerCanEdit &&
                                        updateQuestion(question.id, "secondManagerComment", e.target.value)
                                    }
                                    disabled={!secondManagerCanEdit}
                                    className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${secondManagerCanEdit
                                        ? "ef-bg-white ef-border-green-200 ef-focus:ring-1 ef-focus:ring-green-400 ef-focus:outline-none"
                                        : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                        }`}
                                    rows={3}
                                    placeholder="Enter your feedback..."
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

