import useSecureAPI from "./useSecureAPI";
import Swal from "sweetalert2";

const useDelete = () => {
  const secureAPI = useSecureAPI();

  const handleDelete = ({ link, item_name = "Your data", refetch = false }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await secureAPI.delete(link);
          if (data.deletedCount <= 0)
            return Swal.fire({
              title: "Error!",
              text: "Data can not delete!",
              icon: "error",
            });
          if (refetch) refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item_name} has been deleted.`,
            icon: "success",
            showConfirmButton: false,
            position: "center",
            timer: 2000,
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: error.message,
            icon: "error",
          });
        }
      }
    });
  };

  return handleDelete;
};

export default useDelete;
