import type { KRA, Goal } from "../../types/appraisalTypes";
import { KRACard } from "./KraCard";

interface KRATabProps {
    kraList: KRA[];
    expandedKRA: Record<number, boolean>;
    toggleKRA: (id: number) => void;
    appraisalMode: "self" | "manager";
    selfAppraisalSubmitted: boolean;

    updateGoalRating: (
        kraId: number,
        goalId: number,
        field: keyof Goal,
        value: any
    ) => void;

    updateKRARating: (
        kraId: number,
        field: keyof KRA,
        value: any
    ) => void;
}

export const KRATab = ({
    kraList,
    expandedKRA,
    toggleKRA,
    appraisalMode,
    selfAppraisalSubmitted,
    updateGoalRating,
    updateKRARating,
}: KRATabProps) => {
    return (
        <div className="ef-space-y-4">
            {kraList.map((kra) => (
                <KRACard
                    key={kra.id}
                    kra={kra}
                    expanded={expandedKRA[kra.id]}
                    onToggle={() => toggleKRA(kra.id)}
                    appraisalMode={appraisalMode}
                    selfAppraisalSubmitted={selfAppraisalSubmitted}
                    updateGoalRating={updateGoalRating}
                    updateKRARating={updateKRARating}
                />
            ))}
        </div>
    );
};
