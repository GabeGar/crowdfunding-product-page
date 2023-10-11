import { useMobileMenu } from '../contexts/MobileMenuContext';

import NavLink from './UI/NavLink.tsx';
import HamburgerMenu from './UI/HamburgerMenu.tsx';
import Logo from './UI/Logo.tsx';

const Header = () => {
    const { mobileMenuVisible } = useMobileMenu();

    return (
        <header className="lg:max-w-[77dvw] sm:w-full sm:mx-auto px-6 py-8 flex justify-between items-center">
            {!mobileMenuVisible && <Logo />}
            <nav>
                {!mobileMenuVisible && <HamburgerMenu />}
                <ul className="flex gap-10 msm:hidden text-white font-medium">
                    <li>
                        <NavLink
                            classes="transition hover:font-bold"
                            href="About page"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            classes="transition hover:font-bold"
                            href="Discover Page"
                        >
                            Discover
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            classes="transition hover:font-bold"
                            href="Get Started Page"
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
