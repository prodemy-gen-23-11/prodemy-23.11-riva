import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import GuestRoutes from "./route/GuestRoutes";
import PrivateRoutes from "./route/PrivateRoutes";
import AdminRoutes from "./route/AdminRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<GuestRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      <Route element={<AdminRoutes />}>
        <Route path="/admin" element={<Admin />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}
