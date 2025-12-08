export function calculateAppraisalScores(
    appraisalData: any,
    kra_percentage: number,
    competency_percentage: number,
    hasSecondManager: boolean = false
) {
    const totalKRAWeight =
        appraisalData.kra.reduce((s: number, k: any) => s + Number(k.weightage || 0), 0) || 1;

    const totalCompWeight =
        appraisalData.competencies.reduce((s: number, c: any) => s + Number(c.weightage || 0), 0) || 1;

    const averageRatings = (self: number, manager: number, secondMgr: number) => {
        if (hasSecondManager) {
            return (self + manager + secondMgr) / 3;
        } else {
            return (self + manager) / 2;
        }
    };

    // Employee Self Score
    const kraSelf = appraisalData.kra
        .map((kra: any) => {
            const kraWeightNorm = (kra.weightage || 0) / totalKRAWeight;
            let kraSelfScore = 0;

            if (kra.goals?.length > 0) {
                const totalGoalWeight =
                    kra.goals.reduce((s: number, g: any) => s + Number(g.weightage || 0), 0) || 1;

                kraSelfScore = kra.goals.reduce((sum: number, goal: any) => {
                    const rating = Number(goal.selfRating || 0);
                    const goalWeightNorm = (goal.weightage || 0) / totalGoalWeight;
                    return sum + goalWeightNorm * rating;
                }, 0);
            } else {
                kraSelfScore = Number(kra.selfRating || 0);
            }

            return kraWeightNorm * kraSelfScore;
        })
        .reduce((a: number, b: number) => a + b, 0);

    const competencySelf = appraisalData.competencies.reduce(
        (sum: number, comp: any) => {
            const compWeightNorm = (comp.weightage || 0) / totalCompWeight;
            return sum + compWeightNorm * Number(comp.selfRating || 0);
        },
        0
    );

    const employeeSelfScore =
        kraSelf * (kra_percentage / 100) +
        competencySelf * (competency_percentage / 100);

    // Manager 1 Score
    const kraManager1 = appraisalData.kra
        .map((kra: any) => {
            const kraWeightNorm = (kra.weightage || 0) / totalKRAWeight;
            let kraManager1Score = 0;

            if (kra.goals?.length > 0) {
                const totalGoalWeight =
                    kra.goals.reduce((s: number, g: any) => s + Number(g.weightage || 0), 0) || 1;

                kraManager1Score = kra.goals.reduce((sum: number, goal: any) => {
                    const rating = Number(goal.managerRating || 0);
                    const goalWeightNorm = (goal.weightage || 0) / totalGoalWeight;
                    return sum + goalWeightNorm * rating;
                }, 0);
            } else {
                kraManager1Score = Number(kra.managerRating || 0);
            }

            return kraWeightNorm * kraManager1Score;
        })
        .reduce((a: number, b: number) => a + b, 0);

    const competencyManager1 = appraisalData.competencies.reduce(
        (sum: number, comp: any) => {
            const compWeightNorm = (comp.weightage || 0) / totalCompWeight;
            return sum + compWeightNorm * Number(comp.managerRating || 0);
        },
        0
    );

    const manager1Score =
        kraManager1 * (kra_percentage / 100) +
        competencyManager1 * (competency_percentage / 100);

    // Manager 2 Score (if applicable)
    let manager2Score = 0;
    if (hasSecondManager) {
        const kraManager2 = appraisalData.kra
            .map((kra: any) => {
                const kraWeightNorm = (kra.weightage || 0) / totalKRAWeight;
                let kraManager2Score = 0;

                if (kra.goals?.length > 0) {
                    const totalGoalWeight =
                        kra.goals.reduce((s: number, g: any) => s + Number(g.weightage || 0), 0) || 1;

                    kraManager2Score = kra.goals.reduce((sum: number, goal: any) => {
                        const rating = Number(goal.secondManagerRating || 0);
                        const goalWeightNorm = (goal.weightage || 0) / totalGoalWeight;
                        return sum + goalWeightNorm * rating;
                    }, 0);
                } else {
                    kraManager2Score = Number(kra.secondManagerRating || 0);
                }

                return kraWeightNorm * kraManager2Score;
            })
            .reduce((a: number, b: number) => a + b, 0);

        const competencyManager2 = appraisalData.competencies.reduce(
            (sum: number, comp: any) => {
                const compWeightNorm = (comp.weightage || 0) / totalCompWeight;
                return sum + compWeightNorm * Number(comp.secondManagerRating || 0);
            },
            0
        );

        manager2Score =
            kraManager2 * (kra_percentage / 100) +
            competencyManager2 * (competency_percentage / 100);
    }

    // Final Score (Average)
    const kraFinal = appraisalData.kra
        .map((kra: any) => {
            const kraWeightNorm = (kra.weightage || 0) / totalKRAWeight;
            let kraScore = 0;

            if (kra.goals?.length > 0) {
                const totalGoalWeight =
                    kra.goals.reduce((s: number, g: any) => s + Number(g.weightage || 0), 0) || 1;

                kraScore = kra.goals.reduce((sum: number, goal: any) => {
                    const avgRating = averageRatings(
                        Number(goal.selfRating || 0),
                        Number(goal.managerRating || 0),
                        Number(goal.secondManagerRating || 0)
                    );

                    const goalWeightNorm = (goal.weightage || 0) / totalGoalWeight;
                    return sum + goalWeightNorm * avgRating;
                }, 0);
            } else {
                kraScore = averageRatings(
                    Number(kra.selfRating || 0),
                    Number(kra.managerRating || 0),
                    Number(kra.secondManagerRating || 0)
                );
            }

            return kraWeightNorm * kraScore;
        })
        .reduce((a: number, b: number) => a + b, 0);

    const competencyFinal = appraisalData.competencies.reduce(
        (sum: number, comp: any) => {
            const compWeightNorm = (comp.weightage || 0) / totalCompWeight;

            const avg = averageRatings(
                Number(comp.selfRating || 0),
                Number(comp.managerRating || 0),
                Number(comp.secondManagerRating || 0)
            );

            return sum + compWeightNorm * avg;
        },
        0
    );

    const finalScore =
        kraFinal * (kra_percentage / 100) +
        competencyFinal * (competency_percentage / 100);
    console.log({ manager1Score: Number(manager1Score.toFixed(2)), manager2Score: hasSecondManager ? Number(manager2Score.toFixed(2)) : null })
    return {
        kraBlockScore: Number(kraFinal.toFixed(2)),
        competencyScore: Number(competencyFinal.toFixed(2)),
        finalScore: Number(finalScore.toFixed(2)),
        employeeSelfScore: Number(employeeSelfScore.toFixed(2)),
        manager1Score: Number(manager1Score.toFixed(2)),
        manager2Score: hasSecondManager ? Number(manager2Score.toFixed(2)) : null
    };
}