import { useState } from 'react';
import { usePledge } from '../contexts/PledgeContext';
import { useProjectSelection } from '../contexts/ProjectSelectionContext';

import PrimaryBtn from './UI/PrimaryBtn';
import SecondaryBtn from './UI/SecondaryBtn';
import RadioBtn from './UI/RadioBtn';
import PledgeForm from './PledgeForm';

const ProjectOption = ({
    id,
    name,
    price,
    description,
    remaining,
    showRadio,
}) => {
    const [currentAmount, setCurrentAmount] = useState(price);
    const { selectedID, setSelectedID, selectionMenuIsVisible } =
        useProjectSelection();
    const { dispatch, setPledgeSuccessful } = usePledge();

    const isChecked = selectedID === id;
    const outOfStock = remaining === 0 ? true : false;
    const currentMenuSelection =
        selectionMenuIsVisible && isChecked && showRadio && !outOfStock;
    const isBasicPledge = selectionMenuIsVisible && !price && !remaining;

    const handlePledgeSubmission = () => {
        dispatch({
            type: 'project/no-reward',
        });

        setPledgeSuccessful(true);
    };

    return (
        <section
            className={`flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid ${
                currentMenuSelection
                    ? `border-primary-moderate-cyan border-2`
                    : !outOfStock
                    ? `border-neutral-dark-gray/30`
                    : `border-neutral-dark-gray/10`
            }`}
            onClick={() => {
                if (outOfStock || !selectionMenuIsVisible) return;
                setSelectedID(id);
            }}
        >
            <div className="flex gap-4">
                {showRadio && (
                    <RadioBtn currentMenuSelection={currentMenuSelection} />
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
                        } ${
                            selectionMenuIsVisible ? `text-2xl` : `text-4xl`
                        } font-bold `}
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
            {currentMenuSelection && (
                <div className="flex flex-col items-center pt-6 gap-5 border-t-2">
                    {!isBasicPledge && <p>Enter your pledge</p>}
                    <div className="relative">
                        {!isBasicPledge && (
                            <PledgeForm
                                price={price}
                                currentAmount={currentAmount}
                                setCurrentAmount={setCurrentAmount}
                            />
                        )}
                        {isBasicPledge && (
                            <SecondaryBtn
                                classes={`px-8 py-3 rounded-[2rem] text-white font-bold self-start bg-primary-moderate-cyan`}
                                onClick={handlePledgeSubmission}
                            >
                                Continue
                            </SecondaryBtn>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectOption;
