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
