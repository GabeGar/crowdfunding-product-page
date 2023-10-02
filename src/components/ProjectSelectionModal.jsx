import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion as m } from 'framer-motion';
import { useProjectSelection } from '../contexts/ProjectSelectionContext';
import { usePledge } from '../contexts/PledgeContext';

import Overlay from './UI/Overlay';
import SecondaryBtn from './UI/SecondaryBtn';
import PledgeConfirmation from './PledgeConfirmation';
import ProjectOptionsList from './ProjectOptionsList';
import CloseModal from './UI/CloseModal';

const ProjectSelectionModal = () => {
    const { pledgeSuccessful } = usePledge();
    const { setSelectedID, setSelectionMenuIsVisible } = useProjectSelection();

    const handleExitModal = () => {
        setSelectionMenuIsVisible(false);
        setSelectedID(null);
    };

    useEffect(() => {
        const html = document.querySelector('html');
        html.style.overflow = 'hidden';

        return () => {
            html.style = null;
        };
    }, []);

    return (
        <Overlay>
            <m.div
                key={'modal'}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className={`${
                    pledgeSuccessful ? `sm:max-w-[32rem]` : `sm:max-w-[45rem]`
                } mx-auto sm:p-8 flex flex-col gap-4 mt-[5.5rem] bg-white rounded-lg p-6 text-neutral-dark-gray`}
            >
                {!pledgeSuccessful && (
                    <>
                        <div className="flex justify-between">
                            <h2 className="text-lg text-neutral-black font-bold">
                                Back This Project
                            </h2>
                            <SecondaryBtn
                                classes="group"
                                onClick={handleExitModal}
                            >
                                <CloseModal pathClasses="transition group-hover:opacity-100" />
                            </SecondaryBtn>
                        </div>
                        <p>
                            Want to support us in bringing Mastercraft Bamboo
                            Monitor Riser out in the world?
                        </p>
                        <ProjectOptionsList showRadio={true} />
                    </>
                )}
                {pledgeSuccessful && <PledgeConfirmation />}
            </m.div>
        </Overlay>
    );
};

const ProjectSelectionOverlay = () => {
    return createPortal(
        <ProjectSelectionModal />,
        document.querySelector('#overlay--root'),
    );
};

export default ProjectSelectionOverlay;
