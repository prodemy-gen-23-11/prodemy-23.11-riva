import React, { useMemo, useState, useEffect } from "react";
import { Moon } from "lucide-react";
import CartTable from "../components/cart/CartTable";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkoutProduct } from "../store/reducers/checkoutSlice";
import { cartProduct } from "../store/reducers/cartSlice";
import axios from "axios";
import useSWR from "swr";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const dataCart = useSelector((state) => state.cart.dataCart);

  const fetchData = (url) => axios.get(url).then((response) => response.data);
  const { data, error } = useSWR("http://localhost:3000/cart", fetchData);

  useEffect(() => {
    if (error) {
      console.error("Failed to fetch cart data:", error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      dispatch(cartProduct(data));
    }
  }, [data, dispatch]);

  const onClickBrowse = () => {
    navigate("/");
  };

  const onClickCheckoutAll = () => {
    dataCart.forEach((item) => {
      dispatch(checkoutProduct(item));
    });
    navigate("/checkout");
  };

  const deleteCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      const updatedCartItems = dataCart.filter((item) => item.id !== id);
      dispatch(cartProduct(updatedCartItems));
      alert("Item deleted successfully!");
    } catch (error) {
      console.error("Failed to delete product from cart:", error);
      alert("Failed to delete item from cart.");
    }
  };

  const handleIncreaseQuantity = async (id) => {
    try {
      const updatedCartItem = dataCart.find((item) => item.id === id);
      const updatedCartItems = dataCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      axios.put(`http://localhost:3000/cart/${id}`, updatedCartItem);
      dispatch(cartProduct(updatedCartItems));
    } catch (error) {
      console.error("Failed to update product quantity:", error);
      alert("Failed to update product quantity.");
    }
  };

  const handleDecreaseQuantity = async (id) => {
    try {
      const updatedCartItem = dataCart.find((item) => item.id === id);
      const updatedCartItems = dataCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );
      axios.put(`http://localhost:3000/cart/${id}`, updatedCartItem);
      dispatch(cartProduct(updatedCartItems));
    } catch (error) {
      console.error("Failed to update product quantity:", error);
      alert("Failed to update product quantity.");
    }
  };

  useEffect(() => {
    let total = 0;
    dataCart.forEach((item) => {
      total += item.priceDiscount * item.count;
    });
    setTotalPrice(total);
  }, [dataCart]);

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
        Cell: (props) => (
          <div className="flex items-center">
            <button
              onClick={() => handleDecreaseQuantity(props.row.original.id)}
              className="w-6 py-1 bg-white text-pink-800 rounded-lg"
            >
              -
            </button>
            <span className="px-2">{props.value}</span>
            <button
              onClick={() => handleIncreaseQuantity(props.row.original.id)}
              className="w-6 py-1 bg-white text-pink-800 rounded-lg"
            >
              +
            </button>
          </div>
        ),
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
        accessor: "delete",
        Cell: (getTableBodyProps) => (
          <div>
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
    [dataCart, deleteCart]
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
      <div className="flex flex-col items-center m-5">
        <div className="m-2 mx-auto max-w-screen-lg ">
          <CartTable columns={columns} data={dataCart} />
        </div>

        <div className="p-5">
          <div className="text-center text-pink-800 font-semibold">
            Total Price: Rp {totalPrice},00
          </div>
          <div className="text-center mt-4">
            <button
              onClick={onClickCheckoutAll}
              className="bg-pink-800 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
