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
}

export const CompetencyTab = ({
    competencies,
    appraisalMode,
    selfAppraisalSubmitted,
    updateCompetency,
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
                />
            ))}
        </div>
    );
};
