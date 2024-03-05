import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const isNotLogin = useSelector((state) => state.auth.token === "");
  const isUser = useSelector(
    (state) => state.auth.token !== "" && state.auth.user.role === "user"
  );

  if (isNotLogin) {
    return <Navigate to="/login" />;
  } else if (!isNotLogin && isUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
