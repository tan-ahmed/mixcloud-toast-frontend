import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FollowingResponse } from "../types/apiResponses";
import { TWO_MINUTES } from "../components/toast/shared";

const useGetUserFollowing = (username: string) => {
    const { isLoading, data, isFetching, error, isSuccess } = useQuery<FollowingResponse>({
        queryKey: ["userFollowing", username],
        staleTime: TWO_MINUTES,
        refetchInterval: TWO_MINUTES,
        enabled: !!username,
        queryFn: async () => {
            const response = await axios.get(`/${username}/following/?limit=10`).then((res) => res.data);
            return response;
        },
    });
    return { isLoading, data, isFetching, error, isSuccess };
};
export default useGetUserFollowing;
