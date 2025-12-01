export function calculateAppraisalScores(
    appraisalData: any,
    kra_percentage: number,
    competency_percentage: number
) {
    const totalKRAWeight = appraisalData.kra.reduce((s: number, k: any) => s + Number(k.weightage || 0), 0) || 1;
    const totalCompWeight = appraisalData.competencies.reduce((s: number, c: any) => s + Number(c.weightage || 0), 0) || 1;

    // -------------------------------------------------------
    // EMPLOYEE SELF SCORE - ALWAYS BASED ON SELF RATINGS ONLY
    // -------------------------------------------------------
    const kraSelf = appraisalData.kra.map((kra: any) => {
        const kraWeightNorm = (kra.weightage || 0) / totalKRAWeight;
        let kraSelfScore = 0;

        if (kra.goals && kra.goals.length > 0) {
            const totalGoalWeight = kra.goals.reduce((s: number, g: any) => s + Number(g.weightage || 0), 0) || 1;
            kraSelfScore = kra.goals.reduce((sum: number, goal: any) => {
                // ONLY use selfRating, ignore managerRating
                const finalRating = Number(goal.selfRating || 0);
                const goalWeightNorm = (goal.weightage || 0) / totalGoalWeight;
                return sum + goalWeightNorm * finalRating;
            }, 0);
        } else {
            // ONLY use selfRating, ignore managerRating
            kraSelfScore = Number(kra.selfRating || 0);
        }

        return kraWeightNorm * kraSelfScore;
    }).reduce((a: number, b: number) => a + b, 0);

    const competencySelf = appraisalData.competencies.reduce((sum: number, comp: any) => {
        const compWeightNorm = (comp.weightage || 0) / totalCompWeight;
        // ONLY use selfRating, ignore managerRating
        return sum + compWeightNorm * Number(comp.selfRating || 0);
    }, 0);

    const employeeSelfScore = kraSelf * (kra_percentage / 100) + competencySelf * (competency_percentage / 100);

    // -------------------------------------------------------
    // FINAL SCORE - AVERAGE OF SELF + MANAGER RATINGS
    // -------------------------------------------------------
    const kraFinal = appraisalData.kra.map((kra: any) => {
        const kraWeightNorm = (kra.weightage || 0) / totalKRAWeight;
        let kraFinalScore = 0;

        if (kra.goals && kra.goals.length > 0) {
            const totalGoalWeight = kra.goals.reduce((s: number, g: any) => s + Number(g.weightage || 0), 0) || 1;
            kraFinalScore = kra.goals.reduce((sum: number, goal: any) => {
                const selfR = Number(goal.selfRating || 0);
                const mgrR = Number(goal.managerRating || 0);
                // Average of self and manager
                const avgRating = (selfR + mgrR) / 2;
                const goalWeightNorm = (goal.weightage || 0) / totalGoalWeight;
                return sum + goalWeightNorm * avgRating;
            }, 0);
        } else {
            const selfR = Number(kra.selfRating || 0);
            const mgrR = Number(kra.managerRating || 0);
            // Average of self and manager
            kraFinalScore = (selfR + mgrR) / 2;
        }

        return kraWeightNorm * kraFinalScore;
    }).reduce((a: number, b: number) => a + b, 0);

    const competencyFinal = appraisalData.competencies.reduce((sum: number, comp: any) => {
        const compWeightNorm = (comp.weightage || 0) / totalCompWeight;
        const selfR = Number(comp.selfRating || 0);
        const mgrR = Number(comp.managerRating || 0);
        // Average of self and manager
        const avgRating = (selfR + mgrR) / 2;
        return sum + compWeightNorm * avgRating;
    }, 0);

    const finalScore = kraFinal * (kra_percentage / 100) + competencyFinal * (competency_percentage / 100);

    // -------------------------------------------------------
    // RETURN RESULTS
    // -------------------------------------------------------
    return {
        kraBlockScore: Number(kraFinal.toFixed(2)),
        competencyScore: Number(competencyFinal.toFixed(2)),
        finalScore: Number(finalScore.toFixed(2)),
        employeeSelfScore: Number(employeeSelfScore.toFixed(2)),  // Always based on self ratings only
    };
}

