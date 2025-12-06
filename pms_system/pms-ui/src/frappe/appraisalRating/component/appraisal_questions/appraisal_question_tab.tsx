import type { Question } from "../../types/appraisalTypes";
import { Appraisal_question } from "./appraisal_question";

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
    secondManagerCanEdit: boolean
}

export const AppraisalQuestionsTab = ({
    questions,
    appraisalMode,
    selfAppraisalSubmitted,
    updateQuestion,
    employeeCanEdit,
    managerCanEdit,
    secondManagerCanEdit
}: QuestionsTabProps) => {
    return (
        <div className="ef-space-y-6">
            {questions.map((q, index) => (
                <Appraisal_question
                    key={q.id}
                    question={q}
                    index={index}
                    appraisalMode={appraisalMode}
                    selfAppraisalSubmitted={selfAppraisalSubmitted}
                    updateQuestion={updateQuestion}
                    employeeCanEdit={employeeCanEdit}
                    managerCanEdit={managerCanEdit}
                    secondManagerCanEdit={secondManagerCanEdit}
                />
            ))}
        </div>
    );
};
