import React from "react";
import Dot from "../components/Dot";
import ProductYouMightLike from "../components/product/ProductYouMightLike";
import DescriptionProduct from "../components/product/DescriptionProduct";
import ProductPictures from "../components/product/ProductPictures";

export default function Product() {
  return (
    <>
      <div className="grid grid-cols-2 p-5 py-0 bg-pink-100">
        <ProductPictures />
        <DescriptionProduct />
      </div>
      <div className="pt-20">
        <ProductYouMightLike />
      </div>

      <Dot />
    </>
  );
}
