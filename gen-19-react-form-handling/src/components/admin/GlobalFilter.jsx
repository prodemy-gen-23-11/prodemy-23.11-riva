import React from "react";

export default function GlobalFilter({ filter, setFilter }) {
  return (
    <div>
      <span className="font-semibold text-pink-800">Search: {""}</span>
      <span>
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
          className="w-[500px] p-2 rounded-lg border border-pink-300 text-sm"
        />
      </span>
    </div>
  );
}
