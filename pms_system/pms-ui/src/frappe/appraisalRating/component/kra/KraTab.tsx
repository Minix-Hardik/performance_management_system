import type { KRA, Goal } from "../../types/appraisalTypes";
import { KRACard } from "./KraCard";

interface KRATabProps {
    kraList: KRA[];
    expandedKRA: Record<number, boolean>;
    toggleKRA: (id: number) => void;
    appraisalMode: "self" | "manager";

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
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;

}

export const KRATab = ({
    kraList,
    expandedKRA,
    toggleKRA,
    appraisalMode,
    updateGoalRating,
    updateKRARating,
    employeeCanEdit,
    managerCanEdit,
    showManagerData
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
                    updateGoalRating={updateGoalRating}
                    updateKRARating={updateKRARating}
                    employeeCanEdit={employeeCanEdit}
                    managerCanEdit={managerCanEdit}
                    showManagerData={showManagerData}
                />
            ))}
        </div>
    );
};
