import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useMobileMenu } from '../../contexts/MobileMenuContext';

import closeMenu from '../../assets/images/icon-close-menu.svg';
import Overlay from './Overlay';
import Logo from './Logo';

const MobileMenu = () => {
    const { setMobileMenuVisible } = useMobileMenu();

    useEffect(() => {
        const html = document.querySelector('html');
        html.style.overflow = 'hidden';

        return () => {
            html.style = null;
        };
    }, []);

    return (
        <Overlay>
            <div className="flex justify-between">
                <Logo />
                <button onClick={() => setMobileMenuVisible(false)}>
                    <img src={closeMenu} alt="Exit menu" />
                </button>
            </div>
            <nav>
                <ul className="grid grid-rows-3 my-[5rem] rounded-lg bg-white font-medium all-child:p-6 not-last-child:border-b-2">
                    <li>
                        <a
                            className="block"
                            href="#About page"
                            onClick={() => setMobileMenuVisible(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="block"
                            href="#Discover page"
                            onClick={() => setMobileMenuVisible(false)}
                        >
                            Discover
                        </a>
                    </li>
                    <li>
                        <a
                            className="block"
                            href="#Get Started page"
                            onClick={() => setMobileMenuVisible(false)}
                        >
                            Get Started
                        </a>
                    </li>
                </ul>
            </nav>
        </Overlay>
    );
};

const MobileMenuOverlay = () => {
    return createPortal(
        <MobileMenu />,
        document.querySelector('#overlay--root'),
    );
};

export default MobileMenuOverlay;
