const ThematicDivider = () => {
    return (
        <>
            <div className="msm:hidden self-stretch flex justify-center max-w-[1.5rem]">
                <div className="bg-neutral-dark-gray/30 w-[1px] h-[100%]"></div>
            </div>
            <hr className="sm:hidden max-w-[6rem] w-[35%] self-center py-3" />
        </>
    );
};

export default ThematicDivider;
