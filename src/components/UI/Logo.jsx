import logo from '../../assets/images/logo.svg';

const Logo = ({ classes }) => {
    const allClasses = classes ? classes : null;

    return (
        <span className={allClasses}>
            <img src={logo} alt="Crowdfund logo" />
        </span>
    );
};

export default Logo;
