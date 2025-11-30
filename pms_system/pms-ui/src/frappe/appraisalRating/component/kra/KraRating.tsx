import type { KRA } from "../../types/appraisalTypes";
import { RatingInput } from "../RatingInput";

export const KRARating = ({
    kra,
    appraisalMode,
    updateKRARating,
    selfAppraisalSubmitted,
}: {
    kra: KRA;
    appraisalMode: "self" | "manager";
    updateKRARating: (kraId: number, field: keyof KRA, value: any) => void;
    selfAppraisalSubmitted: boolean;
}) => {
    if (appraisalMode === "self") {
        return (
            <div className="ef-bg-blue-50 ef-p-4 ef-rounded-lg">
                <h4 className="ef-font-semibold ef-text-blue-900 ef-mb-3">
                    Self Appraisal
                </h4>

                {/* Rating */}
                <label className="ef-block ef-text-sm ef-font-medium ef-mb-2">
                    Rating
                </label>
                <RatingInput
                    rating={kra.selfRating}
                    onChange={(rating) =>
                        updateKRARating(kra.id, "selfRating", rating)
                    }
                    disabled={false}
                />

                {/* Comments */}
                <label className="ef-block ef-text-sm ef-font-medium ef-mt-4 ef-mb-2">
                    Comments
                </label>
                <textarea
                    value={kra.selfComments}
                    onChange={(e) =>
                        updateKRARating(kra.id, "selfComments", e.target.value)
                    }
                    className="ef-w-full ef-p-2 ef-border ef-rounded-lg ef-resize-none"
                    rows={3}
                />
            </div>
        );
    }

    return (
        <div className="ef-grid ef-grid-cols-2 ef-gap-4">
            {/* Self */}
            <div className="ef-bg-blue-50 ef-p-4 ef-rounded-lg">
                <h4 className="ef-font-semibold ef-text-blue-900 ef-mb-3">
                    Employee Self Rating
                </h4>

                <label className="ef-block ef-text-sm ef-font-medium ef-mb-2">
                    Rating
                </label>
                <div className="ef-text-2xl ef-font-bold ef-text-blue-600">
                    {kra.selfRating}/10
                </div>

                <label className="ef-block ef-text-sm ef-font-medium ef-mt-4 ef-mb-2">
                    Comments
                </label>
                <div className="ef-p-3 ef-bg-white ef-rounded-lg ef-text-gray-700 ef-min-h-[80px]">
                    {kra.selfComments || "No comments"}
                </div>
            </div>

            {/* Manager */}
            <div className="ef-bg-purple-50 ef-p-4 ef-rounded-lg">
                <h4 className="ef-font-semibold ef-text-purple-900 ef-mb-3">
                    Manager Review
                </h4>

                <label className="ef-block ef-text-sm ef-font-medium ef-mb-2">
                    Rating
                </label>
                <RatingInput
                    rating={kra.managerRating}
                    onChange={(rating) =>
                        updateKRARating(kra.id, "managerRating", rating)
                    }
                    disabled={!selfAppraisalSubmitted}
                />

                <label className="ef-block ef-text-sm ef-font-medium ef-mt-4 ef-mb-2">
                    Comments
                </label>
                <textarea
                    value={kra.managerComments}
                    onChange={(e) =>
                        updateKRARating(
                            kra.id,
                            "managerComments",
                            e.target.value
                        )
                    }
                    disabled={!selfAppraisalSubmitted}
                    className="ef-w-full ef-p-2 ef-border ef-rounded-lg ef-resize-none"
                    rows={3}
                />
            </div>
        </div>
    );
};
