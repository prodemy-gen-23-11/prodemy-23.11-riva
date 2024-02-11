import React from "react";
import { Link } from "react-router-dom";

export default function Card({ props }) {
  return (
    <div className="w-[250px] rounded-md border flex-column m-5">
      <div>
        <Link to={props.path}>
          <img
            src={props.src}
            alt={props.name}
            className="hover:scale-75 w-auto"
          />
        </Link>
      </div>

      <div className="py-4 px-1 flex-column font-sans">
        <a href={props.path} className="text-base font-semibold">
          {props.name}
        </a>
        <p className="py-3 px-1 text-sm text-pink-600">{props.price}</p>
      </div>
    </div>
  );
}
