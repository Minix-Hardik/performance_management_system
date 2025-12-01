import type { Competency } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";
import { Lock } from "lucide-react";

interface CompetencyCardProps {
    comp: Competency;
    appraisalMode: "self" | "manager";
    selfAppraisalSubmitted: boolean;
    updateCompetency: (compId: number, field: keyof Competency, value: any) => void;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
}

export const CompetencyCard = ({
    comp,
    appraisalMode,
    updateCompetency,
    employeeCanEdit,
    managerCanEdit,
    showManagerData
}: CompetencyCardProps) => {

    /** Small lock badge */
    const LockTag = () => (
        <div className="ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm">
            <Lock size={12} />
            Locked
        </div>
    );

    return (
        <div className="ef-relative ef-bg-white ef-rounded-2xl ef-border ef-border-gray-200 ef-p-5 ef-shadow-md ef-hover:shadow-lg ef-transition">

            {/* Title */}
            <div className="ef-flex ef-items-center ef-gap-3">
                <h3 className="ef-text-base ef-font-bold ef-text-gray-900">{comp.name}</h3>

                <span className="ef-px-3 ef-py-1 ef-bg-purple-600 ef-text-white ef-text-xs ef-rounded-full">
                    {comp.weightage}% Weightage
                </span>
            </div>

            {/* ================================================== */}
            {/*               SELF APPRAISAL MODE                  */}
            {/* ================================================== */}
            {appraisalMode === "self" && (
                <div className="ef-relative ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200 ef-mt-4">

                    {!employeeCanEdit && <LockTag />}

                    <div className="ef-flex ef-items-center ef-gap-2 ef-mb-2">
                        <div className="ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full"></div>
                        <h4 className="ef-font-semibold ef-text-gray-800 ef-text-sm">
                            Self Appraisal
                        </h4>
                    </div>

                    {/* Rating */}
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1">
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

                    {/* Comments */}
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-4 ef-mb-1">
                        Comments
                    </label>

                    <textarea
                        value={comp.selfComments}
                        onChange={(e) =>
                            employeeCanEdit &&
                            updateCompetency(comp.id, "selfComments", e.target.value)
                        }
                        disabled={!employeeCanEdit}
                        className={`
                            ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                            ${employeeCanEdit
                                ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400"
                                : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                        `}
                        rows={3}
                        placeholder="Share your thoughts..."
                    />
                </div>
            )}

            {/* ================================================== */}
            {/*                  MANAGER MODE                      */}
            {/* ================================================== */}
            {appraisalMode === "manager" && (
                <div
                    className={`ef-mt-4 ${showManagerData ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""
                        }`}
                >
                    {/* === Employee Self Block === */}
                    <div className="ef-bg-blue-50 ef-p-4 ef-rounded-xl ef-border ef-border-blue-200">
                        <div className="ef-flex ef-items-center ef-gap-2 ef-mb-2">
                            <div className="ef-w-1 ef-h-5 ef-bg-blue-500 ef-rounded-full"></div>
                            <h4 className="ef-font-semibold ef-text-gray-800 ef-text-sm">
                                Employee Self Rating
                            </h4>
                        </div>

                        {/* Rating */}
                        <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1">
                            Rating
                        </label>
                        <div className="ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-3 ef-py-2 ef-rounded-lg">
                            <span className="ef-text-2xl ef-font-bold ef-text-blue-700">
                                {comp.selfRating}
                            </span>
                            <span className="ef-text-gray-600">/10</span>
                        </div>

                        {/* Comments */}
                        <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-3 ef-mb-1">
                            Comments
                        </label>
                        <div className="ef-bg-white ef-border ef-border-blue-100 ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px]">
                            {comp.selfComments || (
                                <span className="ef-text-gray-400 ef-italic">No comments</span>
                            )}
                        </div>
                    </div>

                    {/* === Manager Review Block === */}
                    {showManagerData && (
                        <div className="ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-xl ef-border ef-border-purple-200">

                            {!managerCanEdit && <LockTag />}

                            <div className="ef-flex ef-items-center ef-gap-2 ef-mb-2">
                                <div className="ef-w-1 ef-h-5 ef-bg-purple-500 ef-rounded-full"></div>
                                <h4 className="ef-font-semibold ef-text-gray-800 ef-text-sm">
                                    Manager Review
                                </h4>
                            </div>

                            {/* Rating */}
                            <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1">
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

                            {/* Comments */}
                            <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-3 ef-mb-1">
                                Comments
                            </label>

                            <textarea
                                value={comp.managerComments}
                                onChange={(e) =>
                                    managerCanEdit &&
                                    updateCompetency(comp.id, "managerComments", e.target.value)
                                }
                                disabled={!managerCanEdit}
                                className={`
                                    ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none
                                    ${managerCanEdit
                                        ? "ef-bg-white ef-border ef-border-purple-300 ef-focus:ring-2 ef-focus:ring-purple-400"
                                        : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                                `}
                                rows={3}
                                placeholder="Add your review..."
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
