// ToastContainer.tsx
import { AnimatePresence, motion } from "framer-motion";
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import { useToast } from "../../hooks/useToast";

const ToastContainer = () => {
    const { allToasts, deleteToast } = useToast();

    const toastVariants = {
        hidden: { opacity: 0, transform: "translateY(16px)" },
        visible: { opacity: 1, transform: "translateY(0)" },
        exit: { opacity: 0, transform: "translateY(-16px)", transition: { duration: 0.25 } },
    };

    return (
        <AnimatePresence>
            <div className="fixed top-24 right-3 z-50">
                {allToasts.slice(0, 3).map((toast) => (
                    <motion.div key={toast.id} variants={toastVariants} initial="hidden" animate="visible" exit="exit">
                        <Toast id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => deleteToast(toast.id)} />
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    );
};

export default ToastContainer;
