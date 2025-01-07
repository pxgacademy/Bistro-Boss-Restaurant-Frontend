import Swal from "sweetalert2";
import useSecureAPI from "./useSecureAPI";

const usePatch = () => {
  const secureAPI = useSecureAPI();

  const handleUpdate = ({
    link = false,
    data = {},
    questionTitle = 'Are you sure?',
    questionText = 'You are about to update a data',
    successTitle='Updated!',
    successText = 'The data has been updated successfully!',
    refetch = false,
  }) => {
    if (!link)
      return Swal.fire({
        title: "Error!",
        text: "Missing required link!",
        icon: "error",
        showConfirmButton: false,
        position: "center",
        timer: 2000,
      });

    Swal.fire({
      title: questionTitle,
      text: questionText,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await secureAPI.patch(link, data);
          if (refetch) refetch();
          Swal.fire({
            title: successTitle,
            text: successText,
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

  return handleUpdate;
};

export default usePatch;
