import { useCallback, useEffect } from "react";
import Toast from "../toast/Toast2";
import { ToastProperties } from "../../views/Home";

interface ToastContainerProps {
    toastlist: ToastProperties[];
    setList: React.Dispatch<React.SetStateAction<ToastProperties[]>>;
}

const ToastContainer = ({ toastlist, setList }: ToastContainerProps) => {
    

    return (
        <div className="top-0 fixed right-0 z-50 slide-in-right buttom-right">
            {toastlist.map((toast, i) => (
                <Toast key={i} title={toast.title} description={toast.description} onClose={() => deleteToast(toast.id)} picture="" isLive={false} />
            ))}
        </div>
    );
};

export default ToastContainer;
