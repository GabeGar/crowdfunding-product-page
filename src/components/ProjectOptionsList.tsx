import { useProjects } from '../contexts/ProjectContext.js';

import ProjectOption from './ProjectOption';

interface ProjectOptionsListProps {
    showRadio?: boolean;
    filterById?: number | null;
}

const ProjectOptionsList = ({
    showRadio = false,
    filterById = null,
}: ProjectOptionsListProps) => {
    const { projectProgress } = useProjects();
    const { projects } = projectProgress;

    return projects
        .filter((el) => el.id !== filterById)
        .map((item) => {
            return (
                <ProjectOption
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    remaining={item.remaining}
                    showRadio={showRadio}
                />
            );
        });
};

export default ProjectOptionsList;
