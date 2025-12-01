import type { KRA } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";
import { Lock } from "lucide-react";

export const KRARating = ({
    kra,
    appraisalMode,
    updateKRARating,
    employeeCanEdit,
    managerCanEdit,
    showManagerData
}: {
    kra: KRA;
    appraisalMode: "self" | "manager";
    updateKRARating: (kraId: number, field: keyof KRA, value: any) => void;
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

    /* ================================================
       SELF MODE
    ================================================= */
    if (appraisalMode === "self") {
        return (
            <div className="ef-relative ef-bg-white ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md ef-hover:shadow-lg ef-transition">

                {!employeeCanEdit && <LockTag />}

                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                    <div className="ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full"></div>
                    <h4 className="ef-font-bold ef-text-blue-900">
                        Self Appraisal – {kra.title}
                    </h4>
                </div>

                {/* Rating */}
                <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mb-1">
                    Rating
                </label>

                <RatingInput
                    rating={kra.selfRating}
                    onChange={(rating) =>
                        employeeCanEdit &&
                        updateKRARating(kra.id, "selfRating", rating)
                    }
                    disabled={!employeeCanEdit}
                />

                {/* Comments */}
                <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-500 ef-mt-4 ef-mb-1">
                    Comments
                </label>

                <textarea
                    value={kra.selfComments}
                    onChange={(e) =>
                        employeeCanEdit &&
                        updateKRARating(kra.id, "selfComments", e.target.value)
                    }
                    disabled={!employeeCanEdit}
                    className={`
                        ef-w-full ef-p-3 ef-rounded-xl ef-text-sm ef-resize-none 
                        ${employeeCanEdit
                            ? "ef-bg-white ef-border ef-border-blue-300 ef-focus:ring-2 ef-focus:ring-blue-400"
                            : "ef-bg-gray-100 ef-text-gray-500 ef-border ef-border-gray-300 ef-cursor-not-allowed"}
                    `}
                    rows={3}
                    placeholder="Add your comments..."
                />
            </div>
        );
    }

    /* ================================================
       MANAGER MODE
    ================================================= */
    return (
        <div
            className={`ef-mt-4 ${showManagerData ? "ef-grid ef-grid-cols-2 ef-gap-4" : ""
                }`}
        >

            {/* ========= Employee Self Block ========= */}
            <div className="ef-bg-blue-50 ef-p-4 ef-rounded-2xl ef-border ef-border-blue-200 ef-shadow-md">

                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                    <div className="ef-w-1 ef-h-6 ef-bg-blue-500 ef-rounded-full"></div>

                    <h4 className="ef-font-bold ef-text-blue-900 ef-text-sm">
                        Employee Self Rating – {kra.title}
                    </h4>
                </div>

                {/* Rating */}
                <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mb-2">
                    Rating
                </label>

                <div className="ef-flex ef-items-center ef-gap-2 ef-bg-blue-100 ef-border ef-border-blue-200 ef-px-3 ef-py-2 ef-rounded-lg">
                    <span className="ef-text-2xl ef-font-bold ef-text-blue-700">
                        {kra.selfRating}
                    </span>
                    <span className="ef-text-gray-600">/10</span>
                </div>

                {/* Comments */}
                <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mt-3 ef-mb-1">
                    Comments
                </label>

                <div className="ef-bg-white ef-border ef-border-blue-100 ef-p-3 ef-rounded-xl ef-text-sm ef-min-h-[70px]">
                    {kra.selfComments || (
                        <span className="ef-text-gray-400 ef-italic">No comments</span>
                    )}
                </div>
            </div>

            {/* ========= Manager Review Block ========= */}
            {showManagerData && (
                <div className="ef-relative ef-bg-purple-50 ef-p-4 ef-rounded-2xl ef-border ef-border-purple-200 ef-shadow-md">

                    {!managerCanEdit && <LockTag />}

                    <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3">
                        <div className="ef-w-1 ef-h-6 ef-bg-purple-500 ef-rounded-full"></div>
                        <h4 className="ef-font-bold ef-text-purple-900 ef-text-sm">
                            Manager Review – {kra.title}
                        </h4>
                    </div>

                    {/* Rating */}
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mb-2">
                        Rating
                    </label>

                    <RatingInput
                        rating={kra.managerRating}
                        onChange={(rating) =>
                            managerCanEdit &&
                            updateKRARating(kra.id, "managerRating", rating)
                        }
                        disabled={!managerCanEdit}
                    />

                    {/* Comments */}
                    <label className="ef-block ef-text-xs ef-font-semibold ef-text-gray-600 ef-mt-3 ef-mb-1">
                        Comments
                    </label>

                    <textarea
                        value={kra.managerComments}
                        onChange={(e) =>
                            managerCanEdit &&
                            updateKRARating(kra.id, "managerComments", e.target.value)
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
    );
};
