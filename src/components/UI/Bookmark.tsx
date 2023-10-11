import { useState } from 'react';

const Bookmark = () => {
    const [isBookMarked, setIsBookMarked] = useState<boolean>(false);

    const circleFill = isBookMarked ? `#147b74` : `#2F2F2F`;
    const markFill = isBookMarked ? `#fff` : `#B1B1B1`;

    return (
        <button
            className="group"
            onClick={() => setIsBookMarked((marked) => !marked)}
        >
            <div
                className={`flex items-center rounded-full ${
                    isBookMarked
                        ? 'bg-neutral-dark-gray/5'
                        : 'bg-neutral-dark-gray/10 '
                }`}
            >
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <circle
                            className="group-hover:fill-neutral-dark-gray transition-colors"
                            fill={circleFill}
                            cx="28"
                            cy="28"
                            r="28"
                        />
                        <path fill={markFill} d="M23 19v18l5-5.058L33 37V19z" />
                    </g>
                </svg>
                <span
                    className={`${
                        isBookMarked
                            ? `text-primary-dark-cyan`
                            : `text-neutral-dark-gray`
                    } font-bold msm:hidden px-4`}
                >
                    {isBookMarked ? 'Bookmarked' : 'Bookmark'}
                </span>
            </div>
        </button>
    );
};

export default Bookmark;
