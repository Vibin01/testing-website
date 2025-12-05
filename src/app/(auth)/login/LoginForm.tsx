"use client";

import Link from "next/link";
import React, { useState } from "react";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" lg:max-w-[450px] xl:max-w-[600px] w-auto  mx-auto bg-white shadow-[0px_4px_6px_-3px_#0000000D,_0px_10px_15px_-3px_#0000001A] rounded-lg  p-6 xl:p-8"
    >
      <h2 className=" lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-4">
        Achieve your Hiring Goals with Ease
      </h2>
      <p className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-center md:text-left font-medium mb-5">
        Organization
      </p>
      <input
        type="email"
        name="email"
        placeholder="Your official email id"
        value={formData.email}
        onChange={handleChange}
        className="w-full h-[40px]  xl:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-5"
      />

      <div className="relative w-full mb-5">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full h-[40px] xl:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-md p-2 pr-14"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0668E1] text-sm font-semibold"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <Link
        href={"/forgot-password"}
        className="my-1 text-[#0668E1] font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px]"
      >
        Forgot Password
      </Link>
      <div className="my-5 flex justify-center">
        <button
          type="submit"
          className="min-w-[190px] bg-[#0668E1] h-[48px] hover:bg-blue-700 text-white py-2 px-6 my-3 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] "
        >
          Log in
        </button>
      </div>
      <label className="my-8 flex items-center text-center space-x-2 mb-5">
        <span className=" text-[10px] xl:text-[12px] 2xl:text-[14px]">
          All Rights reserved ConnectEC is a Registered trademark of{" "}
          <a href="#" className="text-[#0668E1] font-medium">
            Primethic Private Limited.
          </a>{" "}
          By logging in, I agree to Connect EC's{" "}
          <a href="#" className="text-[#0668E1] font-medium">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#0668E1] font-medium ">
            Condtion
          </a>
        </span>
      </label>

      <p className="lg:mb-[14%] py-5 text-center text-[16px] xl:text-[18px] 2xl:text-[18px] mt-4">
        New to Connect EC?{" "}
        <Link target="_self"  href="https://employer.connectec.app/register" className="text-[#0668E1] font-semibold">
          Register Now
        </Link>{" "}
      </p>
    </form>
  );
};
