"use client";
import { IconMapping } from "@assets/item";
import Link from "next/link";
import React from "react";

const HeaderDropDown = ({ Data }: any) => {
  return (
    <>
      <div className="py-3 min-w-[160px] border-gray-300  border border-solid rounded-lg bg-white relative  ">
        <div className="">
          {Data?.map((item: any, index: any) => {
            const Icon = IconMapping[item.icon];

            return (
              <Link
                href={`/admin?tab=${item.value}`}
                key={index}
                className="flex gap-2 items-center font-light hover:bg-gray-100 h-max py-2 px-5 text-[14px]  rounded-md cursor-pointer"
              >
                {Icon && <Icon className="" />}
                <p className="w-max">{item.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-gray-300 -top-2 right-[50%] transform rotate-45 z-0"></div>
        <div className="w-full h-10  bg-none absolute -top-5 "> </div>
      </div>
    </>
  );
};

export default HeaderDropDown;
