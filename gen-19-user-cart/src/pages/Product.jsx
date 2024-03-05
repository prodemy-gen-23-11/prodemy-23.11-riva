import React from "react";
import Dot from "../components/Dot";
import ProductYouMightLike from "../components/product/ProductYouMightLike";
import DescriptionProduct from "../components/product/DescriptionProduct";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Bottom from "../layouts/Bottom";

export default function Product() {
  return (
    <>
      <Header />
      <Navbar />
      <DescriptionProduct />

      <div className="pt-20">
        <ProductYouMightLike />
      </div>

      <Dot />
      <Bottom />
      <Footer />
    </>
  );
}
