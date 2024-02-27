import React, { useMemo, useState } from "react";
import { Sidebar } from "../components/admin/sidebar";
import Table from "../components/admin/Table";
import useSWR from "swr";
import axios from "axios";
import { Moon } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormProduct from "../components/admin/FormProduct";

export default function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [productId, setProductId] = useState(null);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    priceDiscount: yup.string().required("Price is required"),
    mainPicture: yup.string().required("MainPicture is required"),
    picture: yup.string().required("Picture is required"),
    description: yup.string().required("Deskripsi is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getProduct = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/descriptionProduct",
    getProduct
  );
  console.log(data);

  const onClickAdd = () => {
    setShowModal(true);
    setModalTitle("Add Item");
  };

  const onClickEdit = (id) => {
    axios.get(`http://localhost:3000/descriptionProduct/${id}`).then((res) => {
      setValue("name", res.data.name);
      setValue("price", res.data.price);
      setValue("priceDiscount", res.data.priceDiscount);
      setValue("description", res.data.description);
      setValue("dt1", res.data.dt1);
      setValue("dd1", res.data.dd1);
      setValue("dt2", res.data.dt2);
      setValue("dd2", res.data.dd2);
      setValue("dt3", res.data.dt3);
      setValue("dd3", res.data.dd3);
      setValue("dt4", res.data.dt4);
      setValue("dd4", res.data.dd4);
      setValue("dt5", res.data.dt5);
      setValue("dd5", res.data.dd5);
      setValue("mainPicture", res.data.mainPicture);
      setValue("picture", res.data.picture);

      setModalTitle("Edit Item");
      setShowModal(true);
      setProductId(id);
    });
  };

  const onClickDelete = (id) => {
    axios
      .delete(`http://localhost:3000/descriptionProduct/${id}`)
      .then(() => mutate());
  };

  const onSubmitModal = (data) => {
    console.log(data);

    const arrayPicture = data.picture.split("\n");
    console.log(arrayPicture);

    const payload = {
      ...data,
      picture: arrayPicture,
    };

    if (modalTitle === "Add Item") {
      axios
        .post("http://localhost:3000/descriptionProduct", payload)
        .then(() => {
          reset();
          setShowModal(false);
          mutate();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      axios
        .put(`http://localhost:3000/descriptionProduct/${productId}`, payload)
        .then(() => {
          reset();
          setShowModal(false);
          mutate();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

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

    {
      Header: "Actions",
      accessor: "actions",
      Cell: (getTableBodyProps) => (
        <div className="flex gap-3 font-semibold">
          <button
            onClick={() => onClickEdit(getTableBodyProps.row.original.id)}
            className="bg-white p-2 w-20 text-pink-800 rounded-lg hover:bg-pink-50 hover:scale-90 "
          >
            Edit
          </button>
          <button
            onClick={() => onClickDelete(getTableBodyProps.row.original.id)}
            className="bg-white p-2 w-20 text-pink-800 rounded-lg hover:bg-pink-50 hover:scale-90 "
          >
            Delete
          </button>
        </div>
      ),
    },
  ]);

  return (
    <div>
      <div className="flex relative ">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col bg-[#fce4ea] w-screen">
          <div className="flex justify-between bg-white h-20 items-center pl-5 pr-12">
            <div className="text-center font-bold font-serif text-3xl bg-white p-3 flex gap-2 items-center  ">
              <div>Product</div>
              <div className=" text-yellow-500">
                <Moon />
              </div>
            </div>
            <button
              onClick={onClickAdd}
              className="bg-pink-800 h-14 px-5 rounded-lg text-white font-bold text-sm hover:bg-pink-500 hover:scale-90"
            >
              + Add New Product
            </button>
          </div>

          <div>
            {isLoading ? (
              <p>Loading</p>
            ) : (
              <div>
                {showModal && (
                  <FormProduct
                    title={modalTitle}
                    handleSubmit={handleSubmit}
                    register={register}
                    onSubmitForm={onSubmitModal}
                    errors={errors}
                    handleClose={() => {
                      setShowModal(false);
                      reset();
                    }}
                  />
                )}

                <div className="mx-5 px-5 w-auto ">
                  <Table columns={columns} data={data} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
