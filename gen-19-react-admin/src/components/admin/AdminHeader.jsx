import React from "react";
import Input from "../Input";

export default function AdminHeader() {
  return (
    <div className="grid grid-cols-2 p-5">
      <div className="text-3xl font-bold">Produk</div>
      <div>
        <Input />
      </div>
    </div>
  );
}
