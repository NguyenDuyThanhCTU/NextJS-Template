"use client";
import { AdminPageHeaderItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import HeaderDropDown from "./Items/HeaderDropDown";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const { ContactData, TradeMarkData } = useData();
  return (
    <div className="fixed w-full z-50 top-0">
      <div className="bg-[rgba(60,60,60,1)] d:block p:hidden">
        <div className="w-[1300px] flex  justify-center mx-auto items-center py-1">
          <div className="col-span-2 flex items-center gap-4">
            {AdminPageHeaderItems.slice(0, 4).map((item, index) => (
              <div key={index} className="relative group/main">
                <Link
                  href={`${item.value}`}
                  className={`${
                    item.value === pathname
                      ? "border-adminOrange text-adminOrange border-b "
                      : "text-white "
                  } px-3 py-5 w-max font-normal  flex items-center gap-1  duration-300  `}
                  key={index}
                >
                  <>{console.log(pathname, item.value)}</>
                  {item.label}
                  {item.children && <FaCaretDown className="" />}
                </Link>
                {item.children && (
                  <HeaderDropDown
                    ChildrenItem={item.children}
                    ParentUrl={item.value}
                  />
                )}
              </div>
            ))}
          </div>
          <Link href={`/admin`} className="flex w-full justify-center">
            <div className="relative h-[70px] w-full">
              <Image
                src={TradeMarkData?.websiteLogo}
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <div className="col-span-2 flex items-center gap-4  ">
            {AdminPageHeaderItems.slice(4, 8).map((item, index) => (
              <div key={index} className="relative group/main">
                <Link
                  href={`/${item.value}`}
                  className="px-3 w-max py-5 font-normal text-white flex items-center gap-1  hover:text-mainorange duration-300 hover:border-b border-b-0 border-mainorange "
                  key={index}
                >
                  {item.label}
                  {(item.label === "Dịch Vụ" || item.label === "Tin tức") && (
                    <FaCaretDown className="" />
                  )}
                </Link>
                {item.label === "Dịch Vụ" && <HeaderDropDown />}
                {item.label === "Tin tức" && <HeaderDropDown />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
