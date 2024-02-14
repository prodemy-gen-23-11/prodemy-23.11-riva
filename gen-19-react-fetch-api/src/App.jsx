import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Bottom from "./layouts/Bottom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      <Bottom />
      <Footer />
    </>
  );
}
