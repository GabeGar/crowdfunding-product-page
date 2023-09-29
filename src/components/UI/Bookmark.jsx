import { useState } from 'react';

const Bookmark = () => {
    const [isBookMarked, setIsBookMarked] = useState(false);

    const circleFill = isBookMarked ? `#3cb4ac` : `#2F2F2F`;
    const markFill = isBookMarked ? `#fff` : `#B1B1B1`;

    return (
        <button onClick={() => setIsBookMarked((marked) => !marked)}>
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <circle fill={circleFill} cx="28" cy="28" r="28" />
                    <path fill={markFill} d="M23 19v18l5-5.058L33 37V19z" />
                </g>
            </svg>
        </button>
    );
};

export default Bookmark;
