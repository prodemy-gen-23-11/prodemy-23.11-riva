import React, { useState } from "react";
import Button from "../Button";

export default function AddToCard() {
  const [count, setCount] = useState(0);

  function handleClickPlus() {
    setCount(count + 1);
  }
  function handleClickMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex justify-start">
      <div className="flex items-center border-2 bg-white border-[#f08080] rounded-lg w-40 h-16 justify-evenly m-10">
        <button
          onClick={handleClickMinus}
          className="fa fa-minus hover:scale-75"
        ></button>
        <span>{count}</span>
        <div>
          <button
            onClick={handleClickPlus}
            className="fa fa-plus hover:scale-75"
          ></button>
        </div>
      </div>

      <div className="flex justify-center">
        <Button buttonName={"Add   To   Card"} />
      </div>
    </div>
  );
}
