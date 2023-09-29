import PrimaryBtn from './UI/PrimaryBtn';

const ProjectOption = ({ name, price, description, remaining }) => {
    const outOfStock = remaining === 0 ? true : false;

    return (
        <section
            className={`flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid ${
                !outOfStock
                    ? `border-neutral-dark-gray/30`
                    : `border-neutral-dark-gray/10`
            }`}
        >
            <h3
                className={`flex flex-col gap-1 ${
                    !outOfStock ? `text-neutral-black` : `text-neutral-black/50`
                }`}
            >
                <span className="font-bold">{name}</span>
                <span
                    className={`${
                        !outOfStock
                            ? `text-primary-moderate-cyan`
                            : `text-primary-moderate-cyan/50`
                    } font-medium`}
                >
                    Pledge ${price} or more
                </span>
            </h3>
            <p className={`${!outOfStock ? `` : `text-neutral-dark-gray/50`}`}>
                {description}
            </p>
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
            <PrimaryBtn isDisabled={outOfStock}>
                {!outOfStock ? `Select Reward` : `Out of Stock`}
            </PrimaryBtn>
        </section>
    );
};

export default ProjectOption;
