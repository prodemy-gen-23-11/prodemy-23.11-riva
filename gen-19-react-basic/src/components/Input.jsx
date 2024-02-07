import React from "react";

export default function Input(props) {
  return (
    <div className="w-24 md:w-64">
      <input
        className="flex h-8 w-full rounded-md bg-white border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black italic text-gray-600"
        type={props.inputName}
        placeholder={props.inputName}
      />
    </div>
  );
}
