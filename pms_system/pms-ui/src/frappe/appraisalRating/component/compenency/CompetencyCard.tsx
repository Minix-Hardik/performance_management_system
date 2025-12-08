import type { Competency } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";
import { Lock } from "lucide-react";

interface CompetencyCardProps {
    comp: Competency;
    appraisalMode: "self" | "manager" | "second_manager";
    selfAppraisalSubmitted: boolean;
    updateCompetency: (compId: number, field: keyof Competency, value: any) => void;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
    secondManagerCanEdit: boolean;
}

export const CompetencyCard = ({
    comp,
    appraisalMode,
    updateCompetency,
    employeeCanEdit,
    managerCanEdit,
    showManagerData,
    secondManagerCanEdit
}: CompetencyCardProps) => {

    /** Small lock badge */
    const LockIcon = () => (
        <div className="ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm">
            <Lock size={12} />
            Locked
        </div>
    );

    return (
        <div className="ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm">
            {/* Header */}
            <div className="ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200 ef-flex ef-items-center ef-justify-between">
                <h3 className="ef-text-sm ef-font-semibold ef-text-gray-900">{comp.name}</h3>
                <span className="ef-px-2 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full ef-font-medium">
                    {comp.weightage}%
                </span>
            </div>

            {/* Content */}
            <div className="ef-divide-y ef-divide-gray-100">
                {/* Self Appraisal Mode */}
                {appraisalMode === "self" && (
                    <div className="ef-px-3 ef-py-2 ef-bg-blue-50">
                        <div className="ef-flex ef-items-center ef-justify-between ef-mb-2">
                            <span className="ef-text-xs ef-font-semibold ef-text-gray-600">Self Appraisal</span>
                            {!employeeCanEdit && <LockIcon />}
                        </div>

                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                            Rating
                        </label>
                        <RatingInput
                            rating={comp.selfRating}
                            onChange={(rating) =>
                                employeeCanEdit &&
                                updateCompetency(comp.id, "selfRating", rating)
                            }
                            disabled={!employeeCanEdit}
                        />

                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1">
                            Comments
                        </label>
                        <textarea
                            value={comp.selfComments}
                            onChange={(e) =>
                                employeeCanEdit &&
                                updateCompetency(comp.id, "selfComments", e.target.value)
                            }
                            disabled={!employeeCanEdit}
                            className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${employeeCanEdit
                                ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400 focus:ef-outline-none"
                                : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                }`}
                            rows={2}
                            placeholder="Share your thoughts..."
                        />
                    </div>
                )}

                {/* Manager Mode */}
                {appraisalMode === "manager" && (
                    <>
                        {/* Employee Self Rating */}
                        <div className="ef-px-3 ef-py-2 ef-bg-blue-50">
                            <span className="ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2">
                                Employee Self Rating
                            </span>

                            <div className="ef-flex ef-items-center ef-gap-4 ef-mb-2">
                                <div>
                                    <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                        Rating
                                    </label>
                                    <div className="ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded">
                                        <span className="ef-text-lg ef-font-bold ef-text-blue-700">
                                            {comp.selfRating}
                                        </span>
                                        <span className="ef-text-xs ef-text-gray-600">/10</span>
                                    </div>
                                </div>
                                <div className="ef-flex-1">
                                    <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                        Comments
                                    </label>
                                    <div className="ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]">
                                        {comp.selfComments || (
                                            <span className="ef-text-gray-400 ef-italic">No comments</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Manager Review */}
                        {showManagerData && (
                            <div className="ef-px-3 ef-py-2 ef-bg-purple-50">
                                <div className="ef-flex ef-items-center ef-justify-between ef-mb-2">
                                    <span className="ef-text-xs ef-font-semibold ef-text-gray-600">Manager Review</span>
                                    {!managerCanEdit && <LockIcon />}
                                </div>

                                <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                    Rating
                                </label>
                                <RatingInput
                                    rating={comp.managerRating}
                                    onChange={(rating) =>
                                        managerCanEdit &&
                                        updateCompetency(comp.id, "managerRating", rating)
                                    }
                                    disabled={!managerCanEdit}
                                />

                                <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1">
                                    Comments
                                </label>
                                <textarea
                                    value={comp.managerComments}
                                    onChange={(e) =>
                                        managerCanEdit &&
                                        updateCompetency(comp.id, "managerComments", e.target.value)
                                    }
                                    disabled={!managerCanEdit}
                                    className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${managerCanEdit
                                        ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400 focus:ef-outline-none"
                                        : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                        }`}
                                    rows={2}
                                    placeholder="Add your review..."
                                />
                            </div>
                        )}
                    </>
                )}

                {/* Second Manager Mode */}
                {appraisalMode === "second_manager" && (
                    <>
                        {/* Employee Self Rating */}
                        <div className="ef-px-3 ef-py-2 ef-bg-blue-50">
                            <span className="ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2">
                                Employee Self Rating
                            </span>

                            <div className="ef-flex ef-items-center ef-gap-4">
                                <div>
                                    <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                        Rating
                                    </label>
                                    <div className="ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-2 ef-py-1 ef-rounded">
                                        <span className="ef-text-lg ef-font-bold ef-text-blue-700">
                                            {comp.selfRating}
                                        </span>
                                        <span className="ef-text-xs ef-text-gray-600">/10</span>
                                    </div>
                                </div>
                                <div className="ef-flex-1">
                                    <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                        Comments
                                    </label>
                                    <div className="ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]">
                                        {comp.selfComments || (
                                            <span className="ef-text-gray-400 ef-italic">No comments</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Manager Review */}
                        {showManagerData && (
                            <div className="ef-px-3 ef-py-2 ef-bg-purple-50">
                                <span className="ef-text-xs ef-font-semibold ef-text-gray-600 ef-block ef-mb-2">
                                    Manager Review
                                </span>

                                <div className="ef-flex ef-items-center ef-gap-4">
                                    <div>
                                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                            Rating
                                        </label>
                                        <div className="ef-flex ef-items-center ef-gap-2 ef-bg-purple-100 ef-border ef-border-purple-200 ef-px-2 ef-py-1 ef-rounded">
                                            <span className="ef-text-lg ef-font-bold ef-text-purple-700">
                                                {comp.managerRating}
                                            </span>
                                            <span className="ef-text-xs ef-text-gray-600">/10</span>
                                        </div>
                                    </div>
                                    <div className="ef-flex-1">
                                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                            Comments
                                        </label>
                                        <div className="ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]">
                                            {comp.managerComments || (
                                                <span className="ef-text-gray-400 ef-italic">No comments</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Second Manager Review */}
                        {showManagerData && (
                            <div className="ef-px-3 ef-py-2 ef-bg-green-50">
                                <div className="ef-flex ef-items-center ef-justify-between ef-mb-2">
                                    <span className="ef-text-xs ef-font-semibold ef-text-gray-600">Second Manager Review</span>
                                    {!secondManagerCanEdit && <LockIcon />}
                                </div>

                                <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                    Rating
                                </label>
                                <RatingInput
                                    rating={comp.secondManagerRating}
                                    onChange={(rating) =>
                                        secondManagerCanEdit &&
                                        updateCompetency(comp.id, "secondManagerRating", rating)
                                    }
                                    disabled={!secondManagerCanEdit}
                                />

                                <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1">
                                    Comments
                                </label>
                                <textarea
                                    value={comp.secondManagerComment}
                                    onChange={(e) =>
                                        secondManagerCanEdit &&
                                        updateCompetency(comp.id, "secondManagerComment", e.target.value)
                                    }
                                    disabled={!secondManagerCanEdit}
                                    className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${secondManagerCanEdit
                                        ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400 focus:ef-outline-none"
                                        : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                        }`}
                                    rows={2}
                                    placeholder="Add your review..."
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
