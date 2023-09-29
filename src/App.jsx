import { useMobileMenu } from './contexts/MobileMenuContext';

import Logo from './components/UI/Logo';
import Bookmark from './components/UI/Bookmark';
import MastercraftLogo from './components/UI/MastercraftLogo';
import ProgressBar from './components/UI/ProgressBar';
import MobileMenuOverlay from './components/UI/MobileMenuOverlay';
import ProjectOption from './components/ProjectOption';
import PrimaryBtn from './components/UI/PrimaryBtn';
import HamburgerMenu from './components/UI/HamburgerMenu';
import AboutProjectDescription from './components/AboutProjectDescription';

const App = () => {
    const { mobileMenuVisible } = useMobileMenu();

    return (
        <>
            {mobileMenuVisible && <MobileMenuOverlay />}

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
                                <h2 className="text-4xl font-bold">$89,914</h2>
                                <p className="text-neutral-dark-gray">
                                    of $100,000 backed
                                </p>
                            </article>
                            <hr className="max-w-[6rem] w-[35%] self-center" />
                            <article className="flex flex-col gap-3 py-6">
                                <h2 className="text-4xl font-bold">5,007</h2>
                                <p className="text-neutral-dark-gray">
                                    total backers
                                </p>
                            </article>
                            <hr className="max-w-[6rem] w-[35%] self-center" />
                            <article className="flex flex-col gap-3 py-6">
                                <h2 className="text-4xl font-bold">56</h2>
                                <p className="text-neutral-dark-gray">
                                    days left
                                </p>
                            </article>

                            <div className="w-full flex justify-center">
                                {/* Temp value */}
                                <ProgressBar currentValue={75} />
                            </div>
                        </section>

                        <section className="flex flex-col gap-7 bg-white rounded-lg px-6 py-8 border border-solid border-neutral-dark-gray/10 text-neutral-dark-gray text-left">
                            <AboutProjectDescription />
                            <div className="flex flex-col gap-5">
                                <ProjectOption
                                    name={'Bamboo Stand'}
                                    price={25}
                                    description={`You get an ergonomic stand made of natural bamboo. You&apos;ve
                                    helped us launch our promotional campaign, and you&apos;ll be
                                    added to a special Backer member list.`}
                                    remaining={101}
                                />
                                <ProjectOption
                                    name={`Black Edition Stand`}
                                    price={75}
                                    description={`You get a Black Special Edition computer
                                    stand and a personal thank you.
                                    You&apos;ll be added to our Backer
                                    member list. Shipping is included.`}
                                    remaining={64}
                                />
                                <ProjectOption
                                    name={`Mahogany Special Edition`}
                                    price={200}
                                    description={`You get two Special Edition Mahogany
                                    stands, a Backer T-Shirt, and a personal
                                    thank you. You&apos;ll be added to our
                                    Backer member list. Shipping is
                                    included.`}
                                    remaining={0}
                                />
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
};

export default App;
