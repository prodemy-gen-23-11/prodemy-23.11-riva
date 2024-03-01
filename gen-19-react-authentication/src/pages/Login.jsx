import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/reducers/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickBrowse = () => {
    navigate("/");
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        console.log(user.role);
        if (user.role === "admin") {
          console.log("masuk");
          navigate("/admin");
        } else {
          navigate("/");
        }
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <div onClick={onClickBrowse} className="bg-white px-5 pt-5">
          <img
            src="https://notebooktherapy.com/cdn/shop/files/notebook-therapy_5c35a485-856a-4245-9bb4-ff74a75bbf44.png?v=1649853296"
            className="hover:scale-110  p-5 rounded-lg bg-white w-48"
          />
        </div>
        <div>
          <div className="flex text-3xl justify-center">
            {" "}
            <div>Login</div>
            <div className="text-yellow-500">
              <Moon />
            </div>
          </div>
          <div className=" ">
            <form
              className="flex flex-col gap-4 items-center "
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <div className="m-2">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    placeholder="Email"
                    className="w-[500px] rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                    {...register("email")}
                    id="email"
                  />
                </div>
                <p className="error text-red-500 text-sm">
                  {errors.email?.message}
                </p>
              </div>

              <div className="m-2">
                <label htmlFor="password">Password</label>
                <div>
                  <input
                    placeholder="Password"
                    className="w-[500px] rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-pink-300"
                    {...register("password")}
                    id="password"
                    type="password"
                  />
                </div>
                <p className="error text-red-500 text-sm">
                  {errors.password?.message}
                </p>
              </div>
              <button
                className="rounded-lg bg-pink-800 p-5 text-white w-[500px] cursor-pointer m-2"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
