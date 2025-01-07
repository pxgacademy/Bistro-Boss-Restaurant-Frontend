import { useQuery } from "@tanstack/react-query";
import usePublicAPI from "./usePublicAPI";

const useAPI_Loader = (link, key = "") => {
  const publicAPI = usePublicAPI();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [key, link],
    queryFn: async () => {
      const { data } = await publicAPI.get(`/${link}`);
      return data;
    },
    initialData: [],
  });

  return [data, isLoading, refetch, error];
};

export default useAPI_Loader;
