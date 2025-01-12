import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";
import { useContextValue } from "./useContextValue";

const useCart = () => {
  const secureAPI = useSecureAPI();
  const { user } = useContextValue();

  const { data, error, refetch, isLoading } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const { data } = await secureAPI.get(`/carts?query=${user?.email}`);
      return data;
    },
    // onError: (error) => {
    //   console.error("Error fetching cart data:", error);
    // },
    enabled: !!user?.email,
    initialData: [],
  });

  return [data, isLoading, refetch, error];
};

export default useCart;
