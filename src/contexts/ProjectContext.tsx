import { createContext, useContext, useReducer, useState } from 'react';
import projectProgressReducer, {
    initProjectProgressState,
} from '../reducers/projectProgressReducer';
import { ReactChildrenNode } from '../models/reactChildNode';
import { ProjectActions, ProjectProgress } from '../models/projectTypes';

export interface ProjectContext {
    pledgeSuccessful: boolean;
    setPledgeSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
    projectProgress: ProjectProgress;
    dispatch: React.Dispatch<ProjectActions>;
}

const ProjectContext = createContext<ProjectContext>({
    pledgeSuccessful: false,
    setPledgeSuccessful: () => {},
    projectProgress: {
        totalBackers: 5007,
        totalRaised: 89914,
        goal: 100000,
        projects: [],
    },
    dispatch: () => {},
});

const ProjectContextProvider = ({ children }: ReactChildrenNode) => {
    const [projectProgress, dispatch] = useReducer(
        projectProgressReducer,
        initProjectProgressState,
    );
    const [pledgeSuccessful, setPledgeSuccessful] = useState<boolean>(false);

    return (
        <ProjectContext.Provider
            value={{
                pledgeSuccessful,
                setPledgeSuccessful,
                projectProgress,
                dispatch,
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
};

const useProjects = () => {
    const ctx = useContext(ProjectContext);

    if (ctx === undefined) {
        throw new Error(
            'Pledge context was used outside of the pledge context provider',
        );
    }

    return ctx;
};

export default ProjectContextProvider;
export { useProjects };
