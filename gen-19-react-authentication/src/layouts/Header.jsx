import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthData } from "../store/reducers/authSlice";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  const navigate = useNavigate();

  const onClickLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };

  const onClickBrowse = () => {
    navigate("/");
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    <div className=" w-full bg-white p-4">
      <div className="flex justify-end p-2  px-10 mx-5 shadow-md mb-5">
        {!isLoggedIn && (
          <div
            className="self-center cursor-pointer font-sans bg-pink-800 text-white py-2 px-5 m-1 font-bold rounded-lg"
            onClick={onClickLogin}
          >
            Login
          </div>
        )}
        {isLoggedIn && (
          <div
            className="self-center cursor-pointer font-sans "
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Hello,
            {user.name}
            {showDropdown && (
              <div
                className="rounded-lg drop-shadow-md text-right border bg-pink-800 text-white py-2 px-5 m-1 font-bold text-sm "
                onClick={onClickLogout}
              >
                Logout
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div
          className="inline-flex items-center space-x-2"
          onClick={onClickBrowse}
        >
          <div>
            <img
              src="https://notebooktherapy.com/cdn/shop/files/notebook-therapy_5c35a485-856a-4245-9bb4-ff74a75bbf44.png?v=1649853296"
              className="w-48 hover:scale-110"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <Input inputName="Search.." />
          </div>
        </div>
      </div>
    </div>
  );
}
