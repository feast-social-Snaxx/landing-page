import TransparentContainer from "./transparent-container";

export default function MainContainer({ children, style }) {
    return (
        <TransparentContainer
            className="main-container fadein f-col jc-c ai-sb"
            style={{
                ...style,
                padding: 0,
            }}
        >
            {children}
        </TransparentContainer>
    );
};
