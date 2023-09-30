import { createContext, useContext, useState } from 'react';

const PledgeContext = createContext({
    pledgeSuccessful: false,
    setPledgeSuccessful: () => {},
    projectProgress: {
        totalBackers: 5007,
        totalRaised: 89914,
        goal: 100000,
    },
    setProjectProgress: () => {},
});

const initialProgressState = {
    totalBackers: 5007,
    totalRaised: 89914,
    goal: 100000,
};

const PledgeContextProvider = ({ children }) => {
    const [projectProgress, setProjectProgress] =
        useState(initialProgressState);
    const [pledgeSuccessful, setPledgeSuccessful] = useState(false);

    return (
        <PledgeContext.Provider
            value={{
                pledgeSuccessful,
                setPledgeSuccessful,
                projectProgress,
                setProjectProgress,
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
