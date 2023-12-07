import React from "react";
import Toast from "./Toast";

interface ToastListProps {
    toasts: { id: number; title: string; description: string; picture: string }[];
    onDismiss: (id: number) => void;
}

const ToastList: React.FC<ToastListProps> = ({ toasts, onDismiss }) => {
    return (
        <div className="toast-list">
            {toasts.map((toast) => (
                <Toast key={toast.id} id={toast.id} title={toast.title} description={toast.description} picture={toast.picture} onClick={() => onDismiss(toast.id)} />
            ))}
        </div>
    );
};

export default ToastList;
