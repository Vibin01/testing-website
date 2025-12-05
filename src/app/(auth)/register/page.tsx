import React from "react";
import RegisterForm from "./RegisterForm";
import Image from "next/image";

export const metadata = {
  title: "Register for Connect EC - Gamified Hiring Platform",
  description:
    "Sign up for Connect EC to start engaging candidates, streamlining hiring, and optimizing recruitment with gamified, ethical tools.",
};

const page = () => {
  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen bg-cover ">
      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-10 lg:mt-0 py-[6%] p-[4%] lg:px-[7%] gap-10">
        <section className="w-full lg:w-1/2 flex justify-center  ">
          <Image
            src={"/connect-ec-easy-recruitment-revolution.svg"}
            alt={
              "Promotional graphic positioning Connect EC as the “Easy Recruitment Revolution,” redefining simplicity in hiring."
            }
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto h-[70%] max-h-screen "
          />
        </section>
        <section className="lg:w-1/2 xl:px-[5%]">
          <RegisterForm />
        </section>
      </div>
    </div>
  );
};

export default page;
