import React from "react";
import { info } from "../../data/footer/Info";

function Informasi({ props }) {
  return (
    <div className=" text-gray-700 pb-1">
      <a className="hover:text-black" href={props.href}>
        {props.name}
      </a>
    </div>
  );
}

export default function Info() {
  return (
    <div className="flex flex-col">
      {info.map((info) => {
        return <Informasi props={info} key={info.id} />;
      })}
    </div>
  );
}
