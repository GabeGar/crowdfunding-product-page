import { createContext, useContext, useEffect, useState } from 'react';
import { ReactChildrenNode } from '../types/reactChildNode';

interface MobileContext {
    mobileMenuVisible: boolean;
    setMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuContext = createContext<MobileContext>({
    mobileMenuVisible: false,
    setMobileMenuVisible: () => false,
});

const MobileMenuProvider = ({ children }: ReactChildrenNode) => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setMobileMenuVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
    return useContext(MobileMenuContext);
};

export default MobileMenuProvider;
export { useMobileMenu };
