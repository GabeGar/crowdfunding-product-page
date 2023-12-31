import { useMobileMenu } from '../../contexts/MobileMenuContext';

import hamburger from '../../assets/images/icon-hamburger.svg';
import SecondaryBtn from './SecondaryBtn.tsx';

const HamburgerMenu = () => {
    const { setMobileMenuVisible } = useMobileMenu();

    const handleMobileMenuVisibility = () => {
        setMobileMenuVisible(true);
    };

    return (
        <SecondaryBtn
            classes={'sm:hidden flex'}
            onClick={handleMobileMenuVisibility}
        >
            <img src={hamburger} alt="Menu toggle" />
        </SecondaryBtn>
    );
};

export default HamburgerMenu;
