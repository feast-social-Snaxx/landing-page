import { useRouter } from 'next/router';
import { useAppDataContext } from "../../contexts/app-data-context";
import Image from "next/image";
import Link from 'next/link';

export default function TopBar() {
    const { push, locale } = useRouter();
    const { isMobile } = useAppDataContext();

    return (
        <div className="padd-s-m f-row ai-c over abs-pos">
            <Image
                className="c-p"
                alt="Snaxx logo image"
                src="/snaxx-logo.webp"
                width={!isMobile ? "181" : "100"}
                height={!isMobile ? "42" : "23"}
                onClick={() => push("/", null, { locale: locale })}
            />

            <div className='links-bloc'>
                <Link className='fs-xm accent-text-hover-effect fw-l' href={"#about"}>About</Link>
                <Link className='fs-xm accent-text-hover-effect fw-l' href={"#features"}>Features</Link>
                <Link className='fs-xm accent-text-hover-effect fw-l' href={"#contact"}>Contact</Link>
            </div>
        </div>
    );
};
