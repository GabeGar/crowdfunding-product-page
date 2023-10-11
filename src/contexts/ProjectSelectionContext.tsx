import { createContext, useContext, useEffect, useState } from 'react';
import { ReactChildrenNode } from '../models/ReactChildNode';

interface ProjectSelectionContext {
    selectionMenuIsVisible: boolean;
    setSelectionMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    selectedID: number | null;
    setSelectedID: React.Dispatch<React.SetStateAction<number | null>>;
    isMobile: boolean;
}

const ProjectSelectionContext = createContext<ProjectSelectionContext>({
    selectionMenuIsVisible: false,
    setSelectionMenuIsVisible: () => {},
    selectedID: null,
    setSelectedID: () => {},
    isMobile: false,
});

const ProjectSelectionContextProvider = ({ children }: ReactChildrenNode) => {
    const [selectionMenuIsVisible, setSelectionMenuIsVisible] = useState(false);
    const [selectedID, setSelectedID] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
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
