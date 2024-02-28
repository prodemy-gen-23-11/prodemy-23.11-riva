import React from "react";

export default function Category({ props }) {
  return (
    <>
      <a className="hover:border-b border-black" href={props.href}>
        {props.name}
      </a>
    </>
  );
}
