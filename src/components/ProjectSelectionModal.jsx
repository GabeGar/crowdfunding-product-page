import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useProjectSelection } from '../contexts/ProjectSelectionContext';
import { usePledge } from '../contexts/PledgeContext';

import closeModal from '../assets/images/icon-close-modal.svg';
import Overlay from './UI/Overlay';
import SecondaryBtn from './UI/SecondaryBtn';
import PledgeConfirmation from './PledgeConfirmation';
import ProjectOptionsList from './ProjectOptionsList';

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
            <div className="flex flex-col gap-4 my-[5.5rem] bg-white rounded-lg p-6 text-neutral-dark-gray">
                {!pledgeSuccessful && (
                    <>
                        <div className="flex justify-between">
                            <h2 className=" text-lg text-neutral-black font-bold">
                                Back This Project
                            </h2>
                            <SecondaryBtn onClick={handleExitModal}>
                                <img
                                    src={closeModal}
                                    alt="exit selection menu"
                                />
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
            </div>
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
