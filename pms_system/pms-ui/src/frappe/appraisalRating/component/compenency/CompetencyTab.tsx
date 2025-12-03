import type { Competency } from "../../types/appraisalTypes";
import { CompetencyCard } from "./CompetencyCard";

interface CompetencyTabProps {
    competencies: Competency[];
    appraisalMode: "self" | "manager" | "second_manager";
    selfAppraisalSubmitted: boolean;
    updateCompetency: (
        compId: number,
        field: keyof Competency,
        value: any
    ) => void;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
    secondManagerCanEdit: boolean
}

export const CompetencyTab = ({
    competencies,
    appraisalMode,
    selfAppraisalSubmitted,
    updateCompetency,
    employeeCanEdit,
    managerCanEdit,
    showManagerData,
    secondManagerCanEdit
}: CompetencyTabProps) => {
    return (
        <div className="ef-space-y-6">
            {competencies.map((comp) => (
                <CompetencyCard
                    key={comp.id}
                    comp={comp}
                    appraisalMode={appraisalMode}
                    selfAppraisalSubmitted={selfAppraisalSubmitted}
                    updateCompetency={updateCompetency}
                    employeeCanEdit={employeeCanEdit}
                    managerCanEdit={managerCanEdit}
                    showManagerData={showManagerData}
                    secondManagerCanEdit={secondManagerCanEdit}
                />
            ))}
        </div>
    );
};
