import { useRouter } from 'next/router';
import { useAppDataContext } from "../../contexts/app-data-context";
import Image from "next/image";

export default function TopBar() {
    const { push, locale } = useRouter();
    const { isMobile } = useAppDataContext();

    return (
        <div className="padd-s-m">
            <Image
                className="c-p"
                alt="Snaxx logo image"
                src="/snaxx-logo.webp"
                width={!isMobile ? "181" : "128"}
                height={!isMobile ? "42" : "30"}
                onClick={() => push("/", null, { locale: locale })}
            />
        </div>
    );
};
