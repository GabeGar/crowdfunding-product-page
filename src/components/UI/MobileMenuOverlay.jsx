import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useMobileMenu } from '../../contexts/MobileMenuContext';

import closeMenu from '../../assets/images/icon-close-menu.svg';
import Overlay from './Overlay';
import Logo from './Logo';
import NavLink from './NavLink';

const MobileMenu = () => {
    const { setMobileMenuVisible } = useMobileMenu();

    const handleExitMobileMenu = () => {
        setMobileMenuVisible(false);
    };

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
