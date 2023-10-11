export interface Project {
    id: number;
    name: string;
    price?: number;
    description: string;
    remaining?: number;
}

export interface ProjectProgress {
    totalBackers: number;
    totalRaised: number;
    goal: number;
    projects: Project[];
}

interface RewardPayload {
    id: number;
    reduceRemainingByOne: number;
    currentAmount: number;
}

export type ProjectActions =
    | { type: 'project/no-reward' }
    | { type: 'project/reward'; payload: RewardPayload };
