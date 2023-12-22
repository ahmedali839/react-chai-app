import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Input, Logo, Button } from "./index.jsx";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SIgnup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const UserData = await authService.createAccount(data);
      if (UserData) {
        const UserData = await authService.getCurrentUsers();
        if (UserData) dispatch(login(UserData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="justify-center flex items-center">
      <div
        className={`mx-auto w-full max-w-full p-10 bg-gray-100 rounded-lg border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px] ">
            {" "}
            <Logo width="100%" />{" "}
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-tight text-center ">
          Sign up your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-10">
            <Input
              label="Full Name"
              placeholder="Enter your name"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email: "
              placeholder="Please enter Email"
              type="email"
              {...register("email", {
                required: true,

                Validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Enter address must be a valid address",
                },
              })}
            /> 

            <Input  
label="Password"
type="password" 
placeholder="Enter your Password" 
{...register("password", {
    required: true,
})}

            /> 
            <Button className="w-full" type="Submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SIgnup;
