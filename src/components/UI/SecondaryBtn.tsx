interface SecondaryBtn {
    classes?: string;
    onClick?: (e: React.MouseEvent) => void;
    children: React.ReactNode;
}

const SecondaryBtn = ({ classes, onClick, children }: SecondaryBtn) => {
    return (
        <button className={classes ? classes : ''} onClick={onClick}>
            {children}
        </button>
    );
};

export default SecondaryBtn;
