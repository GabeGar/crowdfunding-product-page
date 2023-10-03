import { useProjects } from '../contexts/ProjectContext';
import { insertCommasInNumber } from '../utilities/insertCommasInNumber';

import AboutProjectDescription from './AboutProjectDescription';
import ProjectOptionsList from './ProjectOptionsList';
import Bookmark from './UI/Bookmark';
import MastercraftLogo from './UI/MastercraftLogo';
import PrimaryBtn from './UI/PrimaryBtn';
import ProgressBar from './UI/ProgressBar';
import ThematicDivider from './UI/ThematicDivider';

const MainContent = () => {
    const { projectProgress } = useProjects();
    const { totalBackers, totalRaised, goal } = projectProgress;

    const totalRaisedStr = insertCommasInNumber(totalRaised);
    const totalBackersStr = insertCommasInNumber(totalBackers);

    return (
        <main className="sm:child:px-10 flex flex-col gap-7 2xl:mt-[25dvh] xl:mt-[20dvh] lg:mt-[15dvh] md:mt-[10dvh] sm:mt-[7dvh] mt-[9.5rem]">
            <section className="relative flex flex-col justify-center bg-white rounded-lg px-6 border border-solid border-neutral-dark-gray/10">
                <MastercraftLogo />
                <div className="flex flex-col gap-6 pt-16 pb-10 text-center">
                    <h1 className="text-[1.4rem] leading-7 font-bold">
                        Mastercraft Bamboo Monitor Riser
                    </h1>
                    <p className="text-neutral-dark-gray">
                        A beautifully handcrafted monitor stand to reduce neck
                        and eye strain.
                    </p>
                    <div className="flex justify-between gap-1 last:sm:pt-5">
                        <PrimaryBtn>Back this project</PrimaryBtn>
                        <Bookmark />
                    </div>
                </div>
            </section>
            <section className="sm:child:p-0 sm:flex-row sm:flex-wrap sm:justify-between sm:items-start sm:gap-6 sm:not-last-child:flex-1 sm:not-last-child:items-stretch sm:is-article:gap-1  sm:is-article:text-left flex flex-col items-center bg-white rounded-lg px-6 py-10 border border-solid border-neutral-dark-gray/10 text-center">
                <article className="relative flex flex-col gap-3 pb-6">
                    <h2 className="text-4xl font-bold">${totalRaisedStr}</h2>
                    <p className="text-neutral-dark-gray">of $100,000 backed</p>
                </article>
                <ThematicDivider />
                <article className="relative flex flex-col gap-3 pb-6">
                    <h2 className="text-4xl font-bold">{totalBackersStr}</h2>
                    <p className="text-neutral-dark-gray">total backers</p>
                </article>
                <ThematicDivider />
                <article className="relative flex flex-col gap-3 pb-6">
                    {totalRaised < goal && (
                        <>
                            <h2 className="text-4xl font-bold">56</h2>
                            <p className="text-neutral-dark-gray">days left</p>
                        </>
                    )}
                    {totalRaised >= goal && (
                        <p className="flex flex-col gap-3 text-4xl font-bold sm:text-center text-neutral-black">
                            <span>Goal Reached!</span>
                        </p>
                    )}
                </article>
                <div
                    className="sm:flex-grow
                                    sm:justify-start sm:min-w-full w-full flex justify-center"
                >
                    <ProgressBar />
                </div>
            </section>
            <section className="sm:leading-8 flex flex-col gap-7 bg-white rounded-lg px-6 py-8 border border-solid border-neutral-dark-gray/10 text-neutral-dark-gray text-left">
                <AboutProjectDescription />
                <div className="flex flex-col gap-5">
                    <ProjectOptionsList filterById={0} />
                </div>
            </section>
        </main>
    );
};

export default MainContent;
