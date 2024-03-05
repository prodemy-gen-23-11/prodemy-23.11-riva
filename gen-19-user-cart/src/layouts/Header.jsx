import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthData } from "../store/reducers/authSlice";
import { ShoppingCart } from "lucide-react";
import axios from "axios";
import { addToCart, cartProduct } from "../store/reducers/cartSlice";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = useSelector(
    (state) => state.auth.token !== "" && state.auth.user.role === "admin"
  );
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  const navigate = useNavigate();
  const { dataCart } = useSelector((state) => state.cart);

  const onClickLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };

  const onClickBrowse = () => {
    navigate("/");
  };

  const onClickDesc = () => {
    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/cart");
    }
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  const fetchData = () => {
    axios.get("http://localhost:3000/cart").then((res) => {
      dispatch(cartProduct(res.data));
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const cartTotalProduct = dataCart
    .filter((item) => item.userId === user.id)
    .map((item) => item.count)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

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
          <div className="flex gap-2">
            <div
              className="self-center cursor-pointer font-sans hover:scale-95 "
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Hello,
              {user.name}
              {showDropdown && (
                <div
                  className=" hover:scale-95 rounded-lg drop-shadow-md text-right border bg-pink-800 text-white py-2 px-5 m-1 font-bold text-sm "
                  onClick={onClickLogout}
                >
                  Logout
                </div>
              )}
            </div>
            <div className="relative cursor-pointer" onClick={onClickDesc}>
              <ShoppingCart className="text-3xl" />
              <div className="absolute top-0 left-4 bg-red-400 px-2 rounded-lg text-white text-xs">
                {cartTotalProduct > 0 && cartTotalProduct}
              </div>
            </div>
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
