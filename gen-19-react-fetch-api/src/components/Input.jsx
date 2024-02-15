import React from "react";

export default function Input(props) {
  const inputName = "Text";
  return (
    <div className="w-24 md:w-64">
      <input
        className="flex w-full rounded-md bg-white border border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black italic"
        type={props.inputName}
        placeholder={props.inputName}
      />
    </div>
  );
}
