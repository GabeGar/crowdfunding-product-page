import { FormEvent } from 'react';
import { useProjects } from '../contexts/ProjectContext';
import { ActionTypes } from '../types/actionTypes';

import SecondaryBtn from './UI/SecondaryBtn';

const MAX_AMOUNT = 9999;

interface PledgeFormProps {
    isMobile: boolean;
    price: number | undefined;
    selectedId: number;
    currentAmount: number | undefined;
    setCurrentAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const PledgeForm = ({
    isMobile,
    price,
    selectedId,
    currentAmount,
    setCurrentAmount,
}: PledgeFormProps) => {
    const { dispatch, setPledgeSuccessful } = useProjects();

    const handlePledgeSubmission = () => {
        if (!currentAmount) return;

        const progressUpdateObj = {
            currentAmount,
            reduceRemainingByOne: 1,
            id: selectedId,
        };

        dispatch({
            type: ActionTypes.REWARD_PLEDGE,
            payload: progressUpdateObj,
        });

        setPledgeSuccessful(true);
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        handlePledgeSubmission();
    };

    return (
        <form className="flex gap-2" action="" onSubmit={handleFormSubmit}>
            <label
                className="flex items-center absolute h-full ml-4 text-neutral-dark-gray/50 font-bold"
                htmlFor="pledge"
            >
                $
            </label>
            <input
                className="text-neutral-black font-bold text-center border w-full min-h-full rounded-full outline-primary-moderate-cyan px-6"
                type="number"
                id="pledge"
                min={price}
                autoFocus={!isMobile}
                max={MAX_AMOUNT}
                value={currentAmount ? currentAmount : ''}
                onChange={(e) => {
                    setCurrentAmount(Number(e.target.value));
                }}
            />
            <SecondaryBtn
                classes={`transition-colors  hover:bg-primary-dark-cyan px-8 py-3 rounded-[2rem] text-white font-bold bg-primary-moderate-cyan`}
            >
                Continue
            </SecondaryBtn>
        </form>
    );
};

export default PledgeForm;
