import React from "react";
import { shop } from "../../data/footer/Shop";

function Shops({ props }) {
  return (
    <div className=" text-gray-700 pb-1">
      <a className="hover:text-black" href={props.href}>
        {props.name}
      </a>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="flex flex-col">
      {shop.map((shop) => {
        return <Shops props={shop} key={shop.id} />;
      })}
    </div>
  );
}
