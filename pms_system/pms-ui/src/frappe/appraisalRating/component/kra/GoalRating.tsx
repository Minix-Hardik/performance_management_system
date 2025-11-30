import type { KRA, Goal } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";

export const GoalRating = ({
    kra,
    goal,
    appraisalMode,
    updateGoalRating,
    selfAppraisalSubmitted,
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
    selfAppraisalSubmitted: boolean;
}) => {
    if (appraisalMode === "self") {
        return (
            <div className="ef-bg-white ef-p-4 ef-rounded-2xl ef-border-2 ef-border-blue-200 ef-shadow-lg ef-shadow-blue-100/50 ef-hover:shadow-xl ef-hover:shadow-blue-200/60 ef-transition-all ef-duration-300">
                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                    <div className="ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full"></div>
                    <h4 className="ef-font-bold ef-text-gray-800 ef-text-base">
                        Self Appraisal
                    </h4>
                </div>

                {/* Rating */}
                <div className="ef-mb-3">
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                        Rating
                    </label>
                    <RatingInput
                        rating={goal.selfRating}
                        onChange={(rating) =>
                            updateGoalRating(kra.id, goal.id, "selfRating", rating)
                        }
                        disabled={false}
                    />
                </div>

                {/* Comments */}
                <div>
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                        Comments
                    </label>
                    <textarea
                        value={goal.selfComments}
                        onChange={(e) =>
                            updateGoalRating(
                                kra.id,
                                goal.id,
                                "selfComments",
                                e.target.value
                            )
                        }
                        className="ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-blue-400 ef-transition-all"
                        rows={2}
                        placeholder="Share your thoughts..."
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="ef-grid ef-grid-cols-2 ef-gap-4">
            {/* Self */}
            <div className="ef-bg-white ef-p-4 ef-rounded-2xl ef-border-2 ef-border-blue-200 ef-shadow-lg ef-shadow-blue-100/50 ef-hover:shadow-xl ef-hover:shadow-blue-200/60 ef-transition-all ef-duration-300">
                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                    <div className="ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full"></div>
                    <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                        Employee Self Rating
                    </h4>
                </div>

                <div className="ef-mb-3">
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                        Rating
                    </label>
                    <div className="ef-inline-flex ef-items-center ef-gap-2 ef-px-3 ef-py-1.5 ef-bg-blue-50 ef-rounded-lg ef-border ef-border-blue-200">
                        <span className="ef-text-2xl ef-font-black ef-text-blue-600">{goal.selfRating}</span>
                        <span className="ef-text-sm ef-font-medium ef-text-gray-500">/10</span>
                    </div>
                </div>

                <div>
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                        Comments
                    </label>
                    <div className="ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[60px] ef-leading-relaxed">
                        {goal.selfComments || <span className="ef-text-gray-400 ef-italic">No comments</span>}
                    </div>
                </div>
            </div>

            {/* Manager */}
            <div className="ef-bg-white ef-p-4 ef-rounded-2xl ef-border-2 ef-border-purple-200 ef-shadow-lg ef-shadow-purple-100/50 ef-hover:shadow-xl ef-hover:shadow-purple-200/60 ef-transition-all ef-duration-300">
                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                    <div className="ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full"></div>
                    <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                        Manager Review
                    </h4>
                </div>

                <div className="ef-mb-3">
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                        Rating
                    </label>
                    <RatingInput
                        rating={goal.managerRating}
                        onChange={(rating) =>
                            updateGoalRating(kra.id, goal.id, "managerRating", rating)
                        }
                        disabled={!selfAppraisalSubmitted}
                    />
                </div>

                <div>
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                        Comments
                    </label>
                    <textarea
                        value={goal.managerComments}
                        onChange={(e) =>
                            updateGoalRating(
                                kra.id,
                                goal.id,
                                "managerComments",
                                e.target.value
                            )
                        }
                        disabled={!selfAppraisalSubmitted}
                        className="ef-w-full ef-p-3 ef-bg-gray-50 ef-border-0 ef-rounded-xl ef-resize-none ef-text-sm ef-text-gray-700 ef-focus:outline-none ef-focus:ring-2 ef-focus:ring-purple-400 ef-transition-all ef-disabled:bg-gray-100 ef-disabled:text-gray-400"
                        rows={2}
                        placeholder="Add your review..."
                    />
                </div>
            </div>
        </div>
    );
};