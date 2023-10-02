import data from '../data/data.json';

const initProjectProgressState = {
    totalBackers: 5007,
    totalRaised: 89914,
    goal: 100000,
    projects: data,
};

const projectProgressReducer = (state, action) => {
    switch (action.type) {
        case 'project/no-reward': {
            return {
                ...state,
                totalBackers: state.totalBackers + 1,
            };
        }

        case 'project/reward': {
            const updatedProjectsList = state.projects.map((project) => {
                if (project.id === action.payload.id) {
                    return {
                        ...project,
                        remaining: project.remaining - 1,
                    };
                }
                return project;
            });

            return {
                ...state,
                totalBackers: state.totalBackers + 1,
                totalRaised: state.totalRaised + action.payload.currentAmount,
                projects: updatedProjectsList,
            };
        }

        default:
            throw new Error('Unknown action encountered');
    }
};

export default projectProgressReducer;
export { initProjectProgressState };
