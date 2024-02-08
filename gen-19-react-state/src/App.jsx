import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Bottom from "./layouts/Bottom";
import Product from "./pages/Product";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Product />
      <Bottom />
      <Footer />
    </>
  );
}
