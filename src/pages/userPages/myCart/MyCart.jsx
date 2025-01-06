import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../components/loading/Loading";
import useCart from "../../../hooks/useCart";
import useDelete from "../../../hooks/useDelete";
import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";

const MyCart = () => {
  const [carts, isLoading, refetch] = useCart();
  const totalPrice = carts.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  const handleDelete = useDelete();

  if (isLoading) return <Loading />;
  return (
    <DashboardContainer title="Wanna Add More?" subTitle="My Cart" styles='max-w-[370px]'>

      <div className="p-5 md:p-10 bg-white mt-10 rounded">
        <div className="uppercase flex items-center justify-between font-bold text-xl">
          <h3>Total Orders: {carts.length}</h3>
          <h3>Total Price: $ {totalPrice}</h3>
          <button className="bg-primaryColor hover:bg-primaryColor/80 active:scale-95 active:translate-y-1 text-white px-6 py-2 font-semibold text-base rounded-md">
            Pay
          </button>
        </div>

        <div className="overflow-x-auto rounded-t-2xl mt-5">
          <table className="table table-zebra font-poppins normal-case">
            {/* head */}
            <thead className=" bg-primaryColor text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th className="text-right">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      className="w-14 h-14 object-cover rounded-2xl"
                      src={cart.image}
                      alt=""
                    />
                  </td>
                  <td>{cart.name}</td>
                  <td className="text-right">$ {cart.price}</td>
                  <td className="text-center">
                    <button
                      onClick={() =>
                        handleDelete({
                          link: `/carts/${cart._id}`,
                          item_name: cart.name,
                          refetch,
                        })
                      }
                      className="btn btn-error  text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default MyCart;
