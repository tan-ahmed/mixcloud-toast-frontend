// ToastContainer.tsx
import { AnimatePresence, motion } from "framer-motion";
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import { useToast } from "../../hooks/useToast";

const ToastContainer = () => {
    const { allToasts, deleteToast } = useToast();

    return (
        <AnimatePresence>
            <div className="fixed top-24 right-3 z-50">
                {allToasts.slice(0, 3).map((toast) => (
                    <motion.div key={toast.id} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
                        <Toast id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => deleteToast(toast.id)} />
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    );
};

export default ToastContainer;
