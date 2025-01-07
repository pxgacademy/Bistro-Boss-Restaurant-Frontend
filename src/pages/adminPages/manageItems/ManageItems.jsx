import Swal from "sweetalert2";
import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";
import Loading from "../../../components/loading/Loading";
import useAPI_Loader from "../../../hooks/useAPI_Loader";
import useDelete from "../../../hooks/useDelete";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [items, isLoading, refetch, error] = useAPI_Loader("menu", "menu");
  const handleDelete = useDelete();

  if (error)
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
    });

  if (isLoading) return <Loading />;

  return (
    <DashboardContainer title="Manage all Items" subTitle="Hurry up!">
      <section className="max-w-[1000px] mx-auto bg-white p-5 lg:p-10 mt-10">
        <h3 className="font-Cinzel text-2xl font-bold">
          Total Items: {items.length}
        </h3>

        <div className="overflow-x-auto rounded-t-2xl mt-5">
          <table className="table table-zebra font-poppins normal-case">
            {/* head */}
            <thead className=" bg-primaryColor text-white uppercase font-normal">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th className="text-right">Price</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      className="w-12 h-12 object-cover rounded"
                      src={item.image}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">$ {item.price}</td>
                  <td className="text-center">
                    <Link to={`/dashboard/manage-items/update/${item._id}`}>
                      <button className="btn bg-primaryColor hover:bg-primaryColor/80 text-white">
                        <FaRegEdit />
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() =>
                        handleDelete({
                          link: `/menu/${item._id}`,
                          item_name: item.name,
                          refetch,
                        })
                      }
                      className="btn bg-red-500 hover:bg-red-600  text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardContainer>
  );
};

export default ManageItems;
