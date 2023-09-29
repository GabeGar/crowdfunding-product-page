const PrimaryBtn = ({ onClick, isDisabled, children }) => {
    return (
        <button
            className={`px-8 py-3 rounded-[2rem] ${
                !isDisabled
                    ? `bg-primary-moderate-cyan`
                    : `bg-neutral-dark-gray/50`
            } text-white font-bold self-start`}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default PrimaryBtn;
