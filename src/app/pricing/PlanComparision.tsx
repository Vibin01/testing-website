// components/ComparisonTable.tsx
"use client";

import { comparisonData } from "@/data/PricingPageData"; 
import Image from "next/image";
import check from "@/public/tick-icon.svg";
import dash from "@/public/dash-icon.svg";
const tiers = [
  "Tier 1 (Free Forever)",
  "Tier 2 (Standard)",
  "Tier 3 (Premium)",
];

export default function ComparisonTable() {
  return (
    <div className="">
      <h2 className=" text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center pt-6 lg:pt-0 mb-5 lg:mb-28">
        Plan Comparision
      </h2>

      {/* Desktop View */}

      <div className=" hidden lg:flex justify-center gap-8   ">
        <div className="flex flex-col bg-[#FFFFFF33]   border border-[#0668E1] rounded-[30px] px-6">
          <div className=" mb-3 py-7 text-center border-b-2 border-[#E4E4E4] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-bold ">
            Services
          </div>

          {comparisonData.map((section) => (
            <div key={section.id}>
              {section.service_heading && (
                <>
                  <hr className="border-t-2 my-4  border-[#E4E4E4] " />
                  <div className="xl:px-4 h-[45px] xl:h-[58px]  flex items-center text-[#0668E1] lg:text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold  ">
                    {section.service_heading}
                  </div>
                </>
              )}

              {section.services.map((srv, idx) => (
                <div
                  key={idx}
                  className="xl:px-4 h-[45px] xl:h-[50px]  flex items-center lg:text-[15px] xl:text-[20px] 2xl:text-[24px] font-medium  "
                >
                  {srv.service}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {tiers.map((tier, tierIndex) => (
            <div
              key={tierIndex}
              className={`w-full xl:min-w-[280px] 2xl:min-w-[320px] ${
                tierIndex === tiers.length - 1
                  ? "bg-[#9CC8FF] p-2 rounded-[20px] xl:rounded-[40px] "
                  : ""
              }`}
            >
              <div
                key={tierIndex}
                className={`flex flex-col pb-6  border px-3 xl:px-6 border-[#0668E1] rounded-[30px] ${
                  tierIndex === tiers.length - 1
                    ? "border-2 border-[#0668E1] bg-[#FFFFFF]"
                    : "pb-2- bg-[#FFFFFF33]"
                }`}
              >
                <div
                  className={` text-center   border-b-2  lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-bold ${
                    tierIndex === tiers.length - 1
                      ? "text-[#0668E1] border-[#0668E1] py-6 mb-3"
                      : "border-[#E4E4E4] py-8 mb-3"
                  }`}
                >
                  {tier}
                </div>

                {comparisonData.map((section) => (
                  <div key={section.id}>
                    {section.service_heading && (
                      <div className="lg:h-[50px]   border-t-2 my-3"></div>
                    )}

                    {section.services.map((srv, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center h-[46px] xl:h-[56px] "
                      >
                        {srv.tiers[tierIndex] ? (
                          <Image
                            src={check}
                            width={40}
                            height={40}
                            alt="connect-ec-tick-icon"
                            className="w-5 h-5 xl:w-8 xl:h-8 stroke-3 text-[#0668E1]"
                          />
                        ) : (
                          <Image
                            src={dash}
                            width={40}
                            height={40}
                            alt="connect-ec-dash-icon"
                            className="w-5 h-5 xl:w-8 xl:h-8 stroke-3 text-[#606060]"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}

      <div className="lg:hidden pb-10 ">
        <table className="w-full ">
          <thead className="border-b   border-[#E4E4E4] text-[14px] md:text-[16px] font-semibold">
            <tr className="">
              <th className="p-3 font-semibold md:text-left ">Services</th>
              <th className="p-3 font-semibold">T-1</th>
              <th className="p-3 font-semibold">T-2</th>
              <th className="p-3 font-semibold">T-3</th>
            </tr>
          </thead>

          {comparisonData.map((section, index) => (
            <tbody
              key={section.id}
              className={`${
                index === comparisonData.length - 1 ? "border-b-0" : ""
              }   border-b border-[#E4E4E4]  pb-5`}
            >
              {section.service_heading && (
                <tr className="">
                  <td
                    colSpan={4}
                    className="py-3 -pb-1  text-[#0668E1] font-bold text-[15px] md:text-[16px]"
                  >
                    {section.service_heading}
                  </td>
                </tr>
              )}

              {section.services.map((item, i) => (
                <tr key={i} className="">
                  <td className={`py-3 text-[12px] md:text-[14px] ${
        i === item?.service.length - 1 ? "mb-2" : ""
      }`}>
                    {item.service}
                  </td>
                  {item.tiers.map((tier, index) => (
                    <td key={index} className="p-2 text-center">
                      {tier ? (
                        <Image
                          src={check}
                          width={30}
                          height={30}
                          alt="connect-ec-tick-icon"
                          className=" w-4 h-4 xl:w-8 xl:h-8 stroke-3 text-[#0668E1] mx-2"
                        />
                      ) : (
                        <Image
                          src={dash}
                          alt="connect-ec-dash-icon"
                          width={30}
                          height={30}
                          className="w-4 h-4 xl:w-8 xl:h-8 stroke-3 text-[#606060] mx-2"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
