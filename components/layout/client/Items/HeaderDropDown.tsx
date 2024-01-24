import Link from "next/link";
import React from "react";

const HeaderDropDown = ({ ServiceItem, Url }: any) => {
  return (
    <>
      <div className="flex flex-col top-10 absolute">
        <div className="bg-none w-full h-6"></div>
        <div className=" top-9 hidden group-hover/main:block duration-300">
          <div className=" flex flex-col bg-[#3c3c3cae] shadow-md border-t-2 border-gray-500 ">
            {ServiceItem.map((items: any, idx: number) => (
              <Link
                key={idx}
                href={`/chuyen-muc/${Url}?type=${items.value}`}
                className="  border-b hover:bg-mainorange duration-300"
              >
                <p className="py-2 px-4 w-max hover:text-maingreen duration-300 text-white">
                  {items.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDropDown;
