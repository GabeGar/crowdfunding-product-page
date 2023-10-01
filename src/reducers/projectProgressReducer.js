const initProjectProgressState = {
    totalBackers: 5007,
    totalRaised: 89914,
    goal: 100000,
};

const projectProgressReducer = (state, action) => {
    switch (action.type) {
        case 'project/no-reward':
            return {
                ...state,
                totalBackers: state.totalBackers + 1,
            };

        case 'project/reward':
            return {
                ...state,
                totalBackers: state.totalBackers + 1,
                totalRaised: state.totalRaised + action.payload,
            };

        default:
            throw new Error('Unknown action encountered');
    }
};

export default projectProgressReducer;
export { initProjectProgressState };
