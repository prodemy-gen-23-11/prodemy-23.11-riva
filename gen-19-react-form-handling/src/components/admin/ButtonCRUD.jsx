import React from "react";

export default function ButtonCRUD(props) {
  const buttonCRUD = "Button";
  return (
    <button
      type="button"
      className="bg-pink-800 rounded-lg p-2 w-48 h-14 font-bold text-white shadow-sm hover:bg-pink-500 ring-1 m-2 ring-pink-900"
    >
      {props.buttonCRUD}
    </button>
  );
}
