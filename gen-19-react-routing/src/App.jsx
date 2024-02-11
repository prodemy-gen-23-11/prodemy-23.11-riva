import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Bottom from "./layouts/Bottom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>

        <Bottom />
        <Footer />
      </BrowserRouter>
    </>
  );
}
