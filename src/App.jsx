import { useMobileMenu } from './contexts/MobileMenuContext';
import { useProjectSelection } from './contexts/ProjectSelectionContext';
import { usePledge } from './contexts/PledgeContext';
import { beautifyNumber } from './utilities/beautifyNumber';

import Logo from './components/UI/Logo';
import Bookmark from './components/UI/Bookmark';
import MastercraftLogo from './components/UI/MastercraftLogo';
import ProgressBar from './components/UI/ProgressBar';
import MobileMenuOverlay from './components/UI/MobileMenuOverlay';
import PrimaryBtn from './components/UI/PrimaryBtn';
import HamburgerMenu from './components/UI/HamburgerMenu';
import AboutProjectDescription from './components/AboutProjectDescription';
import ProjectSelectionOverlay from './components/ProjectSelectionModal';
import ProjectOptionsList from './components/ProjectOptionsList';

const App = () => {
    const { mobileMenuVisible } = useMobileMenu();
    const { selectionMenuIsVisible } = useProjectSelection();
    const { projectProgress } = usePledge();
    const { totalBackers, totalRaised, goal } = projectProgress;

    const totalRaisedStr = beautifyNumber(totalRaised);

    return (
        <>
            {mobileMenuVisible && <MobileMenuOverlay />}
            {selectionMenuIsVisible && <ProjectSelectionOverlay />}

            <div className="min-h-screen bg-neutral-dark-gray/5">
                <div className="min-h-[42dvh] bg-bg-hero-mobile bg-[100%,auto] bg-no-repeat bg-top px-6 py-8">
                    <header className="flex justify-between">
                        <Logo />
                        <nav className="relative">
                            {!mobileMenuVisible && <HamburgerMenu />}
                        </nav>
                    </header>

                    <main className="flex flex-col gap-7 mt-[11.65rem]">
                        <section className="relative flex flex-col justify-center items-center bg-white rounded-lg px-6 border border-solid border-neutral-dark-gray/10">
                            <MastercraftLogo />
                            <div className="flex flex-col gap-6 pt-16 pb-10 text-center">
                                <h1 className="text-[1.4rem] leading-7 font-bold">
                                    Mastercraft Bamboo Monitor Riser
                                </h1>
                                <p className="text-neutral-dark-gray">
                                    A beautifully handcrafted monitor stand to
                                    reduce neck and eye strain.
                                </p>
                                <div className="flex justify-between gap-1">
                                    <PrimaryBtn>Back this project</PrimaryBtn>
                                    <Bookmark />
                                </div>
                            </div>
                        </section>

                        <section className="flex flex-col items-center bg-white rounded-lg px-6 py-10 border border-solid border-neutral-dark-gray/10 text-center">
                            <article className="relative flex flex-col gap-3 pb-6">
                                <h2 className="text-4xl font-bold">
                                    ${totalRaisedStr}
                                </h2>
                                <p className="text-neutral-dark-gray">
                                    of $100,000 backed
                                </p>
                            </article>
                            <hr className="max-w-[6rem] w-[35%] self-center" />
                            <article className="flex flex-col gap-3 py-6">
                                <h2 className="text-4xl font-bold">
                                    {totalBackers}
                                </h2>
                                <p className="text-neutral-dark-gray">
                                    total backers
                                </p>
                            </article>
                            <hr className="max-w-[6rem] w-[35%] self-center" />
                            <article className="flex flex-col gap-3 py-6">
                                {totalRaised < goal && (
                                    <>
                                        <h2 className="text-4xl font-bold">
                                            56
                                        </h2>
                                        <p className="text-neutral-dark-gray">
                                            days left
                                        </p>
                                    </>
                                )}
                                {totalRaised >= goal && (
                                    <p className="flex flex-col gap-3 text-4xl font-bold text-neutral-black">
                                        <span>Goal Reached.</span>
                                        <span>Thank you all!</span>
                                    </p>
                                )}
                            </article>

                            <div className="w-full flex justify-center">
                                <ProgressBar />
                            </div>
                        </section>

                        <section className="flex flex-col gap-7 bg-white rounded-lg px-6 py-8 border border-solid border-neutral-dark-gray/10 text-neutral-dark-gray text-left">
                            <AboutProjectDescription />
                            <div className="flex flex-col gap-5">
                                <ProjectOptionsList filterById={0} />
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
};

export default App;
