const Overlay = ({ children }) => {
    return (
        <div className="absolute min-h-screen w-full mx-auto z-10 px-6 py-8 bg-neutral-dark-gray/30">
            {children}
        </div>
    );
};

export default Overlay;
