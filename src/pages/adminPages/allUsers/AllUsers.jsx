import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";
import useSecureAPI from "../../../hooks/useSecureAPI";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import useDelete from "../../../hooks/useDelete";
import Loading from "../../../components/loading/Loading";
import usePatch from "../../../hooks/usePatch";

const AllUsers = () => {
  // const { user } = useContextValue();
  const secureAPI = useSecureAPI();
  const handleDelete = useDelete();
  const handleUpdate = usePatch();

  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await secureAPI.get(`/users`);
      return data;
    },
    initialData: [],
  });

  const handleUpdateAdmin = () => {
    handleUpdate({});
  };

  if (isLoading) return <Loading />;

  return (
    <DashboardContainer title="Manage All Users" subTitle="How many??">
      <section className="max-w-[1000px] mx-auto bg-white p-5 lg:p-10 mt-10">
        <h3 className="font-Cinzel text-2xl font-bold">
          Total Users: {users.length}
        </h3>

        <div className="overflow-x-auto rounded-t-2xl mt-5">
          <table className="table table-zebra font-poppins normal-case">
            {/* head */}
            <thead className=" bg-primaryColor text-white uppercase font-normal">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th className="text-center">Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-center">
                    <button
                      onClick={() =>
                        handleUpdate({
                          link: `/users/admin/${user._id}`,
                          data: { role: "admin" },
                          questionText: `You want to admin to ${user.email}`,
                          successText: `${user.name} is admin now!`,
                          refetch,
                        })
                      }
                      className={`btn disabled:bg-green-500 disabled:text-white ${
                        user.role === "admin"
                          ? "btn-success text-white"
                          : "btn-secondary"
                      }`}
                      disabled={
                        user.role === "admin" && user.role !== "super-admin"
                      }
                    >
                      {user.role === "admin" ? (
                        <MdAdminPanelSettings />
                      ) : (
                        <FaUser />
                      )}
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() =>
                        handleDelete({
                          link: `/users/${user._id}`,
                          item_name: user.email,
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

export default AllUsers;
