import { useMutation } from "@tanstack/react-query";
import { useAPI_LINK } from "./useAPI_LINKS";
import Swal from "sweetalert2";

const useCreateUser = () => {
  const API_LINK = useAPI_LINK();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (value) => {
      await API_LINK.post("/users", value);
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
