import React from "react";
import Category from "../components/navbar/Category";
import { category } from "../data/Categories";

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-8 text-sm font-sans font-bold p-5 sticky top-0 bg-white">
      {category.map((category) => {
        return <Category props={category} key={category.id} />;
      })}
    </div>
  );
}
