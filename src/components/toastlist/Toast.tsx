import { useCallback, useEffect } from "react";

import styles from "./Toast.module.css";

interface ToastProps {
    toastlist: {
        id: string;
        title: string;
        description: string;
        backgroundColor: string;
    }[];
    position: string;
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

const Toast = ({ toastlist, position, setList }: ToastProps) => {
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
        <div className={`${styles.container} ${styles[position]}`}>
            {toastlist.map((toast, i) => (
                <div key={i} className={`${styles.notification} ${styles.toast} ${styles[position]}`} style={{ backgroundColor: toast.backgroundColor }}>
                    <button onClick={() => deleteToast(toast.id)}>X</button>
                    <div>
                        <p className={styles.title}>{toast.title}</p>
                        <p className={styles.description}>{toast.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Toast;
