import { X } from "lucide-react";

function Form({
  title,
  handleSubmit,
  register,
  onSubmitForm,
  errors,
  handleClose,
}) {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[1200px] p-4 rounded-lg bg-white shadow-md">
        <form
          className="flex flex-col gap-4 mt-4 text-sm "
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">{title}</h2>
            <X
              className="text-lg cursor-pointer hover:scale-90"
              onClick={handleClose}
            />
          </div>
          <div className="flex gap-5 px-5">
            <div>
              <div>
                <label htmlFor="name">Nama Produk</label>
                <input
                  placeholder="Name"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                  {...register("name")}
                  id="name"
                />
                <p className="error text-red-500">{errors.name?.message}</p>
              </div>

              <div>
                <label htmlFor="price">Harga Sebelum Promo</label>
                <input
                  placeholder="Price"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                  {...register("price")}
                  id="price"
                />
              </div>

              <div>
                <label htmlFor="priceDiscound">Harga Sekarang</label>
                <input
                  placeholder="price"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-200"
                  {...register("priceDiscount")}
                  id="mainPicture"
                />
                <p className="error text-red-500">
                  {errors.priceDiscount?.message}
                </p>
              </div>

              <div>
                <label htmlFor="mainPicture">Gambar Utama</label>
                <input
                  placeholder="input URL image"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-200"
                  {...register("mainPicture")}
                  id="mainPicture"
                />
                <p className="error text-red-500">
                  {errors.mainPicture?.message}
                </p>
              </div>

              <div>
                <label htmlFor="picture">Gambar Product</label>
                <textarea
                  placeholder="URL gambar product"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-200"
                  {...register("picture")}
                  id="picture"
                />
                <p className="error text-red-500">{errors.picture?.message}</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-center text-base font-bold">
                {" "}
                Deskripsi Detail Product
              </div>
              <div>
                <label htmlFor="description">Deskripsi Product</label>
                <textarea
                  placeholder="description"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                  {...register("description")}
                  id="description"
                />
                <p className="error text-red-500">
                  {errors.description?.message}
                </p>
              </div>
              <div>
                <div className="flex gap-2">
                  <div>
                    <label htmlFor="dt1">Detail 1</label>
                    <input
                      placeholder="dt1"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dt1")}
                      id="dt1"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd1">Penjelasan Detail 1</label>
                    <input
                      placeholder="dd1"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dd1")}
                      id="dd1"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <label htmlFor="dt2">Detail 2</label>
                    <input
                      placeholder="dt2"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dt2")}
                      id="dt2"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd2">Penjelasan Detail 2</label>
                    <input
                      placeholder="dd2"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dd2")}
                      id="dd2"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <label htmlFor="dt3">Detail 3</label>
                    <input
                      placeholder="dt3"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dt3")}
                      id="dt3"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd3">Penjelasan Detail 3</label>
                    <input
                      placeholder="dd3"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dd3")}
                      id="dd3"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <label htmlFor="dt4">Detail 4</label>
                    <input
                      placeholder="dt4"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dt4")}
                      id="dt4"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd4">Penjelasan Detail 4</label>
                    <input
                      placeholder="dd4"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dd4")}
                      id="dd4"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <label htmlFor="dt5">Detail 5</label>
                    <input
                      placeholder="dt5"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dt5")}
                      id="dt5"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd5">Penjelasan Detail 5</label>
                    <input
                      placeholder="dd5"
                      className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                      {...register("dd5")}
                      id="dd5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="rounded-lg bg-pink-800 p-2 text-white self-center w-full hover:scale-90 hover:bg-pink-500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
