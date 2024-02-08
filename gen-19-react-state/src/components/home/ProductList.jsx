import React from "react";
import Card from "./Card.jsx";
import { productList } from "../../data/home/ProductList.js";

export default function ProductList() {
  return (
    <div className="flex flex-wrap justify-evenly">
      {productList.map((productList) => {
        return <Card props={productList} key={productList.id} />;
      })}
    </div>
  );
}
