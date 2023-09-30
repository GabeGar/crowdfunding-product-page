import { usePledge } from '../contexts/PledgeContext.jsx';
import { useProjectSelection } from '../contexts/ProjectSelectionContext.jsx';
import Checkmark from './UI/Checkmark.jsx';
import SecondaryBtn from './UI/SecondaryBtn.jsx';

const PledgeConfirmation = () => {
    const { setSelectionMenuIsVisible } = useProjectSelection();
    const { setPledgeSuccessful } = usePledge();

    return (
        <div className="flex flex-col items-center py-3 gap-7 text-center">
            <Checkmark />
            <h2 className="text-neutral-black text-xl font-bold">
                Thanks for your support!
            </h2>
            <p className="font-medium">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is complete.
            </p>
            <SecondaryBtn
                classes={`px-8 py-3 rounded-[2rem] text-white font-bold bg-primary-moderate-cyan`}
                onClick={() => {
                    setSelectionMenuIsVisible(false);
                    setPledgeSuccessful(false);
                }}
            >
                Got it!
            </SecondaryBtn>
        </div>
    );
};

export default PledgeConfirmation;
