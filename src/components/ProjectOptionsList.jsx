import { useProjects } from '../contexts/ProjectContext.jsx';

import ProjectOption from './ProjectOption';

const ProjectOptionsList = ({ showRadio = false, filterById = null }) => {
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
