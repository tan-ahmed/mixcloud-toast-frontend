import { createContext, useContext, useMemo, useState } from "react";
import { ToastProps } from "../components/toast/shared";

export type ToastContextProps = {
    allToasts: ToastProps[];
    setAllToasts: React.Dispatch<React.SetStateAction<ToastProps[]>>;
};

export const ToastContext = createContext<ToastContextProps>({
    allToasts: [],
    setAllToasts: () => {},
});

type ToastProviderProps = {
    children: React.ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [allToasts, setAllToasts] = useState<ToastProps[]>([]);

    // eslint react exhaustive-deps was complaining to use the useMemo hook
    const memoContext = useMemo(() => {
        const contextValue: ToastContextProps = {
            allToasts,
            setAllToasts,
        };
        return contextValue;
    }, [allToasts]);

    return <ToastContext.Provider value={memoContext}>{children}</ToastContext.Provider>;
};

export const useToastContext = () => useContext(ToastContext);
