import { ChevronDown, ChevronUp } from "lucide-react";
import type { KRA, Goal } from "../../types/appraisalTypes";
import { GoalRating } from "./GoalRating";
import { KRARating } from "./KraRating";

interface KRACardProps {
    kra: KRA;
    expanded: boolean;
    onToggle: () => void;
    appraisalMode: "self" | "manager" | "second_manager";
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
    secondManagerCanEdit: boolean
}

export const KRACard = ({
    kra,
    expanded,
    onToggle,
    appraisalMode,
    updateGoalRating,
    updateKRARating,
    employeeCanEdit,
    managerCanEdit,
    showManagerData,
    secondManagerCanEdit
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
                                        <span className="ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm ef-mx-3">
                                            {goal.weightage}% weightage
                                        </span>
                                    </p>

                                    {/* PROGRESS BAR */}
                                    <div className="ef-w-full ef-bg-gray-200 ef-rounded-full ef-h-3 ef-overflow-hidden ef-mt-2">
                                        <div
                                            className="ef-h-full ef-bg-gradient-to-r ef-from-green-400 ef-to-green-600 ef-transition-all ef-duration-500"
                                            style={{ width: `${Math.min(goal.progress, 100)}%` }}
                                        ></div>
                                    </div>

                                    <p className="ef-text-sm ef-text-gray-600 ef-mt-1">
                                        Progress: {Math.min(goal.progress, 100)}%
                                    </p>
                                </div>


                                <GoalRating
                                    kra={kra}
                                    goal={goal}
                                    appraisalMode={appraisalMode}
                                    updateGoalRating={updateGoalRating}
                                    secondManagerCanEdit={secondManagerCanEdit}
                                    employeeCanEdit={employeeCanEdit}
                                    managerCanEdit={managerCanEdit}
                                    showManagerData={showManagerData}
                                />
                            </div>
                        ))
                    ) : (
                        <KRARating
                            kra={kra}
                            appraisalMode={appraisalMode}
                            updateKRARating={updateKRARating}
                            employeeCanEdit={employeeCanEdit}
                            secondManagerCanEdit={secondManagerCanEdit}
                            managerCanEdit={managerCanEdit}
                            showManagerData={showManagerData}
                        />
                    )}
                </div>
            )}
        </div>
    );
};
