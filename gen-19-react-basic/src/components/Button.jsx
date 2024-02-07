import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      className="bg-pink-400 rounded-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 m-10 ring-1 ring-pink-800"
    >
      {props.buttonName}
    </button>
  );
}
