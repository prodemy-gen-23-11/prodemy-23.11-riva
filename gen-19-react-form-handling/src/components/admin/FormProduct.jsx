import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormProduct() {
  const schema = yup.object().shape({
    name: yup.string().required("*Field Name is required"),
    mainPicture: yup.string().required("*Field Main Picture is required"),
    picture: yup.string().required("*Field Picture is required"),
    price: yup.string().required("*Field Price is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    console.log(data);
    const arrayPicture = data.picture.split("\n");
    console.log(arrayPicture);
  };
  return (
    <div className="text-sm ">
      <form
        className="flex flex-col gap-4 text-base"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="bg-pink-700 p-3 text-white rounded-lg  font-bold">
          Input New Product
        </div>
        <div className="">
          <label htmlFor="name">Product Name</label>
          <br />
          <input
            placeholder="Product Name.."
            className="placeholder:text-xs  "
            {...register("name")}
            id="name"
          />
          <p className="error text-red-600 text-xs ">{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="mainPicture">Main Picture</label>
          <br />
          <input
            placeholder="URL Main Picture Product.."
            className="placeholder:text-xs "
            {...register("mainPicture")}
            id="mainPicture"
          />
          <p className="error  text-red-600 text-xs">
            {errors.mainPicture?.message}
          </p>
        </div>
        <div>
          <label htmlFor="picture">Product Picture</label>
          <br />
          <textarea
            placeholder="URL Product Picture.."
            className="placeholder:text-xs "
            {...register("picture")}
            id="picture"
          />
          <p className="error  text-red-600 text-xs">
            {errors.picture?.message}
          </p>
        </div>
        <div>
          <label htmlFor="price">Price Product</label>
          <br />
          <input
            placeholder="Price Product.."
            className="placeholder:text-xs "
            {...register("price")}
            id="price"
          />
          <p className="error  text-red-600 text-xs">{errors.price?.message}</p>
        </div>
        <div>
          <label htmlFor="description">Description Product</label>
          <br />
          <input
            placeholder="Description Product.."
            className="placeholder:text-xs "
            {...register("description")}
            id="description"
          />
        </div>
        <button
          className="p-2 bg-pink-700 border border-pink-800 rounded-lg font-bold text-white hover:scale-90 hover:bg-pink-500"
          type="submit"
        >
          Input Product
        </button>
      </form>
    </div>
  );
}
