// ToastContainer.tsx
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import { useToast } from "../../hooks/useToast";

const ToastContainer = () => {
    const { allToasts, deleteToast } = useToast();

    return (
        <div className="fixed top-24 right-3 z-50 transition-all">
            {allToasts.slice(0, 3).map((toast) => (
                <Toast key={toast.id} id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => deleteToast(toast.id)} />
            ))}
        </div>
    );
};

export default ToastContainer;
