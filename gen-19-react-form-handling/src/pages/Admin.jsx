import React, { useMemo } from "react";
import { Sidebar } from "../components/admin/sidebar";
import Table from "../components/admin/Table";
import useSWR from "swr";
import axios from "axios";
import { Moon } from "lucide-react";
import FormProduct from "../components/admin/FormProduct";

export default function Admin() {
  const getProduct = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    "http://localhost:3000/descriptionProduct",
    getProduct
  );
  console.log(data);

  const columns = useMemo(() => [
    {
      Header: "Id",
      accessor: "id",
    },

    {
      Header: "Product Image",
      accessor: "mainPicture",
      Cell: (getTableBodyProps) => (
        <img
          className="w-[100px]"
          src={getTableBodyProps.row.original.mainPicture}
        />
      ),
    },

    {
      Header: "Name Product",
      accessor: "name",
    },

    {
      Header: "Price",
      accessor: "priceDiscount",
    },
  ]);
  return (
    <div>
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col bg-[#fce4ea] w-screen">
          <div className="text-center font-bold font-serif text-3xl bg-white p-4 flex gap-2 justify-center items-center ">
            <div>Product</div>
            <div className=" text-yellow-500">
              <Moon />
            </div>
          </div>
          <div>
            {isLoading ? (
              <p>Loading</p>
            ) : (
              <div className="flex">
                <div className="mx-5 px-5 ">
                  <Table columns={columns} data={data} />
                </div>
                <div className="m-5 p-5 flex flex-col">
                  <FormProduct />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
