import { useMobileMenu } from '../contexts/MobileMenuContext';

import NavLink from './UI/NavLink';
import HamburgerMenu from './UI/HamburgerMenu';
import Logo from './UI/Logo';

const Header = () => {
    const { mobileMenuVisible } = useMobileMenu();

    return (
        <header className="lg:max-w-[80dvw] sm:w-full sm:mx-auto sm:pt-5 flex justify-between items-center">
            <Logo />
            <nav>
                {!mobileMenuVisible && <HamburgerMenu />}
                <ul className="flex gap-10 msm:hidden text-white font-medium">
                    <li>
                        <NavLink
                            classes={'transition-all hover:font-bold'}
                            href={'About page'}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            classes={'transition-all hover:font-bold'}
                            href={'Discover Page'}
                        >
                            Discover
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            classes={'transition-all hover:font-bold'}
                            href={'Get Started Page'}
                        >
                            Get Started
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
