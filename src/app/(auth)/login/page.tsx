import Image from "next/image";
import React from "react";
import { LoginForm } from "./LoginForm";

export const metadata = {
  title: " Log in to the Connect EC Platform",
  description:
    "Access your Connect EC account to manage recruitment, candidate data, and team collaboration efficiently and securely.",
};

const page = () => {
  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen  bg-cover ">
      <div className="flex flex-col lg:flex-row  justify-evenly mt-10 lg:mt-0 items-center py-[5%] px-[4%] lg:px-[7%] gap-10">
        <section className="w-full lg:w-1/2 flex justify-center ">
          <Image
            src={"/connect-ec-easy-recruitment-revolution.svg"}
            alt={
              "Promotional graphic positioning Connect EC as the “Easy Recruitment Revolution,” redefining simplicity in hiring."
            }
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto h-[70%] max-h-screen"
          />
        </section>
        <section className="lg:w-1/2 xl:px-[5%]">
          <LoginForm />
        </section>
      </div>
    </div>
  );
};

export default page;
