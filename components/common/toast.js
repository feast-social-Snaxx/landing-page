import { useEffect, useState } from 'react';

import { Close } from "@mui/icons-material";
import { Info } from "@mui/icons-material";
import { Warning } from "@mui/icons-material";
import { Error } from "@mui/icons-material";
import { Check } from "@mui/icons-material";
import { useAppDataContext } from '../../contexts/app-data-context';

export const ToastType = {
    INFO: 0,
    SUCCESS: 1,
    WARNING: 2,
    ERROR: 3
}

export const TOAST_THEMES = {
    0: {
        backgroundColor: "#5BC0DE",
        title: "info",
        icon: <Info />,
    },
    1: {
        backgroundColor: "#5CB85C",
        title: "success",
        icon: <Check />,
    },
    2: {
        backgroundColor: "#F0AD4E",
        title: "warning",
        icon: <Warning />,
    },
    3: {
        backgroundColor: "#D9534F",
        title: "error",
        icon: <Error />,
    },
};

export default function Toast({ toastList, autoDelete, dismissTime }) {
    const [list, setList] = useState([]);
    const { t } = useAppDataContext();

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                if (toastList[0]) {
                    deleteToast(toastList[0].id);
                }
            }
        }, dismissTime);

        return () => {
            clearInterval(interval);
        }

    }, [toastList, autoDelete, dismissTime, list]);

    const deleteToast = (id) => {
        const listItemIndex = list.findIndex((e) => e.id === id);
        const toastListItem = toastList.findIndex((e) => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    return (
        <div className={`notification-container`}>
            {
                toastList.map((toast, i) =>
                    <div
                        key={i}
                        className={`notification toast`}
                        style={{ backgroundColor: TOAST_THEMES[toast.type].backgroundColor }}
                    >
                        <div className={"toast-content txt-2"}>
                            <div className="notification-image">
                                {TOAST_THEMES[toast.type].icon}
                            </div>
                            <div className={"text-content"}>
                                <p className="fs-m fw-b">{t(`notif.${TOAST_THEMES[toast.type].title}`)}</p>

                                <p className="notification-message">
                                    {toast.content}
                                </p>
                            </div>

                            <Close className={"close-btn"} onClick={() => deleteToast(toast.id)} />
                        </div>
                    </div>
                )
            }
        </div>
    );
};
