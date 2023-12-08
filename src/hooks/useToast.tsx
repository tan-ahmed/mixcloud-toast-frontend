// useToast.tsx
import { useCallback, useEffect } from "react";
import { ANIMATION_DURATION, FIVE_SECONDS_MS, ToastProps } from "../components/toast/shared";
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
            const selectedToast = document.getElementById(`toast-${id}`);
            if (selectedToast) selectedToast.classList.add("fade-out");

            setTimeout(() => {
                setAllToasts((prevList) => {
                    const updatedList = prevList.filter((e) => e.id !== id);
                    return updatedList;
                });
            }, ANIMATION_DURATION);
        },
        [setAllToasts]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (allToasts.length) {
                const firstToast = document.getElementById(`toast-${allToasts[0].id}`);
                if (firstToast) {
                    firstToast.classList.add("fade-out");
                    setTimeout(() => {
                        deleteToast(allToasts[0].id);
                    }, ANIMATION_DURATION);
                }
            }
        }, FIVE_SECONDS_MS);

        return () => {
            clearInterval(interval);
        };
    }, [allToasts, deleteToast]);

    return { allToasts, addToast, setAllToasts, deleteToast };
};

export default useToast;
