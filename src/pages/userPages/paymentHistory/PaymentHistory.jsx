import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";
import { useContextValue } from "../../../hooks/useContextValue";
import useSecureAPI from "../../../hooks/useSecureAPI";
import Loading from "../../../components/loading/Loading";

const PaymentHistory = () => {
  const { user } = useContextValue();
  const secureAPI = useSecureAPI();

  const { data: histories, isLoading } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const { data } = await secureAPI.get(`/payment-history/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  console.log(histories);

  if (isLoading) return <Loading />;

  return (
    <DashboardContainer
      title="Wanna Add More?"
      subTitle="My Cart"
      styles="max-w-[370px]"
    >
      <div className="p-5 md:p-10 bg-white mt-10 rounded">
        <h3 className="font-bold text-xl font-Cinzel">
          Total Payments: {histories?.length}
        </h3>

        <div className="overflow-x-auto rounded-t-2xl mt-5">
          <table className="table table-zebra font-poppins normal-case cursor-default">
            {/* head */}
            <thead className=" bg-primaryColor text-white">
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>TrxID</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((history, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{new Date(history.date).toLocaleDateString("en-US")}</td>
                  <td>{history.trx_id}</td>
                  <td>$ {history.total_price}</td>
                  <td
                    className={`${
                      history.status === "pending"
                        ? "text-red-500"
                        : "text-success"
                    }`}
                  >
                    {history.status}
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

export default PaymentHistory;
