import type { Question } from "../../types/appraisalTypes";
import { QuestionCard } from "./Questions";

interface QuestionsTabProps {
    questions: Question[];
    appraisalMode: "self" | "manager" | "second_manager";
    selfAppraisalSubmitted: boolean;
    updateQuestion: (
        qId: number,
        field: keyof Question,
        value: any
    ) => void;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
    secondManagerCanEdit: boolean
}

export const QuestionsTab = ({
    questions,
    appraisalMode,
    selfAppraisalSubmitted,
    updateQuestion,
    employeeCanEdit,
    managerCanEdit,
    showManagerData,
    secondManagerCanEdit
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
                    employeeCanEdit={employeeCanEdit}
                    managerCanEdit={managerCanEdit}
                    showManagerData={showManagerData}
                    secondManagerCanEdit={secondManagerCanEdit}
                />
            ))}
        </div>
    );
};
