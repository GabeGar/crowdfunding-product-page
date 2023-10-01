import { createContext, useContext, useReducer, useState } from 'react';
import projectProgressReducer, {
    initProjectProgressState,
} from '../reducers/projectProgressReducer';

const PledgeContext = createContext({
    pledgeSuccessful: false,
    setPledgeSuccessful: () => {},
    projectProgress: {
        totalBackers: 5007,
        totalRaised: 89914,
        goal: 100000,
    },
    dispatch: () => {},
});

const PledgeContextProvider = ({ children }) => {
    const [projectProgress, dispatch] = useReducer(
        projectProgressReducer,
        initProjectProgressState,
    );
    const [pledgeSuccessful, setPledgeSuccessful] = useState(false);

    return (
        <PledgeContext.Provider
            value={{
                pledgeSuccessful,
                setPledgeSuccessful,
                projectProgress,
                dispatch,
            }}
        >
            {children}
        </PledgeContext.Provider>
    );
};

const usePledge = () => {
    const ctx = useContext(PledgeContext);

    if (ctx === undefined) {
        throw new Error(
            'Pledge context was used outside of the pledge context provider',
        );
    }

    return ctx;
};

export default PledgeContextProvider;
export { usePledge };
