// Home.tsx
import { useState } from "react";
import Layout from "../components/layout/Layout";

import useGetUserFollowing from "../hooks/useGetFollowing";
import ToastList from "../components/toast/ToastList";

export interface ToastProps {
    id: number;
    title: string;
    picture?: string;
}

const Home = () => {
    const { data, isLoading, error } = useGetUserFollowing("spartacus");
    const [allToasts, setAllToasts] = useState<ToastProps[]>([]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

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
        <Layout>
            <div className="container space-y-5 my-6">
                <h1 className="font-bold text-xl">Following</h1>
                <ToastList allToasts={allToasts} setAllToasts={setAllToasts} />

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
            </div>
        </Layout>
    );
};

export default Home;
