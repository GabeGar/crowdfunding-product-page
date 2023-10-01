import { useMobileMenu } from '../../contexts/MobileMenuContext';

import hamburger from '../../assets/images/icon-hamburger.svg';
import SecondaryBtn from './SecondaryBtn';

const HamburgerMenu = () => {
    const { setMobileMenuVisible } = useMobileMenu();

    const handleMobileMenuVisibility = () => {
        setMobileMenuVisible(true);
    };

    return (
        <SecondaryBtn
            classes={'sm:hidden'}
            onClick={handleMobileMenuVisibility}
        >
            <img src={hamburger} alt="Menu toggle" />
        </SecondaryBtn>
    );
};

export default HamburgerMenu;
