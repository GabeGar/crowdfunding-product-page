import PrimaryBtn from './UI/PrimaryBtn';

const PledgeForm = ({ currentPledge, setCurrentPledge, price }) => {
    return (
        <form
            className="flex gap-2"
            action=""
            onSubmit={(e) => {
                e.preventDefault();
            }}
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
                max={999}
                value={currentPledge ? currentPledge : price}
                onChange={(e) => setCurrentPledge(e.target.value)}
            />
            <PrimaryBtn>Continue</PrimaryBtn>
        </form>
    );
};

export default PledgeForm;
