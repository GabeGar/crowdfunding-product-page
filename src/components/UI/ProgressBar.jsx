const ProgressBar = ({ currentValue }) => {
    return (
        <progress
            className="max-w-[31.5rem] w-full h-[.85rem] [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl [&::-webkit-progress-bar]:bg-neutral-dark-gray/5 [&::-webkit-progress-value]:bg-primary-moderate-cyan"
            value={currentValue}
            max={100}
        ></progress>
    );
};

export default ProgressBar;
