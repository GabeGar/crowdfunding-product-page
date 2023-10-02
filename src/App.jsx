import { AnimatePresence } from 'framer-motion';
import { useMobileMenu } from './contexts/MobileMenuContext';
import { useProjectSelection } from './contexts/ProjectSelectionContext';

import MobileMenuOverlay from './components/MobileMenuOverlay';
import ProjectSelectionOverlay from './components/ProjectSelectionModal';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {
    const { mobileMenuVisible } = useMobileMenu();
    const { selectionMenuIsVisible } = useProjectSelection();

    return (
        <>
            <AnimatePresence>
                {mobileMenuVisible && <MobileMenuOverlay />}
                {selectionMenuIsVisible && <ProjectSelectionOverlay />}
            </AnimatePresence>

            <div className=" sm:bg-hero-desktop bg-neutral-dark-gray/5 bg-no-repeat bg-top bg-[100%,auto]">
                <div className="min-h-screen mx-auto">
                    <div className="min-h-[42dvh] sm:bg-none bg-hero-mobile bg-[100%,auto] bg-no-repeat bg-top px-6 py-8">
                        <Header />

                        <div className="sm:max-w-[45rem] mx-auto">
                            <MainContent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
