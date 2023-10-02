import { createContext, useContext, useEffect, useState } from 'react';

const ProjectSelectionContext = createContext({
    selectionMenuIsVisible: false,
    setSelectionMenuIsVisible: () => {},
    isChecked: false,
    setIsChecked: true,
    isMobile: false,
});

const ProjectSelectionContextProvider = ({ children }) => {
    const [selectionMenuIsVisible, setSelectionMenuIsVisible] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

    useEffect(() => {
        const handleResize = (e) => {
            if (e.target.innerWidth >= 640) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.addEventListener('resize', handleResize);
    }, [setIsMobile]);

    return (
        <ProjectSelectionContext.Provider
            value={{
                selectionMenuIsVisible,
                setSelectionMenuIsVisible,
                selectedID,
                setSelectedID,
                isMobile,
            }}
        >
            {children}
        </ProjectSelectionContext.Provider>
    );
};

const useProjectSelection = () => {
    const ctx = useContext(ProjectSelectionContext);

    if (ctx === undefined) {
        throw new Error(
            'Project selection context was used outside of Project Selection Context provider',
        );
    }

    return ctx;
};

export default ProjectSelectionContextProvider;
export { useProjectSelection };
