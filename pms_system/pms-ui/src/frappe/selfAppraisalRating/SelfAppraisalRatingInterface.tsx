import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";

declare global {
    interface Window {
        cur_frm: any;
        frappe: any;
    }
}

interface RatingRow {
    name: string;
    criteria: string;
    criteria_id?: string;
    per_weightage: number;
    rating: number; // 0.0 to 1.0
    custom_justification: string;
}

export const SelfAppraisalRatingInterface = ({ docname }: { docname?: string }) => {
    const [rows, setRows] = useState<RatingRow[]>([]);
    const [selfScore, setSelfScore] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [employeeUserId, setEmployeeUserId] = useState<string>("");

    const frm = window.cur_frm;

    const syncFromFrappe = () => {
        if (!frm?.doc) return;

        const rawRows = frm.doc.self_ratings || [];
        const appraisalKras = frm.doc.appraisal_kra || [];
        
        const mapped: RatingRow[] = rawRows.map((r: any, idx: number) => {
            let kraTitle = r.criteria || "";
            let kraId = r.criteria || "";

            // Check custom_kra_title first, fallback to appraisal_kra index match
            const customKraTitle = r.custom_kra_title;
            if (customKraTitle) {
                kraTitle = customKraTitle;
                kraId = customKraTitle;
            } else if (idx < appraisalKras.length && appraisalKras[idx].kra) {
                kraTitle = appraisalKras[idx].kra;
                kraId = appraisalKras[idx].kra;
            }

            return ({
                name: r.name,
                criteria: kraTitle,
                criteria_id: kraId,
                per_weightage: Number(r.per_weightage) || 0,
                rating: Number(r.rating) || 0,
                custom_justification: r.custom_justification || "",
            });
        });

        setRows(mapped);
        
        // Fetch current self_score
        setSelfScore(Number(frm.doc.self_score) || 0);
        setLoading(false);
    };

    useEffect(() => {
        if (!frm?.doc) {
            setLoading(false);
            return;
        }

        syncFromFrappe();

        // Fetch employee's user_id if not present on doc
        if (frm.doc.employee_user_id) {
            setEmployeeUserId(frm.doc.employee_user_id);
        } else if (frm.doc.employee) {
            window.frappe.db.get_value("Employee", frm.doc.employee, "user_id")
                .then((r: any) => {
                    if (r && r.message && r.message.user_id) {
                        setEmployeeUserId(r.message.user_id);
                    }
                });
        }

        // Listen to form refresh/load updates to sync component state
        const handleRefresh = () => syncFromFrappe();
        
        // Hook into standard Frappe refresh events
        if (frm.fields_dict && frm.fields_dict.custom_self_appraisal_rating_html) {
            frm.fields_dict.custom_self_appraisal_rating_html.on_refresh = handleRefresh;
        }

        return () => {
            if (frm.fields_dict && frm.fields_dict.custom_self_appraisal_rating_html) {
                delete frm.fields_dict.custom_self_appraisal_rating_html.on_refresh;
            }
        };
    }, [docname]);

    if (!frm?.doc) {
        return <div className="ef-p-4 ef-text-gray-500">Loading appraisal...</div>;
    }

    if (loading) {
        return <div className="ef-p-4 ef-text-gray-500">Loading self appraisal ratings...</div>;
    }

    const currentUser = window.frappe?.session?.user;
    const workflowStatus = frm.doc.workflow_state;

    // Editable if:
    // 1. Current user is the appraisee employee OR the Administrator
    // 2. AND (workflow state is "Self Appraisal" OR "Draft" OR not set)
    // 3. AND the document is in Draft status (docstatus === 0)
    const isEmployeeOrAdmin = currentUser === employeeUserId || currentUser === "Administrator";
    const isWorkflowStateAllow = !workflowStatus || workflowStatus === "Self Appraisal" || workflowStatus === "Draft";
    const employeeCanEdit = isEmployeeOrAdmin && isWorkflowStateAllow && frm.doc.docstatus === 0;

    console.log("SelfAppraisalRatingInterface Permissions Check:", {
        currentUser,
        employeeUserId,
        workflowStatus,
        docstatus: frm.doc.docstatus,
        employeeCanEdit
    });

    const recalculateTotalScore = (updatedRows: RatingRow[]) => {
        let total = 0;
        updatedRows.forEach((r) => {
            const stars = Math.round(r.rating * 5);
            total += (stars * r.per_weightage) / 100;
        });

        // Update total score in state
        setSelfScore(total);

        // Update Total Self Score in Appraisal Doc
        frm.set_value("self_score", total);
        frm.refresh_field("self_score");
    };

    const handleSelectRating = (rowName: string, val: number) => {
        const fraction = val / 5.0;

        const updated = rows.map((r) => {
            if (r.name === rowName) {
                return { ...r, rating: fraction };
            }
            return r;
        });

        setRows(updated);

        // Update in Frappe doc
        if (frm.doc.self_ratings) {
            const docRow = frm.doc.self_ratings.find((x: any) => x.name === rowName);
            if (docRow) {
                docRow.rating = fraction;
                frm.refresh_field("self_ratings");
                frm.dirty();
            }
        }

        recalculateTotalScore(updated);
    };

    const handleJustificationChange = (rowName: string, value: string) => {
        const updated = rows.map((r) => {
            if (r.name === rowName) {
                return { ...r, custom_justification: value };
            }
            return r;
        });

        setRows(updated);

        // Update in Frappe doc
        if (frm.doc.self_ratings) {
            const docRow = frm.doc.self_ratings.find((x: any) => x.name === rowName);
            if (docRow) {
                docRow.custom_justification = value;
                frm.refresh_field("self_ratings");
                frm.dirty();
            }
        }
    };

    return (
        <div className="ef-w-full ef-bg-[#1a1a1a] ef-p-6 ef-rounded-lg ef-shadow-lg ef-border ef-border-[#2d2d2d] ef-font-sans ef-text-[#e0e0e0]">
            <div className="ef-flex ef-justify-between ef-items-center ef-mb-4">
                <h3 className="ef-text-lg ef-font-bold ef-text-white">Self Appraisal Ratings</h3>
                <div className="ef-bg-[#222] ef-px-4 ef-py-2 ef-rounded ef-border ef-border-[#333]">
                    <span className="ef-text-xs ef-text-gray-400 ef-mr-2">Calculated Self Score:</span>
                    <span className="ef-text-base ef-font-bold ef-text-[#9396e6]">{selfScore.toFixed(2)}</span>
                </div>
            </div>

            {rows.length === 0 ? (
                <div className="ef-p-6 ef-text-center ef-bg-[#222] ef-rounded ef-border ef-border-[#333] ef-italic ef-text-gray-500">
                    No rating criteria rows found. Please select an Appraisal Template.
                </div>
            ) : (
                <div className="ef-overflow-x-auto">
                    <table className="ef-w-full ef-border-collapse ef-border ef-border-[#333]">
                        <thead>
                            <tr className="ef-bg-[#9396e6] ef-text-[#1a1a1a]">
                                <th className="ef-border ef-border-[#333] ef-p-3 ef-text-left ef-font-bold">KRA title (from ERP goal sheet)</th>
                                <th className="ef-border ef-border-[#333] ef-p-3 ef-text-center ef-w-20 ef-font-bold">1</th>
                                <th className="ef-border ef-border-[#333] ef-p-3 ef-text-center ef-w-20 ef-font-bold">2</th>
                                <th className="ef-border ef-border-[#333] ef-p-3 ef-text-center ef-w-20 ef-font-bold">3</th>
                                <th className="ef-border ef-border-[#333] ef-p-3 ef-text-center ef-w-20 ef-font-bold">4</th>
                                <th className="ef-border ef-border-[#333] ef-p-3 ef-text-center ef-w-20 ef-font-bold">5</th>
                                <th className="ef-border ef-border-[#333] ef-p-3 ef-text-center ef-w-24 ef-font-bold">Rating</th>
                            </tr>
                            <tr className="ef-bg-[#282828] ef-text-xs">
                                <td className="ef-border ef-border-[#333] ef-p-2 ef-italic ef-text-gray-400">Scale reference &rarr;</td>
                                <td className="ef-border ef-border-[#333] ef-p-2 ef-text-center ef-text-[#f87171] ef-font-semibold">Critical miss</td>
                                <td className="ef-border ef-border-[#333] ef-p-2 ef-text-center ef-text-[#fbbf24] ef-font-semibold">Below par</td>
                                <td className="ef-border ef-border-[#333] ef-p-2 ef-text-center ef-text-[#a78bfa] ef-font-semibold">On track</td>
                                <td className="ef-border ef-border-[#333] ef-p-2 ef-text-center ef-text-[#60a5fa] ef-font-semibold">Strong</td>
                                <td className="ef-border ef-border-[#333] ef-p-2 ef-text-center ef-text-[#34d399] ef-font-semibold">Exceptional</td>
                                <td className="ef-border ef-border-[#333] ef-p-2"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => {
                                const currentStars = Math.round((row.rating || 0) * 5);

                                return (
                                    <React.Fragment key={row.name}>
                                        {/* Rating Selection Row */}
                                        <tr className="ef-bg-[#222]">
                                            <td className="ef-border ef-border-[#333] ef-p-4 ef-font-medium ef-text-white">
                                                {row.criteria_id ? (
                                                    <a
                                                        href={`/app/kra/${encodeURIComponent(row.criteria_id)}`}
                                                        className="ef-text-[#9396e6] hover:ef-underline"
                                                        onClick={(e) => {
                                                            if (window.frappe) {
                                                                e.preventDefault();
                                                                window.frappe.set_route("Form", "KRA", row.criteria_id);
                                                            }
                                                        }}
                                                    >
                                                        {row.criteria}
                                                    </a>
                                                ) : (
                                                    row.criteria
                                                )}
                                            </td>
                                            {[1, 2, 3, 4, 5].map((val) => {
                                                const isActive = currentStars === val;
                                                return (
                                                    <td
                                                        key={val}
                                                        onClick={() => employeeCanEdit && handleSelectRating(row.name, val)}
                                                        className={`ef-border ef-border-[#333] ef-p-4 ef-text-center ef-align-middle ef-cursor-pointer ef-transition-all ef-duration-200
                                                            ${val === 1 ? (isActive ? "ef-bg-[#6b2121] ef-text-white ef-ring-2 ef-ring-[#f87171]" : "ef-bg-[#3d1a1a] ef-text-[#f87171] hover:ef-bg-[#4c2222]") : ""}
                                                            ${val === 2 ? (isActive ? "ef-bg-[#785a15] ef-text-white ef-ring-2 ef-ring-[#fbbf24]" : "ef-bg-[#3d311a] ef-text-[#fbbf24] hover:ef-bg-[#4c3e22]") : ""}
                                                            ${val === 3 ? (isActive ? "ef-bg-[#451a8a] ef-text-white ef-ring-2 ef-ring-[#a78bfa]" : "ef-bg-[#211a3d] ef-text-[#a78bfa] hover:ef-bg-[#2d2454]") : ""}
                                                            ${val === 4 ? (isActive ? "ef-bg-[#1a4b8a] ef-text-white ef-ring-2 ef-ring-[#60a5fa]" : "ef-bg-[#1a2b3d] ef-text-[#60a5fa] hover:ef-bg-[#223a54]") : ""}
                                                            ${val === 5 ? (isActive ? "ef-bg-[#1a6b35] ef-text-white ef-ring-2 ef-ring-[#34d399]" : "ef-bg-[#1a3d21] ef-text-[#34d399] hover:ef-bg-[#22522c]") : ""}
                                                            ${!employeeCanEdit ? "ef-cursor-not-allowed ef-opacity-70" : ""}
                                                        `}
                                                    >
                                                        <div className="ef-text-xl ef-font-bold">{val}</div>
                                                    </td>
                                                );
                                            })}
                                            <td className="ef-border ef-border-[#333] ef-p-4 ef-text-center ef-align-middle ef-font-semibold ef-text-gray-300">
                                                {currentStars ? (
                                                    <span className="ef-text-lg ef-font-bold ef-text-white">{currentStars}</span>
                                                ) : (
                                                    <span className="ef-text-gray-500 ef-italic ef-text-xs">Circle</span>
                                                )}
                                            </td>
                                        </tr>
                                        {/* Justification Textarea Row */}
                                        <tr className="ef-bg-[#1c1c1c]">
                                            <td colSpan={7} className="ef-border ef-border-[#333] ef-p-3">
                                                <div className="ef-flex ef-flex-col ef-gap-2">
                                                    <div className="ef-flex ef-items-center ef-gap-2">
                                                        <span className="ef-text-xs ef-font-semibold ef-text-gray-400">
                                                            Justification / evidence:
                                                        </span>
                                                        {!employeeCanEdit && (
                                                            <Lock size={12} className="ef-text-gray-500" />
                                                        )}
                                                    </div>
                                                    <textarea
                                                        value={row.custom_justification || ""}
                                                        onChange={(e) => employeeCanEdit && handleJustificationChange(row.name, e.target.value)}
                                                        disabled={!employeeCanEdit}
                                                        rows={2}
                                                        placeholder={employeeCanEdit ? "Enter justification or evidence..." : "No justification provided"}
                                                        className={`ef-w-full ef-p-2.5 ef-rounded ef-text-sm ef-resize-none ef-border ef-transition-colors
                                                            ${employeeCanEdit
                                                                ? "ef-bg-[#2b2b2b] ef-border-[#444] ef-text-white ef-focus:border-blue-500 ef-focus:outline-none"
                                                                : "ef-bg-[#1e1e1e] ef-border-[#333] ef-text-gray-400 ef-cursor-not-allowed"
                                                            }
                                                        `}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

SelfAppraisalRatingInterface.component = "self-appraisal-rating-interface";
