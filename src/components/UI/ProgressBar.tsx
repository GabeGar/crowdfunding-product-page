import { useProjects } from '../../contexts/ProjectContext';

const ProgressBar = () => {
    const { projectProgress } = useProjects();
    const { totalRaised, goal } = projectProgress;

    return (
        <progress
            className="w-full h-[.85rem] [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl [&::-webkit-progress-bar]:bg-neutral-dark-gray/[.15] [&::-webkit-progress-value]:bg-primary-moderate-cyan"
            value={totalRaised}
            max={goal}
        ></progress>
    );
};

export default ProgressBar;
