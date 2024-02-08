import React from "react";
import { productYouMightLike } from "../../data/product/ProductYouMightLike";
import CardProductYML from "./CardProductYML";

export default function ProductYouMightLike() {
  return (
    <div className="flex flex-wrap justify-center">
      {productYouMightLike.map((productYouMightLike) => {
        return (
          <CardProductYML
            props={productYouMightLike}
            key={productYouMightLike.id}
          />
        );
      })}
    </div>
  );
}
