import React from "react";

export default function CardProductYML({ props }) {
  return (
    <div className="w-[250px] rounded-md flex-column m-5">
      <div>
        <img
          src={props.src}
          alt={props.name}
          className="hover:scale-75 w-auto"
        />
      </div>

      <div className="py-4 px-1 font-sans text-sm font-semibold">
        <a href="#">{props.name}</a>
      </div>
    </div>
  );
}
