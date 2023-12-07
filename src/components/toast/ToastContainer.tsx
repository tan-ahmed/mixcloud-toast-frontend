// ToastContainer.tsx
import { useCallback, useEffect } from "react";
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import { ANIMATION_DURATION, FIVE_SECONDS_MS, ToastProps } from "./shared";

interface ToastContainerProps {
    allToasts: ToastProps[];
    setAllToasts: React.Dispatch<React.SetStateAction<ToastProps[]>>;
}

const ToastContainer = ({ allToasts, setAllToasts }: ToastContainerProps) => {
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

    return (
        <div className="fixed top-4 right-3 z-50 transition-all">
            {allToasts.slice(0, 3).map((toast) => (
                <Toast key={toast.id} id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => deleteToast(toast.id)} />
            ))}
        </div>
    );
};

export default ToastContainer;
