import { useMutation } from "@tanstack/react-query";

import Swal from "sweetalert2";
import usePublicAPI from "./usePublicAPI";

const useCreateUser = () => {
  const publicAPI = usePublicAPI();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (value) => {
      await publicAPI.post("/users", value);
    },
    onError: (error) =>
      Swal.fire({
        title: error.message,
        icon: "error",
      }),
  });

  const handleCreateUser = async (data) => {
    await mutateAsync(data);
  };

  return [handleCreateUser, isPending];
};

export default useCreateUser;
