import { useEffect } from 'react';

const useKey = (key, callback) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === key) {
                callback();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback, key]);
};

export default useKey;
