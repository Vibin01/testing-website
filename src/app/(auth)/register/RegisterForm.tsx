"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function RegisterForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    organizationType: "",
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    countryCode: "",
    password: "",
    agree: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      phone: e.target.value,
      countryCode: countryCode,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

useEffect(() => {
  const timer = setTimeout(() => {
    if (formRef.current) {
      const topPosition =
        formRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition - 100, // 👈 Offset of 100px
        behavior: "smooth",
      });
    }
  }, 3000); // 👈 3-second delay

  // Cleanup timer when component unmounts
  return () => clearTimeout(timer);
}, []);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className=" lg:max-w-[400px] xl:max-w-[600px]   w-auto  mx-auto bg-white shadow-[0px_4px_6px_-3px_#0000000D,_0px_10px_15px_-3px_#0000001A] rounded-lg p-4 lg:p-6 xl:p-8"
    >
      <h2 className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-4">
        Achieve your Hiring Goals with Ease
      </h2>
      <p className="lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 xl:mb-5">
        Choose your Organization
      </p>

      <div className="flex space-x-6  mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="organizationType"
            value="company"
            checked={formData.organizationType === "company"}
            onChange={handleChange}
            className="w-5 h-5 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] accent-[#0668E1] 
    "
          />
          <span>Company</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="organizationType"
            value="staffing"
            checked={formData.organizationType === "staffing"}
            onChange={handleChange}
            className="w-5 h-5 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] accent-[#0668E1] "
          />
          <span>Staffing Agency</span>
        </label>
      </div>

      <input
        type="text"
        name="fullName"
        placeholder="Write your full name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full h-[40px] xl:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-4 xl:mb-5"
      />

      <div className="flex items-center w-full h-[40px] xl:h-[48px] bg-white border border-[#9F9F9F] rounded-md mb-4 xl:mb-5 overflow-hidden">
        {/* Country code selector */}
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="h-full pl-2 mr-2 bg-white focus:outline-none   text-sm"
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+61">+61</option>
          {/* add more as needed */}
        </select>

        {/* Phone number input */}
        <input
          type="tel"
          name="phone"
          placeholder="1234567890"
          value={formData.phone}
          onChange={handlePhoneChange}
          className="flex-1 h-full px-3 bg-white focus:outline-none border-l border-[#9F9F9F] text-sm"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Your official email id"
        value={formData.email}
        onChange={handleChange}
        className="w-full h-[40px] xl:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-4 xl:mb-5"
      />

      <input
        type="text"
        name="organization"
        placeholder="Enter your organization"
        value={formData.organization}
        onChange={handleChange}
        className="w-full h-[40px] xl:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-4 xl:mb-5"
      />

      <div className="relative w-full mb-4 xl:mb-5">
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

      <label className="flex items-start space-x-2 mb-4 xl:mb-5">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="h-5 w-5 mr-2 lg:mr-4 accent-[#0668E1] "
        />
        <span className=" text-[10px] xl:text-[12px] 2xl:text-[14px]">
          I have read and agree to the{" "}
          <a href="#" className="text-[#0668E1] font-medium">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#0668E1] font-medium">
            Privacy Policy
          </a>
        </span>
      </label>
      <div className="flex justify-center">
        <button
          type="submit"
          className=" bg-[#0668E1] h-[40px] xl:h-[48px] hover:bg-[#0560D0] text-white py-2 px-6 my-3 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] "
        >
          Register for Free
        </button>
      </div>

      <p className="text-center text-[14px] xl:text-[16px] 2xl:text-[18px] mt-4">
        Already Registered?{" "}
        <Link href="/login" className="text-[#0668E1] font-semibold">
          Login
        </Link>{" "}
        here
      </p>
    </form>
  );
}
