import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useAPI_Loader = (link, key = "") => {
  const secureAPI = useSecureAPI();

  const { data, error, isPending, refetch } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await secureAPI.get(`/${link}`);
      return data;
    },
    // onError: (error) => {
    //   console.error("Error fetching cart data:", error);
    // },
    initialData: [],
  });

  return [data, isPending, refetch, error];
};

export default useAPI_Loader;
