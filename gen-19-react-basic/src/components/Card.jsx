import React from "react";

export default function Card({ props }) {
  return (
    <div class="w-[250px] rounded-md border flex-column m-5">
      <div>
        <img
          src={props.src}
          alt={props.name}
          className="hover:scale-75 w-auto"
        />
      </div>

      <div className="py-4 px-1 flex-column font-sans">
        <a href="#" className="text-base font-semibold">
          {props.name}
        </a>
        <p className="py-3 px-1 text-sm text-pink-600">{props.price}</p>
      </div>
    </div>
  );
}
