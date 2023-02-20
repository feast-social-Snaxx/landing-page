import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useAppDataContext } from "../../contexts/app-data-context";
import CardContainer from "../common/card-container";
import MarkerTitle from "../common/marker-title";
import ContactForm from "./contact-form";

export default function ContactPopup({ title, triggered = false, isMobile = false, light = true, full = true }) {
    const [open, setOpen] = useState(true);
    const { setDisplayContactPopup } = useAppDataContext();

    const close = () => {
        setOpen(false);
        setDisplayContactPopup(false);
    };

    return (
        open && triggered ?
            <div className="overlay popup-overlay" onClick={(e) => {
                // dirty trick
                try {
                    if (e.target.className && (e.target.className.indexOf("popup-overlay") !== -1 || e.target.className.indexOf("nav") !== -1)) {
                        close();
                    }
                } catch {
                }
            }}>
                <CardContainer className={`contact-popup contact-popup-${open ? "on" : "off"}`} style={{ background: "var(--light-grey)" }}>
                    <div className="contact-popup-head">
                        <MarkerTitle className="contact-marker" title="Get in touch" />

                        <Close id="contact-popup-close" onClick={close} />
                    </div>

                    <p className={`contact-popup-title contact-popup-title-${light ? "light" : "dark"}`}>{title}</p>

                    <ContactForm light={light} isMobile={isMobile} full={full} onFormSent={close} />

                    <div className="spacer-small"></div>
                </CardContainer>
            </div>
            :
            <></>
    );
};
