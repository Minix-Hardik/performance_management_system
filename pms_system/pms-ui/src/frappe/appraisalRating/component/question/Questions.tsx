import type { Question } from "../../types/appraisalTypes";

interface QuestionCardProps {
    question: Question;
    appraisalMode: "self" | "manager";
    selfAppraisalSubmitted: boolean;
    updateQuestion: (
        qId: number,
        field: keyof Question,
        value: any
    ) => void;
    index: number;
}

export const QuestionCard = ({
    question,
    appraisalMode,
    selfAppraisalSubmitted,
    updateQuestion,
    index,
}: QuestionCardProps) => {
    return (
        <div className="ef-bg-white ef-rounded-2xl ef-border-2 ef-border-gray-200 ef-p-5 ef-shadow-lg ef-shadow-gray-100/50 ef-hover:shadow-xl ef-hover:shadow-gray-200/60 ef-transition-all ef-duration-300 ef-space-y-4">
            {/* Question Title */}
            <div className="ef-flex ef-items-start ef-gap-3">
                <div className="ef-flex-shrink-0 ef-w-8 ef-h-8 ef-bg-gradient-to-br ef-from-gray-700 ef-to-gray-900 ef-rounded-lg ef-flex ef-items-center ef-justify-center ef-text-white ef-font-bold ef-text-sm ef-shadow-md">
                    {index + 1}
                </div>
                <h3 className="ef-text-base ef-font-bold ef-text-gray-900 ef-leading-tight ef-pt-1">
                    {question.question}
                </h3>
            </div>

            {/* SELF MODE */}
            {appraisalMode === "self" ? (
                <div className="ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50">
                    <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                        <div className="ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full"></div>
                        <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                            Your Answer
                        </h4>
                    </div>

                    <textarea
                        value={question.selfAnswer}
                        onChange={(e) =>
                            updateQuestion(
                                question.id,
                                "selfAnswer",
                                e.target.value
                            )
                        }
                        className="ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-blue-400 ef-transition-all"
                        rows={4}
                        placeholder="Enter your answer..."
                    />
                </div>
            ) : (
                <div className="ef-space-y-3">
                    {/* Employee's Answer */}
                    <div className="ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50">
                        <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                            <div className="ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full"></div>
                            <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                                Employee's Answer
                            </h4>
                        </div>

                        <div className="ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[80px] ef-leading-relaxed">
                            {question.selfAnswer || <span className="ef-text-gray-400 ef-italic">No answer provided</span>}
                        </div>
                    </div>

                    {/* Manager's Comments */}
                    <div className="ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-purple-200 ef-shadow-md ef-shadow-purple-100/50">
                        <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                            <div className="ef-w-1 ef-h-5 ef-bg-purple-500 ef-rounded-full"></div>
                            <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                                Manager's Comments
                            </h4>
                        </div>

                        <textarea
                            value={question.managerComments}
                            onChange={(e) =>
                                updateQuestion(
                                    question.id,
                                    "managerComments",
                                    e.target.value
                                )
                            }
                            disabled={!selfAppraisalSubmitted}
                            className="ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-purple-400 ef-transition-all ef-disabled:bg-gray-100 ef-disabled:text-gray-400"
                            rows={4}
                            placeholder="Enter your feedback..."
                        />
                    </div>
                </div>
            )}
        </div>
    );
};