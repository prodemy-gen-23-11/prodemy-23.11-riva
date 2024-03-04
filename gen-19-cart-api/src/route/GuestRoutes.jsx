import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes() {
  const isLogin = useSelector((state) => state.auth.token !== "");
  const isAdmin = useSelector(
    (state) => state.auth.token !== "" && state.auth.isAdmin
  );

  if (isLogin) {
    return isAdmin ? <Navigate to="/admin" /> : <Navigate to="/" />;
  }

  return <Outlet />;
}
