// useToast.tsx
import { useState } from "react";
import { ToastProps } from "../components/toast/shared";

export const useToast = () => {
    const [allToasts, setAllToasts] = useState<ToastProps[]>([]);

    const addToast = ({ title, picture }: Omit<ToastProps, "id">) => {
        console.log(title, picture);
        const newId = Date.now();
        const newToast = {
            id: newId,
            title,
            picture,
        };
        setAllToasts((prevList) => [...prevList, newToast]);
    };

    return { allToasts, addToast, setAllToasts };
};

export default useToast;
