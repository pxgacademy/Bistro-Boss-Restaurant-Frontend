import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";
import { useContextValue } from "../../../hooks/useContextValue";

const UserHome = () => {
  const { user } = useContextValue();
  return (
    <DashboardContainer>
      <p className="font-Cinzel uppercase font-semibold text-2xl">
        Welcome {user?.displayName ? user.displayName : "Back!"}
      </p>
    </DashboardContainer>
  );
};

export default UserHome;
