import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Info from "../components/footer/Info";
import Shop from "../components/footer/Shop";
import Sosmed from "../components/footer/sosmed";

export default function Footer() {
  return (
    <div className="flex justify-between p-10 bg-pink-100  text-gray-800 font-sans text-base">
      <div className="flex justify-between flex-1">
        <Sosmed />

        <div>
          <div className="font-bold pb-2">Info</div>
          <Info />
        </div>

        <div>
          <div className="font-bold pb-2">Shop</div>
          <Shop />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center flex-1">
        <div className="font-bold">Join for special updates & discounts 👇</div>
        <br />
        <Input inputName="Enter your email address" />
        <Button buttonName="Submit" />
      </div>
    </div>
  );
}
