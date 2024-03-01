import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoutes() {
  const isAdmin = useSelector(
    (state) => state.auth.token !== "" && state.auth.isAdmin
  );

  console.log(isAdmin);
  if (isAdmin) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
}
