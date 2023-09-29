import { useProjectSelection } from '../contexts/ProjectSelectionContext';
import PrimaryBtn from './UI/PrimaryBtn';

const ProjectOption = ({
    id,
    name,
    price,
    description,
    remaining,
    showRadio,
}) => {
    const { selectedID, setSelectedID, selectionMenuIsVisible } =
        useProjectSelection();

    const checked = selectedID === id;
    const outOfStock = remaining === 0 ? true : false;
    const isBasicPledge = selectionMenuIsVisible && !price && !remaining;

    return (
        <section
            className={`flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid ${
                !outOfStock
                    ? `border-neutral-dark-gray/30`
                    : `border-neutral-dark-gray/10`
            }`}
            onClick={() => {
                if (outOfStock) return;
                setSelectedID(id);
            }}
        >
            <div className="flex gap-4">
                {showRadio && (
                    <input
                        className="w-[10%]"
                        type="radio"
                        id={id}
                        name="projectOption"
                        onChange={() => setSelectedID(id)}
                        checked={checked}
                        disabled={outOfStock ?? false}
                    />
                )}
                <h3
                    className={`flex flex-col gap-1 ${
                        !outOfStock
                            ? `text-neutral-black`
                            : `text-neutral-black/50`
                    }`}
                >
                    <span className="font-bold">{name}</span>
                    {!isBasicPledge && (
                        <span
                            className={`${
                                !outOfStock
                                    ? `text-primary-moderate-cyan`
                                    : `text-primary-moderate-cyan/50`
                            } font-medium`}
                        >
                            Pledge ${price} or more
                        </span>
                    )}
                </h3>
            </div>
            <p className={`${!outOfStock ? `` : `text-neutral-dark-gray/50`}`}>
                {description}
            </p>
            {!isBasicPledge && (
                <p className="flex items-center gap-2">
                    <span
                        className={`${
                            !outOfStock
                                ? `text-neutral-black`
                                : `text-neutral-black/50`
                        } text-4xl font-bold `}
                    >
                        {remaining}
                    </span>
                    <span>left</span>
                </p>
            )}
            {!selectionMenuIsVisible && (
                <PrimaryBtn isDisabled={outOfStock}>
                    {!outOfStock ? `Select Reward` : `Out of Stock`}
                </PrimaryBtn>
            )}
        </section>
    );
};

export default ProjectOption;
