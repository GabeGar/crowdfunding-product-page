import { createContext, useContext, useState } from 'react';

const MobileMenuContext = createContext({
    mobileMenuVisible: false,
    setMobileMenuVisible: () => {},
});

const MobileMenuProvider = ({ children }) => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    return (
        <MobileMenuContext.Provider
            value={{
                mobileMenuVisible,
                setMobileMenuVisible,
            }}
        >
            {children}
        </MobileMenuContext.Provider>
    );
};

const useMobileMenu = () => {
    const ctx = useContext(MobileMenuContext);

    if (ctx === undefined) {
        throw new Error(
            'Mobile menu context was used outside the MobileMenuProvider.',
        );
    }

    return ctx;
};

export default MobileMenuProvider;
export { useMobileMenu };
