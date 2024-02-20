import React from "react";
import Card from "./Card.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function ProductList() {
  const navigate = useNavigate();

  const onClickCard = (id) => {
    navigate(`/product/${id}`);
  };

  const getProduct = (url) => axios.get(url).then((response) => response.data);

  const { data } = useSWR(
    "http://localhost:3000/descriptionProduct",
    getProduct
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-evenly">
        {data?.map(({ id, name, priceDiscount, mainPicture }) => (
          <Card
            name={name}
            mainPicture={mainPicture}
            priceDiscount={priceDiscount}
            key={id}
            onClick={() => onClickCard(id, name)}
          />
        ))}
      </div>
    </div>
  );
}
