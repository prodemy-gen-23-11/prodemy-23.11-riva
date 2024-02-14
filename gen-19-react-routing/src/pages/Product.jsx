import React from "react";
import Dot from "../components/Dot";
import ProductYouMightLike from "../components/product/ProductYouMightLike";
import DescriptionProduct from "../components/product/DescriptionProduct";

export default function Product() {
  return (
    <>
      <DescriptionProduct />

      <div className="pt-20">
        <ProductYouMightLike />
      </div>

      <Dot />
    </>
  );
}
