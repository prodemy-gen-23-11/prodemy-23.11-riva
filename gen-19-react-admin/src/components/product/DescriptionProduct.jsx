import React from "react";
import AddToCard from "./AddToCard";
import ProductPictures from "./ProductPictures";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function DescriptionProduct() {
  const { id } = useParams();

  const getProduct = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    `http://localhost:3000/descriptionProduct/${id}`,
    getProduct
  );

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
                  <s>{data.price}</s>
                </em>
                <p>{data.priceDiscount}</p>
              </div>

              <div className="py-2">
                <a href="#">{data.review}</a>
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

            <AddToCard />
          </div>
        </div>
      )}
    </>
  );
}
