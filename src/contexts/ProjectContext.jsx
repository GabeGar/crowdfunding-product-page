import { createContext, useContext, useReducer, useState } from 'react';
import projectProgressReducer, {
    initProjectProgressState,
} from '../reducers/projectProgressReducer';

const ProjectContext = createContext({
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

const ProjectContextProvider = ({ children }) => {
    const [projectProgress, dispatch] = useReducer(
        projectProgressReducer,
        initProjectProgressState,
    );
    const [pledgeSuccessful, setPledgeSuccessful] = useState(false);

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
