import useTranslation from 'next-translate/useTranslation';
import { createContext, useEffect, useState, useContext } from "react";
import { AppToastContext } from './app-toast-context';

const AppDataContext = createContext();

export const MOBILE_LIMIT_SIZE = 850;

export const AppDataProvider = ({ children }) => {
    // Mobile display
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= MOBILE_LIMIT_SIZE);

        const listenerFn = () => {
            if (window.innerWidth <= MOBILE_LIMIT_SIZE && !isMobile) {
                setIsMobile(true);
            } else if (window.innerWidth > MOBILE_LIMIT_SIZE && isMobile) {
                setIsMobile(false);
            }
        }

        window.addEventListener("resize", listenerFn);

        return () => {
            window.removeEventListener("resize", listenerFn);
        }
    })

    const getImage = (image) => {
        return (isMobile ? "/mobile/" : "/") + image;
    };

    // Translations
    const { t } = useTranslation('common');

    return (
        <AppDataContext.Provider
            value={{
                isMobile,
                getImage,
                t,
            }}
        >
            <AppToastContext>
                {children}
            </AppToastContext>
        </AppDataContext.Provider>
    )
};

export function useAppDataContext() {
    return useContext(AppDataContext);
};
