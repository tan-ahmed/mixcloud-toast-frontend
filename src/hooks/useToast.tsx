// useToast.tsx
import { useCallback, useEffect } from "react";
import { FIVE_SECONDS, ToastProps } from "../components/toast/shared";
import { useToastContext } from "../store/ToastContext";

export const useToast = () => {
    const { allToasts, setAllToasts } = useToastContext();

    const addToast = ({ title, picture }: Omit<ToastProps, "id">) => {
        const newId = Date.now();
        const newToast = {
            id: newId,
            title,
            picture,
        };
        setAllToasts((prevList) => [...prevList, newToast]);
    };

    const deleteToast = useCallback(
        (id: number) => {
            setAllToasts((prevList) => {
                const updatedList = prevList.filter((e) => e.id !== id);
                return updatedList;
            });
        },
        [setAllToasts]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (allToasts.length) {
                deleteToast(allToasts[0].id);
            }
        }, FIVE_SECONDS);

        return () => {
            clearInterval(interval);
        };
    }, [allToasts, deleteToast]);

    return { allToasts, addToast, setAllToasts, deleteToast };
};

export default useToast;
