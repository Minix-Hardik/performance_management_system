import type { Question } from "../../types/appraisalTypes";
import { QuestionCard } from "./Questions";

interface QuestionsTabProps {
    questions: Question[];
    appraisalMode: "self" | "manager";
    selfAppraisalSubmitted: boolean;
    updateQuestion: (
        qId: number,
        field: keyof Question,
        value: any
    ) => void;
}

export const QuestionsTab = ({
    questions,
    appraisalMode,
    selfAppraisalSubmitted,
    updateQuestion,
}: QuestionsTabProps) => {
    return (
        <div className="ef-space-y-6">
            {questions.map((q, index) => (
                <QuestionCard
                    key={q.id}
                    question={q}
                    index={index}
                    appraisalMode={appraisalMode}
                    selfAppraisalSubmitted={selfAppraisalSubmitted}
                    updateQuestion={updateQuestion}
                />
            ))}
        </div>
    );
};
