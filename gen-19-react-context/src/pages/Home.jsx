import React from "react";
import Banner from "../components/home/Banner";
import ProductList from "../components/home/ProductList";
import Button from "../components/Button";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Bottom from "../layouts/Bottom";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <ProductList />

      <div className="flex justify-center">
        <Button buttonName={"View More"} />
      </div>

      <Bottom />
      <Footer />
    </>
  );
}
