import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFetchData = (url, token = null) => {
  const axiosInstance = useAxios(token);

  const fetchData = async () => {
    const response = await axiosInstance.get(url);
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [url],
    queryFn: fetchData,
  });
  return { data, error, isLoading };
};

export default useFetchData;
