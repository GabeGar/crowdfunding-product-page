import { createContext, useContext, useReducer, useState } from 'react';
import projectProgressReducer, {
    initProjectProgressState,
} from '../reducers/projectProgressReducer';
import { ReactChildrenNode } from '../types/reactChildNode';
import { ProjectProgress } from '../types/projectTypes';
import { ProjectActions } from '../types/actionTypes';

export interface ProjectContext {
    pledgeSuccessful: boolean;
    setPledgeSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
    projectProgress: ProjectProgress;
    dispatch: React.Dispatch<ProjectActions>;
}

const ProjectContext = createContext<ProjectContext>({
    pledgeSuccessful: false,
    setPledgeSuccessful: () => false,
    projectProgress: {
        totalBackers: 5007,
        totalRaised: 89914,
        goal: 100000,
        projects: [],
    },
    dispatch: () => ({ type: '' }),
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
    return useContext(ProjectContext);
};

export default ProjectContextProvider;
export { useProjects };
