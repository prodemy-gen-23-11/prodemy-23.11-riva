import React from "react";
import Banner from "../components/home/Banner";
import ProductList from "../components/home/ProductList";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductList />

      <div className="flex justify-center">
        <Button buttonName={"View More"} />
      </div>
    </>
  );
}
