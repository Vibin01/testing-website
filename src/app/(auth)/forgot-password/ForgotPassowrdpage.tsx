"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const ForgotPassowrdpage = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const router = useRouter();

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
    router.push("/reset-password");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" lg:max-w-[400px] xl:max-w-[550px] w-auto  mx-auto bg-white shadow-[0px_4px_6px_-3px_#0000000D,_0px_10px_15px_-3px_#0000001A] rounded-lg  p-7 xl:p-10"
    >
      <h2 className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-3">
        Forgot your password?
      </h2>
      <p className="text-[#9F9F9F] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]  mb-5">
        Send a link to your email to reset your password
      </p>
      <input
        type="email"
        name="email"
        placeholder="Your official email id"
        value={formData.email}
        onChange={handleChange}
        className="w-full h-[40px] lg:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-5"
      />

      <div className=" flex justify-center">
        <button
          type="submit"
          className="min-w-[190px] bg-[#0668E1] h-[48px] hover:bg-[#0560D0] text-white py-2 px-6 my-3 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] "
        >
          Send Reset Link
        </button>
      </div>

      <p className="  text-center text-[16px] xl:text-[18px] my-4 lg:my-8">
        <Link href="/login" className="text-[#0668E1] font-semibold">
          Back to log in
        </Link>{" "}
      </p>
    </form>
  );
};
