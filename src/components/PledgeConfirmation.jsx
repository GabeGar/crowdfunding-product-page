import { motion as m } from 'framer-motion';
import { useProjects } from '../contexts/ProjectContext.jsx';
import { useProjectSelection } from '../contexts/ProjectSelectionContext.jsx';
import Checkmark from './UI/Checkmark.jsx';
import SecondaryBtn from './UI/SecondaryBtn.jsx';

const PledgeConfirmation = () => {
    const { setSelectionMenuIsVisible, setSelectedID } = useProjectSelection();
    const { setPledgeSuccessful } = useProjects();

    return (
        <m.div
            key={'confirmation'}
            transition={{ duration: 0.2, ease: 'easeIn' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-3 gap-7 text-center"
        >
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
                classes={`transition hover:bg-primary-dark-cyan px-8 py-3 rounded-[2rem] text-white font-bold bg-primary-moderate-cyan`}
                onClick={() => {
                    setSelectedID(null);
                    setSelectionMenuIsVisible(false);
                    setPledgeSuccessful(false);
                }}
            >
                Got it!
            </SecondaryBtn>
        </m.div>
    );
};

export default PledgeConfirmation;
