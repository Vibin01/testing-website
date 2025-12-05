import { GradientButton } from "@/components/common/Button/GradientButton";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className=" bg-[#FFFFFF4D]  pb-5 lg:pb-0">
        <div className="flex flex-col-reverse lg:flex-row items-center py-[9%]  px-[5%] lg:px-0 ml-[5%]- lg:ml-[8%]  2xl:ml-[10%] lg:mr-[3%]">
          <div className="flex flex-col lg:w-[60%] xl:w-[55%]  ">
            <h1 className="mb-1 lg:mb-[8px] xl:mb-[12px] font-bold text-[#0668E1] text-[24px] md:text-[26px] lg:text-[32px] xl:text-[38px] 2xl:text-[50px]">
              Connect EC
            </h1>
            <h2 className="mb-6 md:mb-8 lg:mb-12 xl:mb-15 leading-[44px] md:leading-14 xl:leading-18 2xl:leading-22 text-[34px] md:text-[38px] lg:text-[42px] xl:text-[56px] 2xl:text-[72px] font-semibold">
              <span>Employers and Candidates </span>{" "}
              <span className="md:block ">Experience EASY Hiring </span>
            </h2>

            <GradientButton text={"Unlock EC for Free"} link={"#"} />
          </div>
          <figure className="lg:w-[35%] xl:w-[40%] mb-8 lg:mb-0 flex justify-center items-center">
            <Image
              src="/home/connect-ec-gamified-ethical-hiring-platform.svg"
              alt="The Connect EC Gamified Ethical Hiring Platform interface, illustrating a modern, fair, and engaging recruitment solution"
              width={1080}
              height={1080}
              priority
              className="object-contain w-full h-auto max-h-[600px]"
            />
          </figure>
        </div>
      </section>
    </>
  );
};
