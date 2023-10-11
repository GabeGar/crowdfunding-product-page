interface ProjectOptionRemainderProps {
    outOfStock: boolean;
    remaining: number | undefined;
    isBasicPledge: boolean;
    selectionMenuIsVisible: boolean;
}

const ProjectOptionRemainder = ({
    outOfStock,
    remaining,
    isBasicPledge,
    selectionMenuIsVisible,
}: ProjectOptionRemainderProps) => {
    return (
        <p
            className={`${
                isBasicPledge ? 'hidden' : ''
            } flex items-center gap-2`}
        >
            <span
                className={`${
                    !outOfStock ? `text-neutral-black` : `text-neutral-black/50`
                } ${
                    selectionMenuIsVisible ? `text-2xl` : `text-4xl`
                } font-bold `}
            >
                {remaining}
            </span>
            <span>left</span>
        </p>
    );
};

export default ProjectOptionRemainder;
