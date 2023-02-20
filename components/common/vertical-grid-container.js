import { useMemo } from "react";

export default function VerticalGridContainer({ style, columns, children }) {
    const getGridBody = useMemo(() => {
        const eltCount = children.length + 1;
        const rowsCount = eltCount % columns == 0 ? eltCount / columns : eltCount / columns + 1;
        const body = [];

        for (let i = 0; i < rowsCount; ++i) {
            let row = [];

            for (let j = 0; j < columns; ++j) {
                row.push(
                    <div key={`grid-cell-${i * columns + j}`} className="vertical-grid-cell">
                        {
                            i * columns + j <= children.length ?
                                children[i * columns + j]
                                :
                                <></>
                        }
                    </div>
                );
            }

            body.push(
                <div key={`grid-row-${i}`} className="vertical-grid-row">
                    {row}
                </div>
            );
        }

        return body;
    }, [children, columns]);

    return (
        <div className="vertical-grid-container" style={style}>
            {getGridBody}
        </div>
    );
};
