import { Instagram } from "@mui/icons-material";
import Image from "next/image";
import { useAppDataContext } from "../../contexts/app-data-context";

export default function Footer() {
    const { t, isMobile, getImage } = useAppDataContext();

    return (
        <div className="footer f-col">
            <div className="f-row f-wrap">
                <div className="f1">
                    <Image
                        className="c-p"
                        alt="Snaxx logo image"
                        src={getImage("snaxx-logo.webp")}
                        width={!isMobile ? "181" : "128"}
                        height={!isMobile ? "42" : "30"}
                        onClick={() => push("/", null, { locale: locale })}
                    />
                    <div className="spacer-footer"></div>
                </div>
                <div className="f1 f-row jc-sb footer-link-bloc">
                    <div className="footer-bloc">
                        <p className="fs-xm footer-link">About us</p>
                        <p className="fs-xm footer-link">How it works</p>
                    </div>
                    <div className="footer-bloc">
                        <div className="footer-link">
                            <a href="mailto:hello@snaxx.com" className="fs-xm">hello@snaxx.com</a>
                        </div>
                        <div className="footer-link">
                            <a href="tel:+33" className="fs-xm">096 262 0232</a>
                        </div>
                    </div>
                    <div>
                        <a href="https://instagram.com/" >
                            <Instagram className="insta" fontSize="large" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="f-row jc-sb">
                <div className="f-row ai-c">
                    <p className="fs-m legal-link">Terms of use</p>
                    <p className="fs-m legal-link">Privacy policy</p>
                </div>
                <p className="fs-m c-grey">{(new Date().getFullYear())}. SNAXX. All Rights Reserved</p>
            </div>
        </div>
    );
};
