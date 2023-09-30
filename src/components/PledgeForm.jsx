import { usePledge } from '../contexts/PledgeContext';
import SecondaryBtn from './UI/SecondaryBtn';

const MAX_AMOUNT = 9999;

const PledgeForm = ({ price, currentAmount, setCurrentAmount }) => {
    const { setProjectProgress, setPledgeSuccessful } = usePledge();

    const handlePledgeSubmissionForm = (e) => {
        e.preventDefault();

        if (!currentAmount) return;

        setProjectProgress((currentProgress) => {
            const { totalBackers, totalRaised } = currentProgress;

            return {
                ...currentProgress,
                totalBackers: totalBackers + 1,
                totalRaised: totalRaised + currentAmount,
            };
        });

        setPledgeSuccessful(true);
    };

    return (
        <form
            className="flex gap-2"
            action=""
            onSubmit={handlePledgeSubmissionForm}
        >
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
                max={MAX_AMOUNT}
                value={currentAmount ? currentAmount : ''}
                onChange={(e) => setCurrentAmount(Number(e.target.value))}
            />
            <SecondaryBtn
                classes={`px-8 py-3 rounded-[2rem] text-white font-bold bg-primary-moderate-cyan`}
            >
                Continue
            </SecondaryBtn>
        </form>
    );
};

export default PledgeForm;
