// ToastContainer.tsx
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import { useToast } from "../../hooks/useToast";

const ToastContainer = () => {
    const { allToasts, addToast, deleteToast } = useToast();
    console.log(allToasts, "allToasts ToastContainer");

    return (
        <div className="fixed top-4 right-3 z-50 transition-all">
            <button type="button" onClick={() => addToast({ title: "tan" })} className="p-1 rounded shadow">
                <div className="flex items-center space-x-2">
                    <div className="text-gray-800 text-base leading-snug">Open toast for test</div>
                </div>
            </button>
            {allToasts.slice(0, 3).map((toast) => (
                <Toast key={toast.id} id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => deleteToast(toast.id)} />
            ))}
        </div>
    );
};

export default ToastContainer;
