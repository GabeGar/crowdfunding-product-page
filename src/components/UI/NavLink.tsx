interface NavLink {
    classes?: string;
    onClick?: (e: React.MouseEvent) => void;
    href: string;
    children: string;
}

const NavLink = ({ classes, onClick, href, children }: NavLink) => {
    return (
        <a
            className={classes ? classes : ''}
            href={href ? `#${href}` : '#'}
            onClick={onClick ?? onClick}
        >
            {children}
        </a>
    );
};

export default NavLink;
