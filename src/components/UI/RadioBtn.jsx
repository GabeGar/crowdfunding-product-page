const RadioBtn = ({ id, currentMenuSelection, outOfStock }) => {
    return (
        <div className={`flex items-center`}>
            <input type="radio" id={id} name="radioGroup" className="hidden" />
            <div
                className={`transition-colors flex justify-center items-center w-7 h-7 border border-neutral-dark-gray/30 rounded-full mr-2 ${
                    !outOfStock && `group-hover:border-primary-moderate-cyan`
                }`}
            >
                <div
                    className={`w-[.85rem] h-[.85rem] ${
                        currentMenuSelection && `bg-primary-moderate-cyan`
                    } rounded-full`}
                ></div>
            </div>
        </div>
    );
};

export default RadioBtn;
