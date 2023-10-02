import { createContext, useContext, useEffect, useState } from 'react';

const MobileMenuContext = createContext({
    mobileMenuVisible: false,
    setMobileMenuVisible: () => {},
});

const MobileMenuProvider = ({ children }) => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setMobileMenuVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
