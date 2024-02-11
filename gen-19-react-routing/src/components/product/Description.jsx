import React from "react";

export default function Description({ props }) {
  return (
    <div>
      <div className="flex flex-col">
        <span className="font-semibold">{props.dt}</span>
        <span> {props.dd}</span>
        <br />
      </div>
    </div>
  );
}
