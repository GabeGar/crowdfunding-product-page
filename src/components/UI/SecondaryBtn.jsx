const SecondaryBtn = ({ classes, onClick, children }) => {
    return (
        <button className={classes ? classes : ''} onClick={onClick}>
            {children}
        </button>
    );
};

export default SecondaryBtn;
