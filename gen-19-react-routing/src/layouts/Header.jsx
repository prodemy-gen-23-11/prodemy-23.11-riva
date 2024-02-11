import React from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const onClickBrowse = () => {
    navigate("/");
  };

  return (
    <div className="relative w-full bg-white p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <div onClick={onClickBrowse}>
            <img
              src="https://notebooktherapy.com/cdn/shop/files/notebook-therapy_5c35a485-856a-4245-9bb4-ff74a75bbf44.png?v=1649853296"
              className="w-48 hover:scale-110"
            />
          </div>
        </div>

        <Input inputName="Search.." />
      </div>
    </div>
  );
}
