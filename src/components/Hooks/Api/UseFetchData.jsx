import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFetchData = (url, token = null, requiresAuth = false) => {
  const axiosInstance = useAxios(token);

  const fetchData = async () => {
    const response = await axiosInstance.get(url);
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [url],
    queryFn: fetchData,
    enabled: !requiresAuth || (requiresAuth && !!token), // Only fetch if no auth needed OR token is present
    retry: (failureCount, error) => {
      if (error?.response?.status === 401) return false;
      return failureCount < 3;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 5,
  });

  return { data, error, isLoading };
};

export default useFetchData;
