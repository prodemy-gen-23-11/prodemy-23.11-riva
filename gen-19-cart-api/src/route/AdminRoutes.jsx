import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoutes() {
  const { token, isAdmin } = useSelector((state) => state.auth);

  if (token && isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}
