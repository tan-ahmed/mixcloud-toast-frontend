import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Profile = () => {
    const { username } = useParams();

    return (
        <Layout>
            <div className="text-center p-6">
                <h1 className="mb-1 text-lg text-grey-400 text-gray-500">Profile of {username}</h1>
            </div>
        </Layout>
    );
};

export default Profile;
