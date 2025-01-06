import PropTypes from "prop-types";
import Button from "../../../components/button/Button";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextValue } from "../../../hooks/useContextValue";

import Swal from "sweetalert2";
import MiniLoading from "../../../components/loading/MiniLoading";
import useSecureAPI from "../../../hooks/useSecureAPI";
import useCart from "../../../hooks/useCart";

const ShopCard = ({ item }) => {
  const navigate = useNavigate();
  const { user } = useContextValue();
  const [, , refetch] = useCart();
  const { pathname } = useLocation();
  const secureAPI = useSecureAPI();
  const { _id, image, name, recipe } = item || {};

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (value) => {
      await secureAPI.post("/carts", value);
    },
    onSuccess: () => {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item added to cart successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    onError: (error) =>
      Swal.fire({
        title: error.message,
        icon: "error",
      }),
  });

 

  const handleDataSend = () => {
    if (!user) {
      Swal.fire({
        title: "You are not logged in!",
        text: "You need to be logged in to add items to cart!",
        icon: "info",
        confirmButtonText: "Login!",
        cancelButtonText: "Cancel",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed)
          navigate("/login", { state: { goTo: pathname } });
      });
      return;
    }
    const data = {
      menuId: _id,
      customer_email: user?.email,
    };
    mutateAsync(data);
  };

  if (isPending) return <MiniLoading />;

  return (
    <div className="bg-[#F3F3F3] group text-center flex flex-col items-center pb-6">
      <div className="w-full h-80 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={image}
          alt="chef recommends"
        />
      </div>
      <div className="p-6 grow">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-darkThree mt-2 mb-4">{recipe}</p>
      </div>
      <Button onClick={handleDataSend}>Add to cart</Button>
    </div>
  );
};

ShopCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShopCard;
