import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";
import { useContextValue } from "./useContextValue";

const useIsAdmin = () => {
  const secureAPI = useSecureAPI();
  const { user } = useContextValue();

  const { data, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const { data } = await secureAPI.get(`/users/admin/${user?.email}`);
      return data.admin;
    },
    initialData: false,
  });

  return [data, isLoading];
};

export default useIsAdmin;
