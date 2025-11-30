import type { Competency } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";

interface CompetencyCardProps {
    comp: Competency;
    appraisalMode: "self" | "manager";
    selfAppraisalSubmitted: boolean;
    updateCompetency: (
        compId: number,
        field: keyof Competency,
        value: any
    ) => void;
}

export const CompetencyCard = ({
    comp,
    appraisalMode,
    selfAppraisalSubmitted,
    updateCompetency,
}: CompetencyCardProps) => {
    return (
        <div className="ef-bg-white ef-rounded-2xl ef-border-2 ef-border-gray-200 ef-p-5 ef-shadow-lg ef-shadow-gray-100/50 ef-hover:shadow-xl ef-hover:shadow-gray-200/60 ef-transition-all ef-duration-300 ef-space-y-4">
            {/* Title + Description */}
            <div className="ef-flex ef-items-center ef-gap-3 ef-flex-wrap">
                <h3 className="ef-text-base ef-font-bold ef-text-gray-900">
                    {comp.name}
                </h3>
                <span className="ef-inline-flex ef-items-center ef-px-3 ef-py-1 ef-bg-gradient-to-r ef-from-purple-500 ef-to-pink-500 ef-text-white ef-text-xs ef-font-semibold ef-rounded-full ef-shadow-sm">
                    {comp.weightage}% weightage
                </span>
            </div>

            {/* SELF MODE */}
            {appraisalMode === "self" ? (
                <div className="ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50">
                    <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                        <div className="ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full"></div>
                        <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                            Self Appraisal
                        </h4>
                    </div>

                    {/* Rating */}
                    <div className="ef-mb-3">
                        <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                            Rating
                        </label>
                        <RatingInput
                            rating={comp.selfRating}
                            onChange={(rating) =>
                                updateCompetency(comp.id, "selfRating", rating)
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
                            value={comp.selfComments}
                            onChange={(e) =>
                                updateCompetency(
                                    comp.id,
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
            ) : (
                /* MANAGER MODE */
                <div className="ef-grid ef-grid-cols-2 ef-gap-4">
                    {/* Self Details */}
                    <div className="ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-blue-200 ef-shadow-md ef-shadow-blue-100/50">
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
                                <span className="ef-text-2xl ef-font-black ef-text-blue-600">{comp.selfRating}</span>
                                <span className="ef-text-sm ef-font-medium ef-text-gray-500">/10</span>
                            </div>
                        </div>

                        <div>
                            <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                                Comments
                            </label>
                            <div className="ef-p-3 ef-bg-gray-50 ef-rounded-xl ef-text-sm ef-text-gray-700 ef-min-h-[80px] ef-leading-relaxed">
                                {comp.selfComments || <span className="ef-text-gray-400 ef-italic">No comments</span>}
                            </div>
                        </div>
                    </div>

                    {/* Manager Review */}
                    <div className="ef-bg-white ef-p-4 ef-rounded-xl ef-border-2 ef-border-purple-200 ef-shadow-md ef-shadow-purple-100/50">
                        <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                            <div className="ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full"></div>
                            <h4 className="ef-font-bold ef-text-gray-800 ef-text-sm">
                                Manager Review
                            </h4>
                        </div>

                        {/* Rating */}
                        <div className="ef-mb-3">
                            <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                                Rating
                            </label>
                            <RatingInput
                                rating={comp.managerRating}
                                onChange={(rating) =>
                                    updateCompetency(
                                        comp.id,
                                        "managerRating",
                                        rating
                                    )
                                }
                                disabled={!selfAppraisalSubmitted}
                            />
                        </div>

                        {/* Comments */}
                        <div>
                            <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-uppercase ef-tracking-wide ef-mb-2">
                                Comments
                            </label>
                            <textarea
                                value={comp.managerComments}
                                onChange={(e) =>
                                    updateCompetency(
                                        comp.id,
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
            )}
        </div>
    );
};