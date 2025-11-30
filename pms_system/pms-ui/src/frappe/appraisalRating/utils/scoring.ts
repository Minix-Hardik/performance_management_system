import type { AppraisalData } from "../types/appraisalTypes";


export const calculateSelfScore = (data: AppraisalData): string => {
    let weightedScore = 0;
    data.kra.forEach((kra) => {
        if (kra.goals.length > 0) {
            const avg =
                kra.goals.reduce((s, g) => s + (g.selfRating || 0), 0) /
                kra.goals.length;
            weightedScore += (avg * kra.weightage) / 100;
        } else {
            weightedScore += ((kra.selfRating || 0) * kra.weightage) / 100;
        }
    });
    data.competencies.forEach((c) => {
        const score = c.selfRating || 0;
        weightedScore += (score * c.weightage) / 100;
    });

    return weightedScore.toFixed(2);
};


export const calculateFinalScore = (data: AppraisalData): string => {
    let weightedScore = 0;

    data.kra.forEach((kra) => {
        if (kra.goals.length > 0) {
            const avg =
                kra.goals.reduce((s, g) => s + (g.managerRating || 0), 0) /
                kra.goals.length;
            weightedScore += (avg * kra.weightage) / 100;
        } else {
            weightedScore += ((kra.managerRating || 0) * kra.weightage) / 100;
        }
    });

    data.competencies.forEach((c) => {
        const score = c.managerRating || 0;
        weightedScore += (score * c.weightage) / 100;
    });

    return weightedScore.toFixed(2);
};
