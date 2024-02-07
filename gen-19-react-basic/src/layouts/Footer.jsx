import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Footer() {
  const buttonName = "Submit";
  const inputName = "Enter your email address";
  return (
    <div class="flex justify-between pt-10 bg-pink-300 pb-10 text-gray-800 font-sans text-sm">
      <div class="flex flex-wrap gap-1">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <i
          class="fa fa-facebook fa-xs sm:fa-sm lg:fa-lg "
          aria-hidden="true"
        ></i>
        <i
          class="fa fa-instagram fa-xs sm:fa-sm lg:fa-lg"
          aria-hidden="true"
        ></i>
        <i
          class="fa fa-pinterest-p fa-xs sm:fa-sm lg:fa-lg"
          aria-hidden="true"
        ></i>
      </div>

      <div>
        <b>Info</b>
        <p>Blog</p>
        <p>About us</p>
        <p>Sustainability</p>
        <p>Shipping & Return</p>
        <p>Common Questions</p>
        <p>Contact us</p>
      </div>

      <div>
        <b>Shop</b>
        <p>New Additions</p>
        <p>Top Selling</p>
        <p>Motebooks</p>
        <p>Bags</p>
        <p>Pens</p>
        <p>Pensil Case</p>
        <p>Stikers</p>
        <p>Washi Tape</p>
        <p>Gift Cards</p>
        <p>More+</p>
      </div>

      <div class="flex flex-col items-center pr-5">
        <b>Join for special updates &amp; discounts 👇</b>
        <br />
        <Input inputName={inputName} />
        <div>
          <Button buttonName={buttonName} />
        </div>
      </div>
    </div>
  );
}
