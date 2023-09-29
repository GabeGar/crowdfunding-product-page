import hamburger from '../src/assets/images/icon-hamburger.svg';
import masterCraft from '../src/assets/images/logo-mastercraft.svg';

import { useMobileMenu } from './contexts/MobileMenuContext';

import Logo from './components/UI/Logo';
import Bookmark from './components/UI/Bookmark';
import ProgressBar from './components/UI/ProgressBar';
import MobileMenuOverlay from './components/UI/MobileMenu';

const App = () => {
    const { mobileMenuVisible, setMobileMenuVisible } = useMobileMenu();

    return (
        <div className="min-h-screen bg-neutral-dark-gray/5">
            <div className="min-h-[42dvh] bg-bg-hero-mobile bg-[100%,auto] bg-no-repeat bg-top px-6 py-8">
                <header className="flex justify-between">
                    <Logo />
                    <nav className="relative">
                        {mobileMenuVisible && (
                            <MobileMenuOverlay
                                setMobileMenuVisible={setMobileMenuVisible}
                            />
                        )}
                        {!mobileMenuVisible && (
                            <button onClick={() => setMobileMenuVisible(true)}>
                                <img src={hamburger} alt="Menu toggle" />
                            </button>
                        )}
                    </nav>
                </header>

                <main className="flex flex-col gap-7 mt-[11.65rem]">
                    <section className="relative flex flex-col justify-center items-center bg-white rounded-lg px-6 border border-solid border-neutral-dark-gray/10">
                        <img
                            src={masterCraft}
                            alt="Master craft logo"
                            className="absolute top-[-1.75rem] right-[50%] translate-x-[50%]"
                        />
                        <div className="flex flex-col gap-6 pt-16 pb-10 text-center">
                            <h1 className="text-[1.4rem] leading-7 font-bold">
                                Mastercraft Bamboo Monitor Riser
                            </h1>
                            <p className="text-neutral-dark-gray">
                                A beautifully handcrafted monitor stand to
                                reduce neck and eye strain.
                            </p>
                            <div className="flex justify-between gap-1">
                                <button className="px-11 py-4 rounded-[2rem] bg-primary-moderate-cyan text-white font-bold">
                                    Back this project
                                </button>
                                <button>
                                    <Bookmark />
                                </button>
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
                            <p className="text-neutral-dark-gray">days left</p>
                        </article>

                        <div className="w-full flex justify-center">
                            {/* Temp value */}
                            <ProgressBar currentValue={75} />
                        </div>
                    </section>

                    <section className="flex flex-col gap-7 bg-white rounded-lg px-6 py-8 border border-solid border-neutral-dark-gray/10 text-neutral-dark-gray text-left">
                        <h2 className="text-xl text-neutral-black font-bold">
                            About this project
                        </h2>
                        <p>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and
                            stylish platform that elevates your screen to a more
                            comfortable viewing height. Placing your monitor at
                            eye level has the potential to improve your posture
                            and make you more comfortable while at work, helping
                            you stay focused on the task at hand.
                        </p>
                        <p>
                            Featuring artisan craftsmanship, the simplicity of
                            design creates extra desk space below your computer
                            to allow notepads, pens, and USB sticks to be stored
                            under the stand.
                        </p>

                        <div className="flex flex-col gap-5">
                            <section className="flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid border-neutral-dark-gray/30">
                                <h3 className="flex flex-col gap-1 text-neutral-black">
                                    <span className="font-bold">
                                        Bamboo Stand
                                    </span>
                                    <span className=" text-primary-moderate-cyan font-medium">
                                        Pledge $25 or more
                                    </span>
                                </h3>
                                <p>
                                    You get an ergonomic stand made of natural
                                    bamboo. You&apos;ve helped us launch our
                                    promotional campaign, and you&apos;ll be
                                    added to a special Backer member list.
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className=" text-neutral-black text-4xl font-bold ">
                                        101
                                    </span>
                                    <span>left</span>
                                </p>
                                <button className="px-8 py-3 rounded-[2rem] bg-primary-moderate-cyan text-white font-bold self-start">
                                    Select Reward
                                </button>
                            </section>

                            <section className="flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid border-neutral-dark-gray/30">
                                <h3 className="flex flex-col gap-1 text-neutral-black">
                                    <span className="font-bold">
                                        Black Edition Stand
                                    </span>
                                    <span className=" text-primary-moderate-cyan font-medium">
                                        Pledge $75 or more
                                    </span>
                                </h3>
                                <p>
                                    You get a Black Special Edition computer
                                    stand and a personal thank you. You&apos;ll
                                    be added to our Backer member list. Shipping
                                    is included.
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className=" text-neutral-black text-4xl font-bold ">
                                        64
                                    </span>
                                    <span>left</span>
                                </p>
                                <button className="px-8 py-3 rounded-[2rem] bg-primary-moderate-cyan text-white font-bold self-start">
                                    Select Reward
                                </button>
                            </section>

                            <section className="flex flex-col gap-5 bg-white rounded-lg p-5 border border-solid border-neutral-dark-gray/10">
                                <h3 className="flex flex-col gap-1 text-neutral-black/50">
                                    <span className="font-bold">
                                        Mahogany Special Edition
                                    </span>
                                    <span className=" text-primary-moderate-cyan/50 font-medium">
                                        Pledge $200 or more
                                    </span>
                                </h3>
                                <p className="text-neutral-dark-gray/50">
                                    You get two Special Edition Mahogany stands,
                                    a Backer T-Shirt, and a personal thank you.
                                    You&apos;ll be added to our Backer member
                                    list. Shipping is included.
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="text-neutral-black/50 text-4xl font-bold">
                                        0
                                    </span>
                                    <span className="text-neutral-dark-gray/50">
                                        left
                                    </span>
                                </p>
                                <button
                                    className="px-8 py-3 rounded-[2rem] bg-neutral-dark-gray/50 text-white font-bold self-start"
                                    disabled={true}
                                >
                                    Out of Stock
                                </button>
                            </section>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;
