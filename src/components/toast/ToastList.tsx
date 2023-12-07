// ToastList.tsx
import { useCallback, useEffect } from "react";
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import { ToastProps } from "../../views/Home";

interface ToastListProps {
    allToasts: ToastProps[];
    setAllToasts: React.Dispatch<React.SetStateAction<ToastProps[]>>;
}

const ToastList = ({ allToasts, setAllToasts }: ToastListProps) => {
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
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [allToasts, deleteToast]);

    console.log(allToasts);

    return (
        <div>
            {allToasts.slice(0, 3).map((toast) => (
                <Toast key={toast.id} id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => deleteToast(toast.id)} />
            ))}
        </div>
    );
};

export default ToastList;
