"use client";
import { AdminPageHeaderItems, IconMapping } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { PiBellRingingThin } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
import { Modal, Tooltip } from "antd";
import { RxCross2 } from "react-icons/rx";
import HeaderDropDown from "./Items/HeaderDropDown";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);

  useEffect(() => {
    const sort: any = AdminPageHeaderItems?.filter((product: any) =>
      product?.label?.toLowerCase().includes(search.toLowerCase())
    );

    setSearchRs(sort);
  }, [search]);

  return (
    <div className="z-50 relative">
      <div className="border-b shadow-xl  h-[65px] grid grid-cols-4 fixed top-0 w-full bg-white">
        <Link href={`/admin`} className="w-full ">
          <div className="h-[60px] w-full relative ">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/RUN%20(500%20x%2084%20px).png?alt=media&token=0eab0ed0-9368-4abd-aa83-d1903049a162"
              alt="Admin logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
        <div className="col-span-2 flex justify-between items-center ">
          {AdminPageHeaderItems.map((item, index) => {
            const Icon = IconMapping[item.icon];

            return (
              <div className="group relative" key={index}>
                <Link
                  href={
                    item.children.length > 0
                      ? `/admin/${item.value}?tab=${item.children[0]?.value}`
                      : `/admin/${item.value}`
                  }
                  className="flex gap-2 items-center font-light hover:bg-gray-100 h-max py-2 px-5  rounded-md"
                >
                  <Icon />
                  <p className="w-max text-[14px]">{item.label}</p>
                </Link>
                {item.children.length > 0 && (
                  <div className="hidden group-hover:block absolute top-14 z-50 ">
                    <HeaderDropDown Root={item.value} Data={item.children} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-1 text-[24px] text-gray-600 w-full cursor-pointer ">
          <div>
            <Tooltip title="Chế độ ban đêm" placement="left">
              <div className="text-[#D6630A] bg-[#FFE6AD] text-[18px] p-2 rounded-full hover:bg-[#D6630A] hover:text-white duration-300">
                <IoSunnyOutline />
              </div>
            </Tooltip>
          </div>
          <div>
            <div
              className=" p-2 hover:scale-125 duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              <IoIosSearch />
            </div>
          </div>
          <div>
            <div className=" p-2  hover:scale-125 duration-300">
              <PiBellRingingThin />
            </div>
          </div>
          <div>
            <div className="group relative">
              <div className=" p-2  hover:scale-125 duration-300">
                <TbGridDots />
              </div>
              <div className="hidden group-hover:block absolute top-14 -left-14">
                <HeaderDropDown />
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-10 h-10 ">
              <Image
                sizes="(min-width: 808px) 50vw, 100vw"
                src="https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/Truth.png?alt=media&token=63945692-a35c-4419-9f56-a1c3292558ed"
                alt="avt"
                fill
                style={{ objectFit: "cover", borderRadius: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        footer={null}
        closeIcon={null}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className=" relative w-full">
          <div className=" rounded-full border-mainyellow flex items-center ">
            <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
              <div className="col-span-6  flex items-center gap-2">
                <FaSearch />
                <input
                  type="text"
                  className="outline-none "
                  placeholder="Tìm kiếm chức nắng ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div>
                <div
                  className={`${
                    search ? "block" : "hidden"
                  }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                  onClick={() => setSearch("")}
                >
                  <RxCross2 />
                </div>
              </div>
            </div>
          </div>
          {search && (
            <div className="absolute w-full bg-gray-100 top-full flex flex-col shadow-inner z-50 mt-5 ">
              <div className=" flex flex-col">
                {searchRs.map((product: any, idx: number) => {
                  const Icon = IconMapping[product.icon];
                  return (
                    <Link
                      href={`/chi-tiet-san-pham/${product.url}`}
                      key={idx}
                      className="cursor-pointer hover:text-red-500 p-2 hover:bg-gray-200 flex items-center gap-2 text-[18px] font-LexendDeca font-light"
                    >
                      <Icon />
                      <p> {product.label}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Header;
