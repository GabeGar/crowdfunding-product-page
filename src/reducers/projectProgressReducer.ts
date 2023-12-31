import { ProjectProgress } from '../types/projectTypes';
import { ActionTypes, ProjectActions } from '../types/actionTypes';
import data from '../data/data.json';

const initProjectProgressState: ProjectProgress = {
    totalBackers: 5007,
    totalRaised: 89914,
    goal: 100000,
    projects: data,
};

const ONE_BACKER = 1;

const projectProgressReducer = (
    state: ProjectProgress,
    action: ProjectActions,
) => {
    switch (action.type) {
        case ActionTypes.BASIC_PLEDGE: {
            return {
                ...state,
                totalBackers: state.totalBackers + ONE_BACKER,
            };
        }

        case ActionTypes.REWARD_PLEDGE: {
            const updatedProjectsList = state.projects.map((project) => {
                if (project.id === action.payload.id && project.remaining) {
                    const isNegativeValue =
                        project.remaining -
                            action.payload.reduceRemainingByOne <
                        0;

                    return {
                        ...project,
                        remaining: isNegativeValue
                            ? 0
                            : project.remaining -
                              action.payload.reduceRemainingByOne,
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
