import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate(); // Hook for navigation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/user/v2/login",
        userInfo
      );
      console.log(res.data);
      if (res.data) {
        toast.success("Login successfully");
        document.getElementById("my_modal_3").close();

        setTimeout(() => {
          window.location.reload();

          localStorage.setItem("user", JSON.stringify(res.data.user));
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        console.log(error);
        toast.error("Error: " + error.response.data.message);
        setTimeout(() => {}, 3000);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-3">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-96 px-3 py-2 mt-2 rounded-md border outline-none mb-1"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
              <br />
              <label className="font-bold mt-3" htmlFor="password">
                Password
              </label>
              <br />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-96 py-2 rounded-md border outline-none mt-2 px-3"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
              <br />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-black px-4 py-2 text-bold cursor-pointer mt-8 p-2 rounded-md hover:bg-slate-800 text-white"
              >
                Login
              </button>
              <p className="mt-10">
                Not registered?
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
