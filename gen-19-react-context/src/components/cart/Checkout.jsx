import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CheckoutContext } from "../../context/CheckoutContext";
import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

function Checkout() {
  const { dataCheckout } = useContext(CheckoutContext);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    address: yup.string().required("Address is required"),
    phone: yup.string().required("Phone is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    console.log(data);
  };

  const totalPrice = dataCheckout.priceDiscount * dataCheckout.count;

  return (
    <section>
      <div>
        <div className="flex gap-5 bg-pink-800 p-3 text-sm">
          <Link to="/">
            <button className="rounded-lg bg-white p-2 text-pink-800 self-center font-bold  ">
              Back to Home
            </button>
          </Link>

          <Link to="/cart">
            <button className="rounded-lg bg-white p-2 text-pink-800 self-center font-bold ">
              Back to Cart
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5 py-5">
          <h1 className="text-3xl font-semibold">Checkout</h1>
          <Moon className="text-yellow" />
        </div>
      </div>

      <div className="px-20">
        <div>
          <h2>Shipping Details</h2>
          <hr />
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="grid grid-cols-2 gap-20 mt-8">
              <div className="flex flex-col gap-4 mt-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    placeholder="Name"
                    className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                    {...register("name")}
                  />
                  <p className="error text-xs text-red-500">
                    {errors.name?.message}
                  </p>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email"
                    className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                    {...register("email")}
                  />
                  <p className="error text-xs text-red-500">
                    {errors.email?.message}
                  </p>
                </div>

                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    placeholder="Phone Number"
                    className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                    {...register("phone")}
                  />
                  <p className="error text-xs text-red-500">
                    {errors.phone?.message}
                  </p>
                </div>

                <div>
                  <label htmlFor="address">Address</label>
                  <textarea
                    placeholder="Address"
                    className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                    {...register("address")}
                  />
                  <p className="error text-xs text-red-500">
                    {errors.address?.message}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h2>Your Order</h2>
                  <hr />
                  <div className="flex flex-col">
                    <div className="flex justify-between my-4">
                      <img
                        src={dataCheckout.mainPicture}
                        alt="Product"
                        className="w-20"
                      />
                      <h3 className="font-bold">{dataCheckout.name}</h3>
                      <span>{dataCheckout.count}</span>
                      <span>Rp {dataCheckout.priceDiscount},00</span>
                    </div>
                  </div>

                  <hr />

                  <div className="flex justify-between my-4">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">Rp {totalPrice},00</span>
                  </div>
                </div>

                <button
                  className="rounded-lg bg-pink-800 p-2 text-white self-center w-full"
                  type="submit"
                >
                  Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
