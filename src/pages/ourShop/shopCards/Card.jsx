import PropTypes from "prop-types";
import Button from "../../../components/button/Button";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextValue } from "../../../hooks/useContextValue";
import { useAPI_LINK } from "../../../hooks/useAPI_LINKS";
import Swal from "sweetalert2";
import MiniLoading from "../../../components/loading/MiniLoading";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { user } = useContextValue();
  const { pathname } = useLocation();
  const API_LINK = useAPI_LINK();
  const { _id, image, name, recipe } = item || {};

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (value) => {
      await API_LINK.post("/order-foods", value);
    },
    onSuccess: () => {
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
      navigate("/login", { state: { goTo: pathname } });
      return;
    }
    const data = {
      menuId: _id,
      customer: { name: user?.displayName, email: user?.email },
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

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
