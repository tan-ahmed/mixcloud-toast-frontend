// Home.tsx
import Layout from "../components/layout/Layout";

import useGetUserFollowing from "../hooks/useGetFollowing";
import { useToast } from "../hooks/useToast";

const Home = () => {
    const username = "spartacus";
    const { data, isLoading, error } = useGetUserFollowing(username);
    const { addToast, allToasts } = useToast();
    console.log(allToasts, "home allToasts");

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <Layout>
            <div className="container space-y-5 my-6">
                <h1 className="font-bold text-xl">{username}</h1>

                <button type="button" onClick={() => addToast({ title: "tan" })} className="p-1 rounded shadow">
                    <div className="flex items-center space-x-2">
                        <div className="text-gray-800 text-base leading-snug">Open toast for tan</div>
                    </div>
                </button>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-3">
                    {data &&
                        data.data.length > 0 &&
                        data?.data.map((user) => (
                            <button type="button" key={user.key} onClick={() => addToast({ title: user.username, picture: user.pictures.medium_mobile })} className="p-1 rounded shadow">
                                <div className="flex items-center space-x-2">
                                    <img className="w-10 h-10 rounded-full" src={user.pictures.medium_mobile} alt={user.username} loading="lazy" />
                                    <div className="text-gray-800 text-base leading-snug">Open toast for {user.username}</div>
                                </div>
                            </button>
                        ))}
                </div> */}
            </div>
        </Layout>
    );
};

export default Home;
