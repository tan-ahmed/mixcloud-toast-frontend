// ToastContainer.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import { useToast } from "../../hooks/useToast";
import { ANIMATION_DURATION } from "./shared";

const TOAST_HEIGHT = 16;

const ToastContainer = () => {
    const { allToasts, deleteToast } = useToast();
    const [clickedToast, setClickedToast] = useState<number | null>(null);

    const toastVariants = {
        hidden: { opacity: 0, y: TOAST_HEIGHT },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -TOAST_HEIGHT * 2, transition: { duration: ANIMATION_DURATION / 1000 } },
    };

    const handleToastClick = (id: number) => {
        setClickedToast(id);
        setTimeout(() => {
            deleteToast(id);
            setClickedToast(null);
        }, ANIMATION_DURATION);
    };

    return (
        <AnimatePresence>
            <div className="fixed top-24 right-3 z-50">
                {allToasts.slice(0, 3).map((toast) => (
                    <motion.div key={toast.id} variants={toastVariants} initial="hidden" animate={clickedToast === toast.id ? "exit" : "visible"} exit="exit">
                        <Toast id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => handleToastClick(toast.id)} />
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    );
};

export default ToastContainer;
