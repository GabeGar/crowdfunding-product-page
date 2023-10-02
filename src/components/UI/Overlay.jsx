import { useMobileMenu } from '../../contexts/MobileMenuContext';
import { usePledge } from '../../contexts/PledgeContext';
import { useProjectSelection } from '../../contexts/ProjectSelectionContext';

const Overlay = ({ children }) => {
    const { mobileMenuVisible, setMobileMenuVisible } = useMobileMenu();
    const { pledgeSuccessful, setPledgeSuccessful } = usePledge();
    const { setSelectedID, setSelectionMenuIsVisible } = useProjectSelection();

    const handleOverlay = () => {
        if (mobileMenuVisible) {
            setMobileMenuVisible(false);
        }

        if (pledgeSuccessful) {
            setSelectedID(null);
            setSelectionMenuIsVisible(false);
            setPledgeSuccessful(false);
        }
    };

    return (
        <div
            className={`fixed ${
                pledgeSuccessful ? `flex items-center max-h-full` : ``
            } overflow-y-scroll inset-0 min-h-screen w-full mx-auto z-10 px-6 py-8 bg-neutral-black/50`}
            onClick={handleOverlay}
        >
            {children}
        </div>
    );
};

export default Overlay;
