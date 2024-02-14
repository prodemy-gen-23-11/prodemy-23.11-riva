import React from "react";

export default function Button(props) {
  const buttonName = "Button";
  return (
    <button
      type="button"
      className="bg-pink-400 rounded-sm px-7 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 ring-1 m-10 ring-pink-800"
    >
      {props.buttonName}
    </button>
  );
}
