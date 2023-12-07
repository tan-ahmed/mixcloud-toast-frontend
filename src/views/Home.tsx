import { useState } from "react";
import Layout from "../components/layout/Layout";

import useGetUserFollowing from "../hooks/useGetFollowing";
import Button from "../components/button/Button";
import ToastContainer from "../components/toast-container/ToastContainer";

interface ToastProperties {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
}

const Home = () => {
    const { data, isLoading, error } = useGetUserFollowing("spartacus");

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    const [list, setList] = useState<ToastProperties[]>([]); // Set the initial state with the type

    let toastProperties: ToastProperties | null = null;

    const showToast = (type: string) => {
        switch (type) {
            case "success":
                toastProperties = {
                    id: list.length + 1,
                    title: "Success",
                    description: "This is a success toast component",
                    backgroundColor: "#5cb85c",
                };
                break;
            case "danger":
                toastProperties = {
                    id: list.length + 1,
                    title: "Danger",
                    description: "This is a danger toast component",
                    backgroundColor: "#d9534f",
                };
                break;

            default:
                toastProperties = [];
        }
        setList([...list, toastProperties]);
    };

    return (
        <Layout>
            <div className="container space-y-5 my-6">
                <h1 className="font-bold text-xl">Following</h1>

                <Button handleClick={() => showToast("success")}>Success</Button>
                <Button handleClick={() => showToast("danger")}>Danger</Button>

                <ToastContainer toastlist={list} setList={setList} />

                {data &&
                    data.data.length > 0 &&
                    data?.data.map((user) => (
                        <button key={user.key} onClick={() => showToast("success")} type="button">
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
