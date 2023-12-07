// ToastList.tsx
import { useState, useCallback, useEffect } from "react";
import Toast from "./Toast";
import blankDp from "../../assets/blank-dp.png";
import useGetUserFollowing from "../../hooks/useGetFollowing";

export interface ToastProps {
    id: number;
    title: string;
    picture?: string;
}

const ToastList = () => {
    const [allToasts, setAllToasts] = useState<ToastProps[]>([]);
    const { data, isLoading, error } = useGetUserFollowing("spartacus");

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
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [allToasts, deleteToast]);

    const addToast = ({ title, picture }: Omit<ToastProps, "id">) => {
        const newId = Date.now(); // Use a unique identifier, for example, timestamp
        const newToast = {
            id: newId,
            title,
            picture,
        };

        setAllToasts((prevList) => [...prevList, newToast]);
    };

    return (
        <div>
            {data &&
                data.data.length > 0 &&
                data?.data.map((user) => (
                    <button type="button" key={user.key} onClick={() => addToast({ title: user.username, picture: user.pictures.medium_mobile })}>
                        <div className="flex items-center space-x-2">
                            <img className="w-10 h-10 rounded-full" src={user.pictures.medium_mobile} alt={user.username} loading="lazy" />
                            <div className="text-gray-800 text-base leading-snug">{user.username}</div>
                        </div>
                    </button>
                ))}

            {allToasts.map((toast) => (
                <Toast key={toast.id} id={toast.id} title={toast.title} picture={toast.picture || blankDp} onClose={() => deleteToast(toast.id)} />
            ))}
        </div>
    );
};

export default ToastList;
