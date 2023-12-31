import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion as m } from 'framer-motion';
import { useMobileMenu } from '../contexts/MobileMenuContext';

import closeMenu from '../assets/images/icon-close-menu.svg';
import Overlay from './UI/Overlay';
import Logo from './UI/Logo';
import NavLink from './UI/NavLink';

const MobileMenu = () => {
    const { setMobileMenuVisible } = useMobileMenu();

    const handleExitMobileMenu = () => {
        setMobileMenuVisible(false);
    };

    useEffect(() => {
        const html = document.querySelector('html') as HTMLElement;
        html.style.overflow = 'hidden';

        return () => {
            html.style.overflow = '';
        };
    }, []);

    return (
        <Overlay>
            <m.div
                transition={{ duration: 0.2, ease: 'easeIn' }}
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -500 }}
            >
                <div className="flex justify-between">
                    <Logo classes="" />
                    <button onClick={handleExitMobileMenu}>
                        <img src={closeMenu} alt="Exit menu" />
                    </button>
                </div>
                <nav>
                    <ul className="grid grid-rows-3 my-[5rem] rounded-lg bg-white font-medium child:p-6 not-last-child:border-b-2">
                        <li>
                            <NavLink
                                classes={'block'}
                                href={'About Page'}
                                onClick={handleExitMobileMenu}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                classes={'block'}
                                href={'Discover page'}
                                onClick={handleExitMobileMenu}
                            >
                                Discover
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                classes={'block'}
                                href={'Get Started page'}
                                onClick={handleExitMobileMenu}
                            >
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </m.div>
        </Overlay>
    );
};

const MobileMenuOverlay = () => {
    const overlayRoot = document.querySelector('#overlay--root');

    if (overlayRoot !== null) {
        return createPortal(<MobileMenu />, overlayRoot);
    }

    throw new Error('Overlay root not found/does not exist.');
};

export default MobileMenuOverlay;
