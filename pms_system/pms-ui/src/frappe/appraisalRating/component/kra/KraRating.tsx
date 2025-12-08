import type { KRA } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";
import { Lock } from "lucide-react";

export const KRARating = ({
    kra,
    appraisalMode,
    updateKRARating,
    employeeCanEdit,
    managerCanEdit,
    showManagerData,
    secondManagerCanEdit,
}: {
    kra: KRA;
    appraisalMode: "self" | "manager" | "second_manager";
    updateKRARating: (kraId: number, field: keyof KRA, value: any) => void;
    employeeCanEdit: boolean;
    managerCanEdit: boolean;
    showManagerData: boolean;
    secondManagerCanEdit: boolean;
}) => {
    const LockIcon = () => (
        <div className="ef-absolute ef-top-2 ef-right-2 ef-flex ef-items-center ef-gap-1 ef-bg-gray-200 ef-text-gray-600 ef-text-xs ef-px-2 ef-py-1 ef-rounded-lg ef-shadow-sm">
            <Lock size={12} />
            Locked
        </div>
    );

    /* ================================================
       SELF MODE
    ================================================= */
    if (appraisalMode === "self") {
        return (
            <div className="ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm">
                <div className="ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200">
                    <h3 className="ef-text-sm ef-font-semibold ef-text-gray-900">{kra.title}</h3>
                </div>

                <div className="ef-px-3 ef-py-2 ef-bg-blue-50">
                    <div className="ef-flex ef-items-center ef-justify-between ef-mb-2">
                        <span className="ef-text-xs ef-font-semibold ef-text-gray-600">Self Appraisal</span>
                        {!employeeCanEdit && <LockIcon />}
                    </div>

                    <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">Rating</label>
                    <RatingInput
                        rating={kra.selfRating}
                        onChange={(rating) =>
                            employeeCanEdit && updateKRARating(kra.id, "selfRating", rating)
                        }
                        disabled={!employeeCanEdit}
                    />

                    <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1">
                        Comments
                    </label>
                    <textarea
                        value={kra.selfComments}
                        onChange={(e) =>
                            employeeCanEdit &&
                            updateKRARating(kra.id, "selfComments", e.target.value)
                        }
                        disabled={!employeeCanEdit}
                        className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${employeeCanEdit
                            ? "ef-bg-white ef-border-blue-200 focus:ef-ring-1 focus:ef-ring-blue-400"
                            : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                            }`}
                        rows={2}
                        placeholder="Add your comments..."
                    />
                </div>
            </div>
        );
    }

    /* ================================================
       MANAGER MODE
    ================================================= */
    if (appraisalMode === "manager") {
        return (
            <div className="ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm">

                {/* Header */}
                <div className="ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200">
                    <h3 className="ef-text-sm ef-font-semibold ef-text-gray-900">{kra.title}</h3>
                </div>

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
                                <span className="ef-text-lg ef-font-bold ef-text-blue-700">{kra.selfRating}</span>
                                <span className="ef-text-xs ef-text-gray-600">/10</span>
                            </div>
                        </div>

                        <div className="ef-flex-1">
                            <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                Comments
                            </label>
                            <div className="ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]">
                                {kra.selfComments || (
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

                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">Rating</label>
                        <RatingInput
                            rating={kra.managerRating}
                            onChange={(rating) =>
                                managerCanEdit &&
                                updateKRARating(kra.id, "managerRating", rating)
                            }
                            disabled={!managerCanEdit}
                        />

                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1">
                            Comments
                        </label>
                        <textarea
                            value={kra.managerComments}
                            onChange={(e) =>
                                managerCanEdit &&
                                updateKRARating(kra.id, "managerComments", e.target.value)
                            }
                            disabled={!managerCanEdit}
                            className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${managerCanEdit
                                ? "ef-bg-white ef-border-purple-200 focus:ef-ring-1 focus:ef-ring-purple-400"
                                : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                }`}
                            rows={2}
                            placeholder="Add your review..."
                        />
                    </div>
                )}
            </div>
        );
    }

    /* ================================================
       SECOND MANAGER MODE
    ================================================= */
    if (appraisalMode === "second_manager") {
        return (
            <div className="ef-bg-white ef-rounded-lg ef-border ef-border-gray-200 ef-overflow-hidden ef-shadow-sm">

                {/* Header */}
                <div className="ef-bg-gray-50 ef-px-3 ef-py-2 ef-border-b ef-border-gray-200">
                    <h3 className="ef-text-sm ef-font-semibold ef-text-gray-900">{kra.title}</h3>
                </div>

                {/* Self Rating */}
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
                                <span className="ef-text-lg ef-font-bold ef-text-blue-700">{kra.selfRating}</span>
                                <span className="ef-text-xs ef-text-gray-600">/10</span>
                            </div>
                        </div>

                        <div className="ef-flex-1">
                            <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                Comments
                            </label>
                            <div className="ef-bg-white ef-border ef-border-blue-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]">
                                {kra.selfComments || (
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
                                        {kra.managerRating}
                                    </span>
                                    <span className="ef-text-xs ef-text-gray-600">/10</span>
                                </div>
                            </div>

                            <div className="ef-flex-1">
                                <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                                    Comments
                                </label>
                                <div className="ef-bg-white ef-border ef-border-purple-100 ef-p-2 ef-rounded ef-text-xs ef-min-h-[50px]">
                                    {kra.managerComments || (
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
                            <span className="ef-text-xs ef-font-semibold ef-text-gray-600">
                                Second Manager Review
                            </span>
                            {!secondManagerCanEdit && <LockIcon />}
                        </div>

                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mb-1">
                            Rating
                        </label>
                        <RatingInput
                            rating={kra.secondManagerRating}
                            onChange={(rating) =>
                                secondManagerCanEdit &&
                                updateKRARating(kra.id, "secondManagerRating", rating)
                            }
                            disabled={!secondManagerCanEdit}
                        />

                        <label className="ef-block ef-text-xs ef-font-medium ef-text-gray-500 ef-mt-2 ef-mb-1">
                            Comments
                        </label>
                        <textarea
                            value={kra.secondManagerComment}
                            onChange={(e) =>
                                secondManagerCanEdit &&
                                updateKRARating(kra.id, "secondManagerComment", e.target.value)
                            }
                            disabled={!secondManagerCanEdit}
                            className={`ef-w-full ef-p-2 ef-rounded ef-text-xs ef-resize-none ef-border ${secondManagerCanEdit
                                ? "ef-bg-white ef-border-green-200 focus:ef-ring-1 focus:ef-ring-green-400"
                                : "ef-bg-gray-50 ef-text-gray-500 ef-border-gray-200 ef-cursor-not-allowed"
                                }`}
                            rows={2}
                            placeholder="Add your review..."
                        />
                    </div>
                )}
            </div>
        );
    }

    return null;
};
