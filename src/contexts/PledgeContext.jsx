import { createContext, useContext, useState } from 'react';

const PledgeContext = createContext({
    pledgeSuccessful: false,
    setPledgeSuccessful: () => {},
});

const PledgeContextProvider = ({ children }) => {
    const [pledgeSuccessful, setPledgeSuccessful] = useState(false);

    return (
        <PledgeContext.Provider
            value={{
                pledgeSuccessful,
                setPledgeSuccessful,
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
