import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFetchData = (url, token = null) => {
  const axiosInstance = useAxios(token);

  const fetchData = async () => {
    const response = await axiosInstance.get(url);
    return response.data;
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [url],  
    queryFn: fetchData,
    refetchOnWindowFocus: true, 
    refetchInterval: 10000, 
    refetchOnMount: true, 
    cacheTime: 0, 
  });

  return { data, error, isLoading, refetch };
};

export default useFetchData;
