import React from "react";
import Card from "./Card.jsx";
import { useNavigate } from "react-router-dom";
import { descriptionProduct } from "../../data/DescriptionProduct.js";

export default function ProductList() {
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {descriptionProduct.map(({ id, name, priceDiscount, mainPicture }) => (
        <Card
          name={name}
          mainPicture={mainPicture}
          priceDiscount={priceDiscount}
          key={id}
          onClick={() => onClick(id, name)}
        />
      ))}
    </div>
  );
}
