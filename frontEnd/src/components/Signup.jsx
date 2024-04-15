import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";


function Signup() {
  const location=useLocation();
  const navigate=useNavigate()
  const from =location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data )=> {

    const userInfo={
      name:data.name,
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:3000/user/v2/signup",userInfo)
     .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('SignUp successfully');
        navigate(from,{replace:true});
      }
      localStorage.setItem("user",JSON.stringify(res.data.user))

     }).catch((errors)=>{
      if(errors.response){
        console.log(errors)
        toast.error("Error: " + errors.response.data.message);
      }
     })
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="w-[500px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Sign Up</h3>
            <div className="mt-3">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your fullname"
                className="w-96 px-3 py-2 mt-2 rounded-md border outline-none mb-3"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className="w-96 px-3 py-2 mt-2 rounded-md border outline-none mb-3"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-96 py-2 rounded-md border outline-none mt-2 px-3"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            <div className="flex justify-between">
              <button type="submit" className="bg-black px-4 py-2 text-bold cursor-pointer mt-8 p-2 rounded-md hover:bg-slate-800 text-white">
                Sign Up
              </button>

              <p className="mt-10">
                Already registered?{" "}
                <button className="text-blue-500 underline cursor-pointer"
                 onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
