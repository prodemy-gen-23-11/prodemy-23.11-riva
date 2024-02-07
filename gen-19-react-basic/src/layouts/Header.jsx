import React from "react";
import Input from "../components/Input";

export default function Header() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <img
            src="https://notebooktherapy.com/cdn/shop/files/notebook-therapy_5c35a485-856a-4245-9bb4-ff74a75bbf44.png?v=1649853296"
            className="w-48"
          />
        </div>

        <Input inputName="Search.." />
      </div>
    </div>
  );
}
