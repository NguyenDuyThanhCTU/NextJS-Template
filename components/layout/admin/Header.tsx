"use client";
import { AdminPageHeaderItems, IconMapping } from "@assets/item";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCaretRight, FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoListSharp, IoSunnyOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { PiBellRingingThin } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
import { Drawer, Modal, Tooltip } from "antd";
import { RxCross2 } from "react-icons/rx";
import HeaderDropDown from "./Items/HeaderDropDown";
import { sendGAEvent } from "@next/third-parties/google";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [selectedMB, setSelectedMB] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const sort: any = AdminPageHeaderItems?.filter((product: any) =>
      product?.label?.toLowerCase().includes(search.toLowerCase())
    );

    setSearchRs(sort);
  }, [search]);

  const HandleNavigate = (url: any) => {
    setOpen(false);
    router.push(url);
  };

  return (
    <div className="z-50 relative">
      <div className="border-b shadow-xl  h-[65px] p:hidden d:grid grid-cols-4 fixed top-0 w-full bg-white ">
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
        <div className="col-span-2 flex justify-center items-center ">
          {AdminPageHeaderItems.map((item, index) => {
            const Icon = IconMapping[item.icon];

            return (
              <div className="group relative" key={index}>
                <Link
                  href={`/admin?tab=${item.value}`}
                  className="flex gap-2 items-center font-light hover:bg-gray-100 h-max py-2 px-5  rounded-md"
                >
                  <Icon />
                  <p className="w-max text-[14px]">{item.label}</p>
                </Link>
                {item?.children.length > 0 && (
                  <div className="hidden group-hover:block absolute top-14 z-50 ">
                    <HeaderDropDown Data={item.children} />
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
            <div
              className=" p-2  hover:scale-125 duration-300"
              onClick={() =>
                sendGAEvent({ event: "buttonClicked", value: "xyz" })
              }
            >
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

      <div className="d:hidden p:block bg-mainNormalBlue ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-white  text-black shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <Link href={`/`} className="h-[84px] w-[130px]">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/ads-company-285a6.appspot.com/o/ADS.png?alt=media&token=e8ebc77d-d9b8-4bdf-9052-a484b53909e3"
                alt="Logo"
                width={150}
                height={84}
                className="w-full h-full p-2"
              />
            </Link>
            <div className="border-2 rounded-xl border-gray-500">
              <div
                className="text-[25px] bg-gray-100 p-2 rounded-xl"
                onClick={() => setOpen(true)}
              >
                <IoListSharp />
              </div>
            </div>
          </div>
          <>
            <Drawer
              placement="left"
              closable={false}
              width={300}
              onClose={() => setOpen(false)}
              open={open}
            >
              <div className=" ">
                <div onClick={() => HandleNavigate("/")} className="p-5">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ads-company-285a6.appspot.com/o/ADS.png?alt=media&token=e8ebc77d-d9b8-4bdf-9052-a484b53909e3"
                    alt="logo"
                  />
                </div>

                <div>
                  <div className="flex flex-col mt-2 font-LexendDeca font-light">
                    {AdminPageHeaderItems.map((item: any, idx: number) => (
                      <div key={idx}>
                        <div
                          className={`${
                            idx + 1 === selectedMB
                              ? "text-red-500 "
                              : "text-black"
                          } cursor-pointer border-b  py-2 flex justify-between items-center`}
                          onClick={() => setSelectedMB(idx + 1)}
                        >
                          <div
                            onClick={() =>
                              HandleNavigate(`/admin?tab=${item.value}`)
                            }
                          >
                            {item.label}
                          </div>
                          {item?.children.length > 0 && (
                            <FaCaretRight
                              className={`${
                                idx + 1 === selectedMB
                                  ? "rotate-90 "
                                  : "rotate-0"
                              } duration-300`}
                            />
                          )}
                        </div>
                        {item?.children.length > 0 && (
                          <div
                            className={`flex flex-col gap-2 py-2 ml-4 duration-300 ${
                              idx + 1 === selectedMB ? "h-max " : "hidden"
                            }`}
                          >
                            {item?.children.map((child: any, idx: number) => (
                              <div
                                onClick={() =>
                                  HandleNavigate(`/admin?tab=${child.value}`)
                                }
                                key={idx}
                                className="cursor-pointer"
                              >
                                {child.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div
                      onClick={() => HandleNavigate(`/`)}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                    >
                      Thoát
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </>
          <>
            <Modal
              closeIcon={false}
              open={isModalOpen}
              onCancel={() => setIsModalOpen(false)}
              footer={false}
            >
              <div className=" relative bg-white py-3">
                <div className="border rounded-full bg-white border-mainblue flex items-center ">
                  <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                    <input
                      type="text"
                      className="outline-none mr-2 col-span-6 text-mainblue"
                      placeholder="Tìm kiếm"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
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
                  <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
                    <FaSearch />
                  </div>
                </div>
                {search && (
                  <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                    <div className=" flex flex-col">
                      {searchRs.map((product: any, idx: number) => (
                        <Link
                          href={`$chi-tiet-san-pham/${product.url}`}
                          key={idx}
                          className="cursor-pointer p-2 hover:bg-gray-100"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Modal>
          </>
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
