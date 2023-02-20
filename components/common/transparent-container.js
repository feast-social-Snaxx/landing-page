
export default function TransparentContainer({ style, children, className }) {
    return (
        <div className={`transparent-container${className ? " " + className : ""}`} style={style}>
            {children}
        </div>
    );
};
