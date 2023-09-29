import { useProjectSelection } from '../../contexts/ProjectSelectionContext';

const PrimaryBtn = ({ isDisabled, children }) => {
    const { setSelectionMenuIsVisible } = useProjectSelection();
    const isBookMarkSibling = children === 'Back this project';

    return (
        <button
            className={`${
                isBookMarkSibling ? `px-11 py-4` : `px-8 py-3`
            } rounded-[2rem] text-white font-bold self-start ${
                !isDisabled
                    ? `bg-primary-moderate-cyan`
                    : `bg-neutral-dark-gray/50`
            }`}
            disabled={isDisabled ?? false}
            onClick={() => setSelectionMenuIsVisible(true)}
        >
            {children}
        </button>
    );
};

export default PrimaryBtn;
