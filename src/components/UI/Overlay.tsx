import { useMobileMenu } from '../../contexts/MobileMenuContext';
import { useProjects } from '../../contexts/ProjectContext';
import { useProjectSelection } from '../../contexts/ProjectSelectionContext';
import { ReactChildrenNode } from '../../models/ReactChildNode';

const Overlay = ({ children }: ReactChildrenNode) => {
    const { mobileMenuVisible, setMobileMenuVisible } = useMobileMenu();
    const { pledgeSuccessful, setPledgeSuccessful } = useProjects();
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
