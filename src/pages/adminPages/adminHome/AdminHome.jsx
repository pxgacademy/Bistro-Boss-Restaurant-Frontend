import { GiTakeMyMoney } from "react-icons/gi";
import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";
import { useContextValue } from "../../../hooks/useContextValue";
import { FaTruckMoving, FaUsers } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import useAPI_Loader from "../../../hooks/useAPI_Loader";
import Loading from "../../../components/loading/Loading";
import BarChart from "./barChart/BarChart";
import PieChart from "./pieChart/PieChart";



const AdminHome = () => {
  const { user } = useContextValue();
  const [data, isLoading] = useAPI_Loader("admin-analytics", "admin-analytics");

  if (isLoading) return <Loading />;
  return (
    <DashboardContainer>
      <p className="font-Cinzel uppercase font-semibold text-2xl">
        Welcome {user?.displayName ? user.displayName : "Back!"}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6 text-white cursor-default">
        <div className="flex items-center gap-x-5 p-5 rounded-lg bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
          <GiTakeMyMoney className="text-5xl" />
          <div>
            <span className="text-4xl font-semibold">{data.revenue}</span>
            <p>Revenue</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5 p-5 rounded-lg bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
          <FaUsers className="text-5xl" />
          <div>
            <span className="text-4xl font-semibold">{data.users}</span>
            <p>Customers</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5 p-5 rounded-lg bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
          <IoCart className="text-5xl" />
          <div>
            <span className="text-4xl font-semibold">{data.items}</span>
            <p>Products</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5 p-5 rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
          <FaTruckMoving className="text-5xl" />
          <div>
            <span className="text-4xl font-semibold">{data.orders}</span>
            <p>Orders</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
       <BarChart/>
       <PieChart/>
      </div>
    </DashboardContainer>
  );
};

export default AdminHome;
