import React, { useMemo, useContext } from "react";
import { Moon } from "lucide-react";
import CartTable from "../components/cart/CartTable";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../context/CheckoutContext";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const { setDataCheckout } = useContext(CheckoutContext);

  const onClickBuy = (rowData) => {
    setDataCheckout({
      ...rowData,
    });
    navigate("/checkout");
  };

  const onClickBrowse = () => {
    navigate("/");
  };

  function deleteCart(id) {
    // Temukan indeks item dengan id yang sesuai
    const index = cartItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
      alert("Item Deleted successfully!");
    } else {
      alert("Item not found!");
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: "Product Image",
        accessor: "mainPicture",
        Cell: ({ value }) => <img className="w-[100px]" src={value} />,
      },
      {
        Header: "Name Product",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "priceDiscount",
        Cell: ({ value }) => <div>Rp {value},00</div>,
      },
      {
        Header: "Quantity",
        accessor: "count",
      },
      {
        Header: "Total",
        accessor: "total",
        Cell: (getTableBodyProps) => {
          const price = parseInt(getTableBodyProps.row.original.priceDiscount);
          const count = parseInt(getTableBodyProps.row.original.count);
          const total =
            isNaN(price) || isNaN(count) ? "Invalid" : price * count;
          return <div>Rp {total},00</div>;
        },
      },

      {
        Header: "",
        accessor: "checkout",
        Cell: (getTableBodyProps) => (
          <div className="flex gap-2 pr-2">
            <div className="flex gap-3 font-semibold">
              <button
                onClick={() => onClickBuy(getTableBodyProps.row.original)}
                className="bg-white p-2 px-5 text-pink-800 rounded-lg hover:bg-pink-50 hover:scale-90 text-sm "
              >
                Check Out
              </button>
            </div>
            <div className="flex gap-3 font-semibold">
              <button
                onClick={() => deleteCart(getTableBodyProps.row.original.id)}
                className="bg-white p-2 px-5 text-pink-800 rounded-lg hover:bg-pink-50 hover:scale-90 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="flex flex-col bg-[#fce4ea] h-screen">
      <div onClick={onClickBrowse} className="bg-white px-5 pt-5">
        <img
          src="https://notebooktherapy.com/cdn/shop/files/notebook-therapy_5c35a485-856a-4245-9bb4-ff74a75bbf44.png?v=1649853296"
          className="hover:scale-110  p-5 rounded-lg bg-white w-48"
        />
      </div>
      <div className="text-center font-bold font-serif text-3xl bg-white pb-4 flex gap-2 justify-center items-center ">
        <div>Cart</div>
        <div className=" text-yellow-500">
          <Moon />
        </div>
      </div>
      <div>
        <div className="m-5 mx-auto max-w-screen-lg ">
          <CartTable columns={columns} data={cartItems} />
        </div>
      </div>
    </div>
  );
}
