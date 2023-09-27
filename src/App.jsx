import logo from '../src/assets/images/logo.svg';
import hamburger from '../src/assets/images/icon-hamburger.svg';
import masterCraft from '../src/assets/images/logo-mastercraft.svg';
import Bookmark from './components/UI/Bookmark';

const App = () => {
    return (
        <div className="min-h-screen bg-neutral-dark-gray/5">
            <div className="min-h-[42dvh] bg-bg-hero-mobile bg-[100%,auto] bg-no-repeat bg-top px-6 py-8">
                <header className="flex justify-between">
                    <span>
                        <img src={logo} alt="Crowdfund logo" />
                    </span>
                    <nav>
                        <button>
                            <img src={hamburger} alt="Menu toggle" />
                        </button>
                    </nav>
                </header>

                <main className="relative flex flex-col justify-center items-center bg-white my-[13rem] rounded-lg px-8">
                    <img
                        src={masterCraft}
                        alt="Master craft logo"
                        className="absolute top-[-1.75rem] right-[50%] translate-x-[50%]"
                    />
                    <section className="flex flex-col gap-6 pt-16 pb-10 text-center">
                        <h1 className=" text-[1.4rem] leading-7 font-bold">
                            Mastercraft Bamboo Monitor Riser
                        </h1>
                        <p className=" text-neutral-dark-gray">
                            A beautifully handcrafted monitor stand to reduce
                            neck and eye strain.
                        </p>
                        <div className="flex justify-between gap-1">
                            <button className=" px-[2.35rem] py-4 rounded-[2rem] bg-primary-moderate-cyan text-white font-bold">
                                Back this project
                            </button>
                            <button>
                                <Bookmark />
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;
