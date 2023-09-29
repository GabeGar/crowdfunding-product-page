import { useMobileMenu } from '../../contexts/MobileMenuContext';

import hamburger from '../../assets/images/icon-hamburger.svg';

const HamburgerMenu = () => {
    const { setMobileMenuVisible } = useMobileMenu();

    return (
        <button onClick={() => setMobileMenuVisible(true)}>
            <img src={hamburger} alt="Menu toggle" />
        </button>
    );
};

export default HamburgerMenu;
