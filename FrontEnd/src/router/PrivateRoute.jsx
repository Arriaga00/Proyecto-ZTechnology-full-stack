import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = window.localStorage.getItem("loguinUser");
  if (!user) return <Navigate to="/auth" />;
  return <Outlet />;
};

export default PrivateRoute;
