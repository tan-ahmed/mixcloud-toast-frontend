import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FollowingResponse } from "../types/apiResponses";

const TWO_MINUTES = 60 * 2000;

const useGetUserFollowing = (username: string) => {
    const { isLoading, data, isFetching, error } = useQuery<FollowingResponse>({
        queryKey: ["userFollow", username],
        staleTime: TWO_MINUTES,
        refetchInterval: TWO_MINUTES,
        enabled: !!username,
        queryFn: async () => {
            const response = await axios.get(`/${username}/following/?limit=10`).then((res) => res.data);
            return response;
        },
    });
    return { isLoading, data, isFetching, error };
};
export default useGetUserFollowing;
