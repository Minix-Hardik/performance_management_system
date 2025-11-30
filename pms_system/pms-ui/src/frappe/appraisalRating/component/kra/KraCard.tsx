import { ChevronDown, ChevronUp } from "lucide-react";
import type { KRA, Goal } from "../../types/appraisalTypes";
import { GoalRating } from "./GoalRating";
import { KRARating } from "./KraRating";

interface KRACardProps {
    kra: KRA;
    expanded: boolean;
    onToggle: () => void;
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

export const KRACard = ({
    kra,
    expanded,
    onToggle,
    appraisalMode,
    selfAppraisalSubmitted,
    updateGoalRating,
    updateKRARating,
}: KRACardProps) => {
    return (
        <div className="ef-border ef-rounded-lg">
            {/* Header */}
            <div
                onClick={onToggle}
                className="ef-flex ef-justify-between ef-items-center ef-p-4 ef-bg-gray-50 ef-cursor-pointer ef-hover:bg-gray-100"
            >
                <div className="ef-flex-1">
                    <div className="ef-flex ef-items-center ef-gap-3">
                        <h3 className="ef-text-lg ef-font-semibold ef-text-gray-900">
                            {kra.title}
                        </h3>

                        <span className="ef-px-3 ef-py-1 ef-bg-blue-100 ef-text-blue-700 ef-text-sm ef-rounded-full">
                            {kra.weightage}% weightage
                        </span>
                    </div>

                    <p className="ef-text-gray-600 ef-text-sm ef-mt-1">
                        {kra.description}
                    </p>
                </div>

                {expanded ? <ChevronUp /> : <ChevronDown />}
            </div>

            {/* Expanded Content */}
            {expanded && (
                <div className="ef-p-4">
                    {kra.goals.length > 0 ? (
                        kra.goals.map((goal) => (
                            <div
                                key={goal.id}
                                className="ef-mb-6 ef-last:mb-0 ef-pb-6 ef-last:pb-0 ef-border-b ef-last:border-b-0"
                            >
                                <div className="ef-mb-3">
                                    <p className="ef-font-medium ef-text-gray-900">
                                        {goal.description}
                                    </p>
                                    <p className="ef-text-sm ef-text-gray-600">
                                        Target: {goal.target}
                                    </p>
                                </div>

                                <GoalRating
                                    kra={kra}
                                    goal={goal}
                                    appraisalMode={appraisalMode}
                                    updateGoalRating={updateGoalRating}
                                    selfAppraisalSubmitted={selfAppraisalSubmitted}
                                />
                            </div>
                        ))
                    ) : (
                        <KRARating
                            kra={kra}
                            appraisalMode={appraisalMode}
                            updateKRARating={updateKRARating}
                            selfAppraisalSubmitted={selfAppraisalSubmitted}
                        />
                    )}
                </div>
            )}
        </div>
    );
};
