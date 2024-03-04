import React from "react";
import ProductPictures from "./ProductPictures";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartProduct } from "../../store/reducers/cartSlice";

export default function DescriptionProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProduct = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    `http://localhost:3000/descriptionProduct/${id}`,
    getProduct
  );

  console.log(data);

  const [count, setCount] = useState(1);

  function handleClickPlus() {
    setCount(count + 1);
  }
  function handleClickMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const { dataCart } = useSelector((state) => state.cart);

  const onClickAddNow = async (id) => {
    try {
      if (!dataCart) {
        console.error("Cart data is not available");
        return;
      }

      const foundItemIndex = dataCart.findIndex((item) => item.id === id);

      if (foundItemIndex !== -1) {
        const updatedCart = [...dataCart];
        updatedCart[foundItemIndex] = {
          ...updatedCart[foundItemIndex],
          count: updatedCart[foundItemIndex].count + count,
        };

        axios.put(
          `http://localhost:3000/cart/${id}`,
          updatedCart[foundItemIndex]
        );
        dispatch(cartProduct(updatedCart));
      } else {
        const productToAdd = { ...data, count };
        const updatedCart = [...dataCart, productToAdd];

        axios.post(`http://localhost:3000/cart`, productToAdd);
        dispatch(cartProduct(updatedCart));
      }

      navigate("/cart");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div key={data.id} className="grid grid-cols-2 p-5 py-0 bg-pink-100">
          <div>
            <ProductPictures picture={data.picture} />
          </div>

          <div className="flex flex-col m-5 mx-0 p-5">
            <div className="flex flex-col text-base font-sans p-2 py-4">
              <div className="py-2">
                <p className="font-bold text-2xl">{data.name}</p>
              </div>

              <div className="flex gap-2 text-xs md:text-base lg:text-xl py-2">
                <em className="text-red-500">
                  <s>Rp {data.price},00</s>
                </em>
                <p>Rp {data.priceDiscount},00</p>
              </div>

              <div className="py-2">
                <div>Review</div>
                <div>
                  <span className="fa fa-star text-yellow-300 "></span>
                  <span className="fa fa-star text-yellow-300 "></span>
                  <span className="fa fa-star text-yellow-300 "></span>
                  <span className="fa fa-star text-yellow-300 "></span>
                  <span className="fa fa-star text-yellow-300 "></span>
                </div>
              </div>
              <div className="font-bold text-3xl underline underline-offset-8 pt-8">
                Description
              </div>

              <div className="pt-3 text-justify py-2">
                <div className="py-2">
                  <p>{data.description}</p>
                </div>

                <div className="flex flex-col py-2">
                  <div className="font-semibold ">{data.dt1}</div>
                  <div className="py-1"> {data.dd1}</div>
                  <div className="font-semibold">{data.dt2}</div>
                  <div className="py-1"> {data.dd2}</div>
                  <div className="font-semibold">{data.dt3}</div>
                  <div className="py-1"> {data.dd3}</div>
                  <div className="font-semibold">{data.dt4}</div>
                  <div className="py-1"> {data.dd4}</div>
                  <div className="font-semibold">{data.dt5}</div>
                  <div className="py-1"> {data.dd5}</div>
                  <br />
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center">
              <div className="flex items-center border-2 bg-white border-[#f08080] rounded-lg w-40 h-16 justify-evenly m-10">
                <button
                  onClick={handleClickMinus}
                  className="fa fa-minus hover:scale-75"
                ></button>
                <span>{count}</span>
                <div>
                  <button
                    onClick={handleClickPlus}
                    className="fa fa-plus hover:scale-75"
                  ></button>
                </div>
              </div>

              <div className="flex justify-center bg-pink-800 text-white px-5 h-16 rounded-lg font-bold">
                <button onClick={() => onClickAddNow(data.id)}>
                  {" "}
                  Add To Cart{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
