const Overlay = ({ children }) => {
    return (
        <div className="fixed overflow-y-scroll inset-0 min-h-screen w-full mx-auto z-10 px-6 py-8 bg-neutral-black/50">
            {children}
        </div>
    );
};

export default Overlay;
