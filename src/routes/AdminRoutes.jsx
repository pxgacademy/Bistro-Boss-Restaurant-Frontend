import PropTypes from "prop-types";
import Loading from "../components/loading/Loading";
import useIsAdmin from "../hooks/useIsAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { useContextValue } from "../hooks/useContextValue";

const AdminRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const { user, loading } = useContextValue();
  const [isAdmin, isLoading] = useIsAdmin();

  if (isLoading || loading) return <Loading />;
  if (isAdmin && user) return children;
  return <Navigate state={{ goTo: pathname }} to="/login" replace />;
};

AdminRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoutes;
