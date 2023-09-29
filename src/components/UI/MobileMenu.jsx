import { createPortal } from 'react-dom';

import { useMobileMenu } from '../../contexts/MobileMenuContext';
import closeMenu from '../../assets/images/icon-close-menu.svg';

import Overlay from './Overlay';
import Logo from './Logo';

const MobileMenu = () => {
    const { setMobileMenuVisible } = useMobileMenu();

    return (
        <Overlay>
            <div className="flex justify-between">
                <Logo />
                <button onClick={() => setMobileMenuVisible(false)}>
                    <img src={closeMenu} alt="Exit menu" />
                </button>
            </div>
            <ul className="grid grid-rows-3 my-[5rem] rounded-lg bg-white font-medium">
                <li className="first-of-type:border-b-2 p-6">
                    <a href="#About page">About</a>
                </li>
                <li className="[&:nth-child(2)]:border-b-2 p-6">
                    <a href="#Discover page">Discover</a>
                </li>
                <li className="p-6">
                    <a href="#Get Started page">Get Started</a>
                </li>
            </ul>
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
