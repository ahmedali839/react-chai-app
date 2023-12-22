import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Logo, Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handlerSubmit } = useForm();
  const [error, setError] = useState("");

  const Login = async (data) => {
    setError("");
    try {
      const Session = await authService.Login(data);
      if (Session) {
        const Userdata = await authService.getCurrentUsers();
        if (Userdata) dispatch(authLogin(Userdata));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg p-10 bg-gray-100 rounded-lg border border-black/100`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px] ">
            {" "}
            <Logo width="100%" />{" "}
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-tight text-center ">
          Sign in your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign up
          </Link>
        </p> 
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>} 
        <form onSubmit={handlerSubmit(Login)} className="mt-8"> 
         <div className="space-y-8"> 
          <Input  
          label="Email: "
          placeholder="Please enter Email"  
          type="email"
          {...register("email", { 
required: true,
 
 Validate: { 
    matchPatern: (value) =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||  
    "Enter address must be a valid address",
 }
   })}
    />
 
 <Input 
 label="Password: "
 placeholder="Please enter password" 
 type="password" 
 {...register("password", { 
    required: true,
 })}
  />
 <Button type="submit" className="w-full">Sign in</Button>


           </div> 

         </form>
      </div>
    </div>
  );
}

export default Login;
