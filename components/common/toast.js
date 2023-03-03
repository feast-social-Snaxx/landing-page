import { useEffect, useState } from 'react';

import { Close } from "@mui/icons-material";
import { useAppDataContext } from '../../contexts/app-data-context';

export const ToastType = {
    INFO: 0,
    SUCCESS: 1,
    WARNING: 2,
    ERROR: 3
}

export const TOAST_THEMES = {
    0: {
        backgroundColor: "#C1C4FF",
    },
    1: {
        backgroundColor: "#05397E",
    },
    2: {
        backgroundColor: "#F0AD4E",
    },
    3: {
        backgroundColor: "#FF4FB8",
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
                        className={`notification padd-xs-s br-s toast`}
                        style={{ backgroundColor: TOAST_THEMES[toast.type].backgroundColor }}
                    >
                        <div className={"fs-m toast-content"}>
                            <p className="fs-xm c-white notification-message">
                                {toast.content}
                            </p>

                            <Close className={"close-btn"} onClick={() => deleteToast(toast.id)} />
                        </div>
                    </div>
                )
            }
        </div>
    );
};
