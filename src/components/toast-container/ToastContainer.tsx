import { useCallback, useEffect } from "react";
import Toast from "../toast/Toast";

interface ToastContainerProps {
    toastlist: {
        id: string;
        title: string;
        description: string;
        backgroundColor: string;
    }[];
    setList: React.Dispatch<
        React.SetStateAction<
            {
                id: string;
                title: string;
                description: string;
                backgroundColor: string;
            }[]
        >
    >;
}

const ToastContainer = ({ toastlist, setList }: ToastContainerProps) => {
    const deleteToast = useCallback(
        (id: string) => {
            const toastListItem = toastlist.filter((e) => e.id !== id);
            setList(toastListItem);
        },
        [toastlist, setList]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastlist.length) {
                deleteToast(toastlist[0].id);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [toastlist, deleteToast]);

    return (
        <div className="top-0 fixed right-0 z-50 slide-in-right buttom-right">
            {toastlist.map((toast, i) => (
                <Toast key={i} title={toast.title} description={toast.description} onClose={() => deleteToast(toast.id)} picture="" isLive={false} />
            ))}
        </div>
    );
};

export default ToastContainer;
