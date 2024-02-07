import React from "react";
import Card from "../components/Card";
import { product } from "../data/Product.js";

export default function Content() {
  return (
    <div className="flex flex-wrap justify-evenly">
      {product.map((product) => {
        return <Card props={product} key={product.id} />;
      })}
    </div>
  );
}
