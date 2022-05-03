import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

const RequireAuth = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};
export { RequireAuth };
