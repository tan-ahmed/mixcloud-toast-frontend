// Home.tsx
import Layout from "../components/layout/Layout";

import useGetUserFollowing from "../hooks/useGetFollowing";
import { useToast } from "../hooks/useToast";

const Home = () => {
    const username = "spartacus";
    const { data, isLoading, error, isSuccess } = useGetUserFollowing(username);
    const { addToast } = useToast();

    // I didn't quite understand this, maybe the code below solves this?
    // When the user loads the page, the notifications should load without any further user interaction

    // useEffect(() => {
    //     if (isSuccess && data && data.data.length > 0) {
    //         const delay = 1000; // 1 second
    //         for (let i = 0; i < data.data.length; i++) {
    //             setTimeout(() => {
    //                 const userData = data.data[i];
    //                 addToast({ title: userData.username, picture: userData.pictures.medium_mobile });
    //             }, i * delay);
    //         }
    //     }
    // }, [isSuccess]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <Layout>
            <div className="container space-y-5 my-6">
                <h1 className="font-bold text-xl">Open a toast by clicking the buttons below</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {isSuccess &&
                        data?.data.map((user) => (
                            <button type="button" key={user.key} onClick={() => addToast({ title: user.username, picture: user.pictures.medium_mobile })} className="p-1 rounded border">
                                <div className="flex items-center space-x-2">
                                    <img className="w-10 h-10 rounded-full" src={user.pictures.medium_mobile} alt={user.username} loading="lazy" />
                                    <div className="text-gray-800 text-base leading-snug">Open toast for {user.username}</div>
                                </div>
                            </button>
                        ))}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
