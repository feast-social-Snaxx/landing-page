import { useState } from "react";

export default function LanguageSelector({ locale, locales, localeChanged }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(locale);

    return (
        <>
            {/* <Dropdown items={locales} buttonText={selected} overlayIndex={1} onItemClick={(l) => {
                setSelected(l);
                setOpen(false);
                localeChanged(l);
            }} /> */}
        </>
    );
}
