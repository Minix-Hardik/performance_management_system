export interface Goal {
    id: number;
    description: string;
    target: string;
    selfRating?: number;
    selfComments?: string;
    managerRating?: number;
    managerComments?: string;
}

export interface KRA {
    id: number;
    title: string;
    description: string;
    weightage: number;
    goals: Goal[];
    selfRating?: number;
    selfComments?: string;
    managerRating?: number;
    managerComments?: string;
}

export interface Competency {
    id: number;
    name: string;
    description: string;
    weightage: number;
    selfRating?: number;
    selfComments?: string;
    managerRating?: number;
    managerComments?: string;
}

export interface Question {
    id: number;
    question: string;
    selfAnswer?: string;
    managerComments?: string;
}

export interface EmployeeInfo {
    name: string;
    designation: string;
    department: string;
    period: string;
}

export interface AppraisalData {
    employee: EmployeeInfo;
    selfAppraisalSubmitted: boolean;
    kra: KRA[];
    competencies: Competency[];
    questions: Question[];
}
