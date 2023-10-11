import logo from '../../assets/images/logo.svg';

interface Classes {
    classes?: string;
}

const Logo = ({ classes }: Classes) => {
    const allClasses = classes ? classes : '';

    return (
        <span className={allClasses}>
            <img src={logo} alt="Crowdfund logo" />
        </span>
    );
};

export default Logo;
