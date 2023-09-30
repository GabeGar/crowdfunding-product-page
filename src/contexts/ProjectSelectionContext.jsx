import { createContext, useContext, useState } from 'react';

const ProjectSelectionContext = createContext({
    selectionMenuIsVisible: false,
    setSelectionMenuIsVisible: () => {},
    isChecked: false,
    setIsChecked: true,
});

const ProjectSelectionContextProvider = ({ children }) => {
    const [selectionMenuIsVisible, setSelectionMenuIsVisible] = useState(false);
    const [selectedID, setSelectedID] = useState(null);

    return (
        <ProjectSelectionContext.Provider
            value={{
                selectionMenuIsVisible,
                setSelectionMenuIsVisible,
                selectedID,
                setSelectedID,
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
