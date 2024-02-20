import React from "react";

export default function Card({ name, mainPicture, priceDiscount, onClick }) {
  return (
    <div
      className="w-[250px] rounded-md border flex-column m-5 cursor-pointer"
      onClick={onClick}
    >
      <div>
        <img
          src={mainPicture}
          alt={name}
          className="hover:scale-75 w-[300px] h-[200px]"
        />
      </div>

      <div className="py-4 px-1 flex-column font-sans">
        <div className="text-base font-semibold">{name}</div>
        <p className="py-3 px-1 text-sm text-pink-600">{priceDiscount}</p>
      </div>
    </div>
  );
}
