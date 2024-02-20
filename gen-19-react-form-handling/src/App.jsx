import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
