import React from "react";
import { descriptionProduct } from "../../data/product/DescriptionProduct";
import AddToCard from "./AddToCard";
import Description from "./Description";

export default function DescriptionProduct() {
  return (
    <div className="flex flex-col m-5 mx-0 p-5">
      <div className="flex flex-col text-base font-sans p-2 py-4">
        <div className="py-2">
          <p className="font-bold text-2xl">
            Tsuki Komorebi Limited Edition Bullet Journal Set ☾
          </p>
        </div>

        <div className="flex gap-2 text-xs md:text-base lg:text-xl py-2">
          <em className="text-red-500">
            <s>Rp499.000,00</s>
          </em>
          <p>Rp299.000,00</p>
        </div>

        <div className="py-2">
          <a href="#">Reviews (2)</a>
          <div>
            <span className="fa fa-star text-yellow-300 "></span>
            <span className="fa fa-star text-yellow-300 "></span>
            <span className="fa fa-star text-yellow-300 "></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
        <div className="font-bold text-3xl underline underline-offset-8 pt-8">
          Description
        </div>

        <div className="pt-3 text-justify py-2">
          <div className="py-2">
            <p>
              Inspired by the beautiful Japanese term ‘Komorebi’ (木漏れ日) -
              the beautiful dappled light that filters through the spaces
              between trees and branches.
            </p>
          </div>

          <div>
            {descriptionProduct.map((descriptionProduct) => {
              return (
                <Description
                  props={descriptionProduct}
                  key={descriptionProduct.id}
                />
              );
            })}
          </div>
        </div>
      </div>

      <AddToCard />
    </div>
  );
}
