import { Close, ExpandMore } from "@mui/icons-material";
import { ExpandLess } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export default function Select({ items, onValueChange, label, required = false, light = false, multiple = false }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const [valid, setValid] = useState(true);
    const listRef = useRef(null);
    const [listMarginBot, setListMarginBot] = useState(0);

    useEffect(() => {
        const evtFn = (e) => {
            // dirty trick
            try {
                if ((e.target.className.indexOf("select-item") == -1 && e.target.className.indexOf("select-list") == -1) || !multiple) {
                    setOpen(false);
                }
            } catch {
                setOpen(false);
            }
        }

        if (open) {
            document.body.children[0].addEventListener("click", evtFn);
        }

        return () => {
            document.body.children[0].removeEventListener("click", evtFn);
        }
    }, [open]);

    useEffect(() => {
        if (!listRef.current) {
            return;
        }

        const margin = listRef.current.offsetHeight;

        setListMarginBot(0 - margin - 8);
    }, [open]);

    return (
        <div className={"select txt-2"}>
            <button type="button" className={`select-button select-button-${light ? "light" : "dark"} txt-2${!valid ? " input-error" : ""}`} onClick={() => {
                if (open) {
                    setValid(!required || selected.length);
                }

                setOpen(!open);
            }}>

                <span className={`select-button-txt select-button-txt-${light ? "light" : "dark"}${selected.length ? "-on" : ""}`}>{label}</span>

                <div className="select-controls">
                    {
                        selected.length ?
                            <Close
                                className={`select-icon close-select-icon-${light ? "light" : "dark"}`}
                                onClick={() => {
                                    setSelected([]);
                                    onValueChange([])
                                    setValid(!required || selected.length);
                                }}
                                style={{ padding: "0.2vw" }}
                            />
                            :
                            <></>
                    }
                    {
                        !open ?
                            <ExpandMore className={`select-icon select-icon-${light ? "light" : "dark"}`} />
                            :
                            <ExpandLess className={`select-icon select-icon-${light ? "light" : "dark"}`} />
                    }
                </div>
            </button>

            {
                open ?
                    <div ref={listRef} className={`select-list fadein select-list-${light ? "light" : "dark"}`} style={{ marginBottom: listMarginBot }}>
                        {
                            items.map((itm, i) => {
                                const isSelected = selected.includes(itm);

                                return (
                                    <div className="select-list-item" key={`s-i-l-${i}`} onClick={() => {
                                        let newSelected;

                                        if (isSelected) {
                                            newSelected = selected.filter(elt => elt != itm);
                                        } else {
                                            if (!multiple) {
                                                newSelected = [];
                                                newSelected.push(itm);
                                            } else {
                                                newSelected = Array.from(selected);
                                                newSelected.push(itm);
                                            }
                                        }

                                        setSelected(newSelected);

                                        if (!multiple) {
                                            setOpen(false);
                                        }

                                        setValid(!required || selected.length);

                                        onValueChange(newSelected);
                                    }}>
                                        <div className={`select-item-${light ? "light" : "dark"}`}>
                                            <div className={`select-item-box select-item-box-${isSelected ? "on" : "off"}`}>
                                                {
                                                    isSelected ?
                                                        <div className="select-item-box-inside gradient"></div>
                                                        :
                                                        <></>
                                                }

                                            </div>

                                            <span className={`select-item-${light ? "light" : "dark"}${isSelected ? "-selected" : ""}`}>
                                                {itm}
                                            </span>
                                        </div>
                                        {
                                            i != items.length - 1 ?
                                                <div className="select-divider"></div>
                                                :
                                                <></>
                                        }

                                    </div>
                                );
                            })
                        }
                    </div>
                    :
                    <></>
            }
        </div>
    );
}
