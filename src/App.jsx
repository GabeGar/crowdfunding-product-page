import { useMobileMenu } from './contexts/MobileMenuContext';
import { useProjectSelection } from './contexts/ProjectSelectionContext';
import { usePledge } from './contexts/PledgeContext';
import { insertCommasInNumber } from './utilities/insertCommasInNumber';

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
import NavLink from './components/UI/NavLink';

const App = () => {
    const { mobileMenuVisible } = useMobileMenu();
    const { selectionMenuIsVisible } = useProjectSelection();
    const { projectProgress } = usePledge();
    const { totalBackers, totalRaised, goal } = projectProgress;

    const totalRaisedStr = insertCommasInNumber(totalRaised);
    const totalBackersStr = insertCommasInNumber(totalBackers);

    return (
        <>
            {mobileMenuVisible && <MobileMenuOverlay />}
            {selectionMenuIsVisible && <ProjectSelectionOverlay />}

            <div className=" sm:bg-hero-desktop bg-neutral-dark-gray/5 bg-no-repeat bg-top bg-[100%,auto]">
                <div className="min-h-screen mx-auto">
                    <div className="min-h-[42dvh] sm:bg-none bg-hero-mobile bg-[100%,auto] bg-no-repeat bg-top px-6 py-8">
                        <header className="flex justify-between sm:max-w-[80dvw] sm:mx-auto">
                            <Logo />
                            <nav>
                                {!mobileMenuVisible && <HamburgerMenu />}
                                <ul className="flex gap-10 msm:hidden text-white font-medium">
                                    <li>
                                        <NavLink href={'About page'}>
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href={'Discover Page'}>
                                            Discover
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href={'Get Started Page'}>
                                            Get Started
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        <div className="sm:max-w-[50rem] mx-auto">
                            <main className="flex flex-col gap-7 2xl:mt-[30dvh] xl:mt-[21dvh] lg:mt-[12dvh] md:mt-[10dvh] sm:mt-[8dvh] xsm:mt-[8rem] mt-[11.65rem]">
                                <section className="relative flex flex-col justify-center items-center bg-white rounded-lg px-6 border border-solid border-neutral-dark-gray/10">
                                    <MastercraftLogo />
                                    <div className="flex flex-col gap-6 pt-16 pb-10 text-center">
                                        <h1 className="text-[1.4rem] leading-7 font-bold">
                                            Mastercraft Bamboo Monitor Riser
                                        </h1>
                                        <p className="text-neutral-dark-gray">
                                            A beautifully handcrafted monitor
                                            stand to reduce neck and eye strain.
                                        </p>
                                        <div className="flex justify-between gap-1">
                                            <PrimaryBtn>
                                                Back this project
                                            </PrimaryBtn>
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
                                            {totalBackersStr}
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
                </div>
            </div>
        </>
    );
};

export default App;
