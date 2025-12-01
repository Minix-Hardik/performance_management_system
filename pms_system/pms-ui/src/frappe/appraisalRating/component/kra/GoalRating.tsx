import type { KRA, Goal } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";
import { Lock } from "lucide-react";

export const GoalRating = ({
    kra,
    goal,
    appraisalMode,
    updateGoalRating,
    employeeCanEdit,
    managerCanEdit,
    showManagerData
}: {
    kra: KRA;
    goal: Goal;
    appraisalMode: "self" | "manager";
    updateGoalRating: (
        kraId: number,
        goalId: number,
        field: keyof Goal,
        value: any
    ) => void;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
}) => {

    const LockTag = () => (
        <div className="ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm">
            <Lock size={12} />
            Locked
        </div>
    );

    /* ========================================================= */
    /*                     SELF APPRAISAL MODE                    */
    /* ========================================================= */
    if (appraisalMode === "self") {
        return (
            <div className="ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md ef-hover:shadow-lg ef-transition">

                {!employeeCanEdit && <LockTag />}

                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                    <div className="ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full"></div>
                    <h4 className="ef-font-bold ef-text-gray-800 ef-text-base">
                        Self Appraisal
                    </h4>
                </div>

                {/* Rating */}
                <div className="ef-mb-3">
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-ba ef-tracking-wide ef-mb-2">
                        Rating
                    </label>

                    <RatingInput
                        rating={goal.selfRating}
                        onChange={(rating) =>
                            employeeCanEdit &&
                            updateGoalRating(kra.id, goal.id, "selfRating", rating)
                        }
                        disabled={!employeeCanEdit}
                    />
                </div>

                {/* Comments */}
                <div>
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2">
                        Comments
                    </label>

                    <textarea
                        value={goal.selfComments}
                        onChange={(e) =>
                            employeeCanEdit &&
                            updateGoalRating(
                                kra.id,
                                goal.id,
                                "selfComments",
                                e.target.value
                            )
                        }
                        disabled={!employeeCanEdit}
                        className={`
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${employeeCanEdit
                                ? "ef-bg-gray-50 ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400"
                                : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `}
                        rows={3}
                        placeholder="Share your thoughts..."
                    />
                </div>
            </div>
        );
    }

    /* ========================================================= */
    /*                         MANAGER MODE                      */
    /* ========================================================= */
    return (
        <div
            className={`ef-mt-4 ${showManagerData ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""
                }`}
        >

            {/* ============= Employee Self Rating Block ============= */}
            <div className="ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md">

                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                    <div className="ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full"></div>
                    <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                        Employee Self Rating
                    </h4>
                </div>

                {/* Rating */}
                <div className="ef-mb-3">
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2">
                        Rating
                    </label>

                    <div className="ef-inline-flex ef-items-center ef-gap-2 ef-px-3 ef-py-1.5 ef-bg-blue-50 ef-rounded-lg ef-border ef-border-blue-200">
                        <span className="ef-text-2xl ef-font-black ef-text-blue-600">{goal.selfRating}</span>
                        <span className="ef-text-sm ef-font-medium ef-text-gray-500">/10</span>
                    </div>
                </div>

                {/* Comments */}
                <div>
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2">
                        Comments
                    </label>

                    <div className="ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[60px]">
                        {goal.selfComments || (
                            <span className="ef-text-gray-400 ef-italic">No comments</span>
                        )}
                    </div>
                </div>
            </div>

            {/* ============= Manager Review Block ============= */}
            {showManagerData && (
                <div className="ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-purple-200 ef-shadow-md">

                    {!managerCanEdit && <LockTag />}

                    <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                        <div className="ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full"></div>
                        <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                            Manager Review
                        </h4>
                    </div>

                    {/* Rating */}
                    <div className="ef-mb-3">
                        <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2">
                            Rating
                        </label>

                        <RatingInput
                            rating={goal.managerRating}
                            onChange={(rating) =>
                                managerCanEdit &&
                                updateGoalRating(kra.id, goal.id, "managerRating", rating)
                            }
                            disabled={!managerCanEdit}
                        />
                    </div>

                    {/* Comments */}
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-2">
                        Comments
                    </label>

                    <textarea
                        value={goal.managerComments}
                        onChange={(e) =>
                            managerCanEdit &&
                            updateGoalRating(
                                kra.id,
                                goal.id,
                                "managerComments",
                                e.target.value
                            )
                        }
                        disabled={!managerCanEdit}
                        className={`
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${managerCanEdit
                                ? "ef-bg-gray-50 ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400"
                                : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `}
                        rows={3}
                        placeholder="Add your review..."
                    />
                </div>
            )}

        </div>
    );
};
