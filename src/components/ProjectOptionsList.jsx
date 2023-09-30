import data from '../data/data.json';

import ProjectOption from './ProjectOption';

const ProjectOptionsList = ({ showRadio = false, filterById = null }) => {
    return data
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
