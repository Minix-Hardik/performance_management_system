import { Calendar, Award, TrendingUp } from 'lucide-react';

export const EmployeeAppraisalReport = () => {
    const frappe_doc = window?.cur_frm?.doc
    const employee =
    {
        code: frappe_doc.employee,
        name: frappe_doc.employee_name,
        dept: frappe_doc.department,
        designation: frappe_doc.designation,
        doj: frappe_doc.date_of_joining,
        selfRating: frappe_doc.employee_score,
        expectation: `${frappe_doc.as_employee_what_he_deserve}%`,
        manager1: frappe_doc.reports_to_name,
        manager1Rating: frappe_doc.manager_rating,
        manager1Comment: frappe_doc.manager_final_comment,
        manager1Promotion: 'Yes',
        manager1Increment: '15%',
        manager2: frappe_doc.reports_to_second_name,
        manager2Rating: frappe_doc.second_manager_rating,
        manager2Comment: frappe_doc.second_manager_comment,
        manager2Increment: '12%',
        manager2Promotion: "Yes"
    }

    const getRatingColor = (rating: any) => {
        if (rating >= 4.5) return 'bg-green-500';
        if (rating >= 3.5) return 'bg-blue-500';
        return 'bg-orange-500';
    };

    const getRatingBgColor = (rating: any) => {
        if (rating >= 4.5) return 'bg-green-50 border-green-200';
        if (rating >= 3.5) return 'bg-blue-50 border-blue-200';
        return 'bg-orange-50 border-orange-200';
    };

    return (
        <div className="ef-min-h-screen ef-bg-gradient-to-br ef-from-blue-50 ef-via-white ef-to-purple-50 ef-p-6 ef-transition-all ef-duration-300 ef-ease-in-out">
            <div className="ef-max-w-5xl ef-mx-auto ef-transform ef-transition-all ef-duration-500 ef-ease-in-out">
                {/* Main Card */}
                <div className="ef-bg-white ef-rounded-2xl ef-shadow-lg ef-overflow-hidden ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-2xl ef-transform ef-hover:scale-[1.01]">

                    {/* Employee Header */}
                    <div className="ef-bg-gradient-to-r ef-from-blue-600 ef-to-purple-600 ef-p-8 ef-text-white ef-transition-all ef-duration-500 ef-ease-in-out">
                        <div className="ef-flex ef-items-start ef-justify-between">
                            <div className="ef-transition-all ef-duration-300 ef-ease-in-out">
                                <div className="ef-text-sm ef-opacity-90 ef-mb-1 ef-transition-opacity ef-duration-300 ef-ease-in-out">
                                    Employee Code: {employee.code}
                                </div>

                                <h2 className="ef-text-3xl ef-font-bold ef-mb-2 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-105 ef-origin-left">
                                    {employee.name}
                                </h2>

                                <div className="ef-flex ef-items-center ef-gap-4 ef-text-sm">
                                    <span className="ef-px-3 ef-py-1 ef-bg-white ef-bg-opacity-20 ef-rounded-full ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-opacity-30 ef-hover:scale-105">
                                        {employee.designation}
                                    </span>
                                    <span className="ef-px-3 ef-py-1 ef-bg-white ef-bg-opacity-20 ef-rounded-full ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-opacity-30 ef-hover:scale-105">
                                        {employee.dept}
                                    </span>
                                </div>
                            </div>

                            <div className="ef-text-right ef-transition-all ef-duration-300 ef-ease-in-out">
                                <div className="ef-flex ef-items-center ef-gap-2 ef-text-sm ef-opacity-90 ef-mb-1 ef-transition-opacity ef-duration-300 ef-ease-in-out">
                                    <Calendar className="ef-w-4 ef-h-4 ef-transition-transform ef-duration-300 ef-ease-in-out ef-hover:rotate-12" />
                                    Date of Joining
                                </div>
                                <div className="ef-text-xl ef-font-semibold ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-110">
                                    {employee.doj}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Self Appraisal Section */}
                    <div className="ef-p-8 ef-border-b ef-border-gray-200 ef-bg-gray-50 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:bg-gray-100">
                        <div className="ef-flex ef-items-start ef-justify-between ef-gap-6">

                            <div className="ef-flex-1 ef-transition-all ef-duration-300 ef-ease-in-out">
                                <div className="ef-flex ef-items-center ef-gap-2 ef-mb-3 ef-transition-all ef-duration-300 ef-ease-in-out">
                                    <Award className="ef-w-5 ef-h-5 ef-text-purple-600 ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-125 ef-hover:rotate-12" />
                                    <h3 className="ef-text-lg ef-font-semibold ef-text-gray-900">Self Appraisal</h3>
                                </div>

                                <div className="ef-mb-4">
                                    <div className="ef-text-sm ef-text-gray-600 ef-mb-2">Employee Expectation:</div>
                                    <div className="ef-text-base ef-text-gray-900 ef-font-medium ef-hover:text-purple-700">
                                        {employee.expectation}
                                    </div>
                                </div>
                            </div>

                            <div className="ef-text-center">
                                <div className="ef-text-sm ef-text-gray-600 ef-mb-2">Self Rating</div>
                                <div className={`ef-w-20 ef-h-20 ef-rounded-full ef-flex ef-items-center ef-justify-center ${getRatingColor(employee.selfRating)} ef-text-white ef-transition-all ef-duration-300 ef-ease-in-out ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`}>
                                    <span className="ef-text-3xl ef-font-bold ef-text-black">{employee.selfRating}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Manager Reviews */}
                    <div className="ef-p-8 ef-space-y-6 ef-transition-all ef-duration-300 ef-ease-in-out">

                        <div className="ef-flex ef-items-center ef-gap-2 ef-mb-4">
                            <TrendingUp className="ef-w-5 ef-h-5 ef-text-blue-600 ef-hover:scale-125 ef-hover:-translate-y-[2px] ef-transition-all" />
                            <h3 className="ef-text-xl ef-font-semibold ef-text-gray-900">Manager Evaluations</h3>
                        </div>

                        {/* Manager 1 */}
                        <div className={`ef-border-2 ef-rounded-xl ef-p-6 ${getRatingBgColor(employee.manager1Rating)} ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-lg ef-transform ef-hover:scale-[1.02] ef-hover:-translate-y-1`}>

                            <div className="ef-flex ef-items-start ef-justify-between ef-mb-4">
                                <div>
                                    <div className="ef-text-xs ef-text-gray-500 ef-uppercase ef-font-semibold ef-mb-1">Reporting Manager - 1</div>
                                    <div className="ef-text-xl ef-font-bold ef-text-gray-900 ef-hover:text-blue-700">{employee.manager1}</div>
                                </div>

                                <div className="ef-text-center">
                                    <div className="ef-text-xs ef-text-gray-600 ef-mb-1">Rating</div>
                                    <div className={`ef-w-16 ef-h-16 ef-rounded-full ef-flex ef-items-center ef-justify-center ${getRatingColor(employee.manager1Rating)} ef-text-white ef-transition-all ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`}>
                                        <span className="ef-text-2xl ef-font-bold">{employee.manager1Rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="ef-space-y-4">
                                <div>
                                    <div className="ef-text-sm ef-font-semibold ef-text-gray-700 ef-mb-2">Overall Comment:</div>
                                    <div className="ef-text-gray-900 ef-leading-relaxed">{employee.manager1Comment}</div>
                                </div>

                                <div className="ef-grid ef-grid-cols-2 ef-gap-4 ef-pt-4 ef-border-t ef-border-gray-200">

                                    <div>
                                        <div className="ef-text-sm ef-text-gray-600 ef-mb-1">Promotion Recommended</div>
                                        <div className={`ef-inline-flex ef-items-center ef-px-4 ef-py-2 ef-rounded-lg ef-font-semibold ef-transition-all ef-hover:scale-105 ${employee.manager1Promotion === 'Yes'
                                            ? 'ef-bg-green-100 ef-text-green-800 ef-border-2 ef-border-green-300 ef-hover:bg-green-200'
                                            : 'ef-bg-gray-100 ef-text-gray-700 ef-border-2 ef-border-gray-300 ef-hover:bg-gray-200'
                                            }`}>
                                            {employee.manager1Promotion}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="ef-text-sm ef-text-gray-600 ef-mb-1">Special Increment</div>
                                        <div className="ef-text-2xl ef-font-bold ef-text-gray-900 ef-hover:scale-110 ef-hover:text-green-600">
                                            {employee.manager1Increment}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Manager 2 */}
                        <div className={`ef-border-2 ef-rounded-xl ef-p-6 ${getRatingBgColor(employee.manager2Rating)} ef-transition-all ef-duration-500 ef-ease-in-out ef-hover:shadow-lg ef-transform ef-hover:scale-[1.02] ef-hover:-translate-y-1`}>

                            <div className="ef-flex ef-items-start ef-justify-between ef-mb-4">
                                <div>
                                    <div className="ef-text-xs ef-text-gray-500 ef-uppercase ef-font-semibold ef-mb-1">Reporting Manager - 2</div>
                                    <div className="ef-text-xl ef-font-bold ef-text-gray-900 ef-hover:text-blue-700">{employee.manager2}</div>
                                </div>

                                <div className="ef-text-center">
                                    <div className="ef-text-xs ef-text-gray-600 ef-mb-1">Rating</div>
                                    <div className={`ef-w-16 ef-h-16 ef-rounded-full ef-flex ef-items-center ef-justify-center ${getRatingColor(employee.manager2Rating)} ef-text-white ef-transition-all ef-hover:scale-110 ef-hover:shadow-lg ef-transform ef-hover:rotate-6`}>
                                        <span className="ef-text-2xl ef-font-bold">{employee.manager2Rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="ef-space-y-4">
                                <div>
                                    <div className="ef-text-sm ef-font-semibold ef-text-gray-700 ef-mb-2">Overall Comment:</div>
                                    <div className="ef-text-gray-900 ef-leading-relaxed">{employee.manager2Comment}</div>
                                </div>

                                <div className="ef-grid ef-grid-cols-2 ef-gap-4 ef-pt-4 ef-border-t ef-border-gray-200">

                                    <div>
                                        <div className="ef-text-sm ef-text-gray-600 ef-mb-1">Promotion Recommended</div>
                                        <div className={`ef-inline-flex ef-items-center ef-px-4 ef-py-2 ef-rounded-lg ef-font-semibold ef-hover:scale-105 ${employee.manager2Promotion === 'Yes'
                                            ? 'ef-bg-green-100 ef-text-green-800 ef-border-2 ef-border-green-300 ef-hover:bg-green-200'
                                            : 'ef-bg-gray-100 ef-text-gray-700 ef-border-2 ef-border-gray-300 ef-hover:bg-gray-200'
                                            }`}>
                                            {employee.manager2Promotion}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="ef-text-sm ef-text-gray-600 ef-mb-1">Special Increment</div>
                                        <div className="ef-text-2xl ef-font-bold ef-text-gray-900 ef-hover:scale-110 ef-hover:text-green-600">
                                            {employee.manager2Increment}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};


EmployeeAppraisalReport.component = "appraisal-report";

