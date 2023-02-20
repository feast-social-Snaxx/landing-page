import {useState, useCallback, createContext, useContext} from 'react';
import Toast from '../components/common/toast';

const ToastContext = createContext(null);
const AUTO_DELETE = true;
const DISMISS_TIME = 3500;

let id = 0;

export const AppToastContext = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((type, content) => {
        setToasts([
            ...toasts,
            { id: id++, type, content }
        ]);
    }, [setToasts]);

    const removeToast = useCallback(id => {
        setToasts(toasts => toasts.filter(t => t.id !== id));
    }, [setToasts]);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            <Toast toastList={toasts} autoDelete={AUTO_DELETE} dismissTime={DISMISS_TIME}/>
            {children}
        </ToastContext.Provider>
    );
}

export function useAppToastContext() {
    return useContext(ToastContext);
}
