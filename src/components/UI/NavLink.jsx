const NavLink = ({ classes, onClick, href, children }) => {
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
