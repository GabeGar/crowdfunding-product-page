import { useProjectSelection } from '../../contexts/ProjectSelectionContext';

interface PrimaryBtn {
    isDisabled: boolean;
    children: React.ReactNode;
}

const PrimaryBtn = ({ isDisabled, children }: PrimaryBtn) => {
    const { setSelectionMenuIsVisible } = useProjectSelection();
    const isBookMarkSibling = children === 'Back this project';

    return (
        <button
            className={`${
                isBookMarkSibling ? `px-11 py-4` : `px-8 py-3`
            } rounded-[2rem] text-white font-bold self-start ${
                !isDisabled
                    ? `bg-primary-moderate-cyan hover:bg-primary-dark-cyan transition-colors`
                    : `bg-neutral-dark-gray/50`
            }`}
            disabled={isDisabled}
            onClick={() => {
                setSelectionMenuIsVisible(true);
            }}
        >
            {children}
        </button>
    );
};

export default PrimaryBtn;
