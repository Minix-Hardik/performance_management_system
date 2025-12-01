import type { Competency } from "../../types/appraisalTypes";
import { CompetencyCard } from "./CompetencyCard";

interface CompetencyTabProps {
    competencies: Competency[];
    appraisalMode: "self" | "manager";
    selfAppraisalSubmitted: boolean;
    updateCompetency: (
        compId: number,
        field: keyof Competency,
        value: any
    ) => void;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
}

export const CompetencyTab = ({
    competencies,
    appraisalMode,
    selfAppraisalSubmitted,
    updateCompetency,
    employeeCanEdit,
    managerCanEdit,
    showManagerData
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
                />
            ))}
        </div>
    );
};
