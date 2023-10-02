import { useState } from 'react';
import { usePledge } from '../contexts/PledgeContext';
import { useProjectSelection } from '../contexts/ProjectSelectionContext';

import PrimaryBtn from './UI/PrimaryBtn';
import SecondaryBtn from './UI/SecondaryBtn';
import RadioBtn from './UI/RadioBtn';
import PledgeForm from './PledgeForm';
import ProjectOptionRemainder from './ProjectOptionRemainder';

const ProjectOption = ({
    id,
    name,
    price,
    description,
    remaining,
    showRadio,
}) => {
    const [currentAmount, setCurrentAmount] = useState(price);
    const { isMobile, selectedID, setSelectedID, selectionMenuIsVisible } =
        useProjectSelection();
    const { dispatch, setPledgeSuccessful } = usePledge();

    const isChecked = selectedID === id;
    const outOfStock = remaining === 0 ? true : false;
    const currentMenuSelection =
        selectionMenuIsVisible && isChecked && showRadio && !outOfStock;

    const isBasicPledge = !price && !remaining;
    const isOnHomePageDesktop = !selectionMenuIsVisible && !isMobile;
    const isInModalMenuDesktop = selectionMenuIsVisible && !isMobile;

    const handlePledgeSubmission = () => {
        dispatch({
            type: 'project/no-reward',
        });

        setPledgeSuccessful(true);
    };

    return (
        <section
            className={`group flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid ${
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
                    <RadioBtn
                        currentMenuSelection={currentMenuSelection}
                        outOfStock={outOfStock}
                    />
                )}
                {(isInModalMenuDesktop || isOnHomePageDesktop) && (
                    <span
                        className={`${
                            (selectionMenuIsVisible &&
                                !outOfStock &&
                                `group-hover:text-primary-moderate-cyan`) ||
                            ''
                        } ${
                            outOfStock && 'text-neutral-dark-gray'
                        } sm:w-full text-neutral-black font-bold`}
                    >
                        {name}
                    </span>
                )}
                <h3
                    className={`sm:w-full flex flex-col gap-1 ${
                        !outOfStock
                            ? `text-neutral-black`
                            : `text-neutral-black/50`
                    }`}
                >
                    {isMobile && (
                        <span
                            className={`${
                                selectionMenuIsVisible &&
                                !outOfStock &&
                                `group-hover:text-primary-moderate-cyan`
                            } font-bold`}
                        >
                            {name}
                        </span>
                    )}

                    {!isBasicPledge && (
                        <span
                            className={`${
                                !outOfStock
                                    ? `text-primary-moderate-cyan`
                                    : `text-primary-moderate-cyan/50`
                            } sm:self-end font-medium`}
                        >
                            Pledge ${price} or more
                        </span>
                    )}
                </h3>
            </div>
            <p className={`${!outOfStock ? `` : `text-neutral-dark-gray/50`}`}>
                {description}
            </p>
            <div className="sm:flex-row sm:justify-between flex flex-col gap-4">
                {!isBasicPledge && (
                    <ProjectOptionRemainder
                        isBasicPledge={isBasicPledge}
                        selectionMenuIsVisible={selectionMenuIsVisible}
                        outOfStock={outOfStock}
                        remaining={remaining}
                    />
                )}
                {!selectionMenuIsVisible && (
                    <PrimaryBtn isDisabled={outOfStock}>
                        {!outOfStock ? `Select Reward` : `Out of Stock`}
                    </PrimaryBtn>
                )}
            </div>
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
