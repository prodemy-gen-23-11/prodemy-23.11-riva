import React from "react";
import { productYouMightLike } from "../../data/product/ProductYouMightLike";
import CardProductYML from "./CardProductYML";

export default function ProductYouMightLike() {
  return (
    <div>
      <div className="flex justify-center text-base font-sans font-bold p-10 pb-5">
        You might like
      </div>
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
    </div>
  );
}
