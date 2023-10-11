import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { useProjects } from '../contexts/ProjectContext';
import { useProjectSelection } from '../contexts/ProjectSelectionContext';
import { Project } from '../models/projectTypes';

import PrimaryBtn from './UI/PrimaryBtn';
import SecondaryBtn from './UI/SecondaryBtn';
import RadioBtn from './UI/RadioBtn';
import PledgeForm from './PledgeForm';
import ProjectOptionRemainder from './ProjectOptionRemainder';

type ProjectOptionProps = Project & {
    showRadio: boolean;
};

const ProjectOption = ({
    id,
    name,
    price,
    description,
    remaining,
    showRadio,
}: ProjectOptionProps) => {
    const [currentAmount, setCurrentAmount] = useState(price);
    const { isMobile, selectedID, setSelectedID, selectionMenuIsVisible } =
        useProjectSelection();
    const { dispatch, setPledgeSuccessful } = useProjects();

    const isChecked = selectedID === id;
    const outOfStock = remaining === 0 ? true : false;
    const currentInStockMenuSelection =
        selectionMenuIsVisible && isChecked && showRadio && !outOfStock;

    const isBasicPledge = !price && !remaining;
    const isOnHomePageDesktop = !selectionMenuIsVisible && !isMobile;
    const isInModalMenuDesktop = selectionMenuIsVisible && !isMobile;

    const handleBasicPledgeSubmission = () => {
        if (selectedID !== 0) return;

        dispatch({
            type: 'project/no-reward',
        });

        setPledgeSuccessful(true);
    };

    return (
        <section
            className={`group flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid ${
                currentInStockMenuSelection
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
                        id={id}
                        currentInStockMenuSelection={
                            currentInStockMenuSelection
                        }
                        outOfStock={outOfStock}
                    />
                )}
                {(isInModalMenuDesktop || isOnHomePageDesktop) && (
                    <span
                        className={`transition-colors ${
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
                            className={`transition-colors ${
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
            {currentInStockMenuSelection && (
                <div
                    className={`sm:flex-row sm:justify-between flex flex-col items-center pt-6 gap-5 border-t-2`}
                >
                    {!isBasicPledge && (
                        <p className={`${isInModalMenuDesktop && 'w-full'}`}>
                            Enter your pledge
                        </p>
                    )}

                    <m.div
                        transition={{
                            duration: 0.2,
                            ease: 'easeOut',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative sm:w-full flex justify-end"
                    >
                        {!isBasicPledge && (
                            <PledgeForm
                                isMobile={isMobile}
                                price={price}
                                currentAmount={currentAmount}
                                setCurrentAmount={setCurrentAmount}
                                selectedId={selectedID}
                            />
                        )}
                        {isBasicPledge && (
                            <SecondaryBtn
                                classes={`transition hover:bg-primary-dark-cyan px-8 py-3 rounded-[2rem] text-white font-bold bg-primary-moderate-cyan`}
                                onClick={handleBasicPledgeSubmission}
                            >
                                Continue
                            </SecondaryBtn>
                        )}
                    </m.div>
                </div>
            )}
        </section>
    );
};

export default ProjectOption;
