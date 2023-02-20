
export default function CardContainer({ children, style, className }) {
    return (
        <div className={`card-container${className ? " " + className : ""}`} style={style}>
            {children}
        </div>
    );
};
