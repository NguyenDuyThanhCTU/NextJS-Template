"use client";
import { HeaderItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCaretDown, FaRegUser, FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = ({ ProductCategory }: any) => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const { Products, Config } = useData();
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [open, setOpen] = useState(false);
  const { setIsLoading } = useStateProvider();

  const HeaderPluginItems = [
    {
      label: "Đăng ký lái thử",
      value: "dang-ky-lai-thu",
    },
    {
      label: "Chính Sách Bảo Hành",
      value: "chinh-sach-bao-hanh",
    },
  ];

  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);

  return (
    <div className="z-50 fixed top-0 w-full bg-white">
      <div className="mx-14 d:block p:hidden">
        <div className="flex justify-between items-center  py-5">
          <Link href={`/`} className="h-[80px] w-[150px] relative">
            <Image
              src={
                Config?.find((item: any) => item.id === "contact").LogoWebsite
              }
              alt="logo"
              fill
              sizes="(min-width: 808px) 20vw, 20vw"
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
          <div>
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainColor flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainColor"
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
                <div className="bg-mainColor py-3 px-6 text-white rounded-r-full cursor-pointer">
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
          </div>
          <div className="flex items-center gap-6 text-[25px] ">
            <IoCartOutline />
            <FaRegUser />
          </div>
        </div>
        <div className=" w-full bg-mainColor">
          <div className="flex text-[20px] font-normal text-white">
            <Link
              href={`/`}
              className="px-10 bg-black text-white  py-2 cursor-pointer hover:bg-white hover:text-mainColor duration-300"
            >
              Trang chủ
            </Link>
            {HeaderItems.slice(1, HeaderItems.length).map(
              (item: any, idx: number) => (
                <div className="relative group/main " key={idx}>
                  <Link
                    href={`/${item.value}`}
                    className="px-6 flex items-center  gap-2  py-2 cursor-pointer hover:bg-white hover:text-mainColor duration-300"
                    key={idx}
                  >
                    <p> {item.label}</p>
                    {(item.label === "Xe Đạp Trợ Lực Điện" ||
                      item.label === "Xe Đạp Điện" ||
                      item.label === "Tiện Ích") && (
                      <FaCaretDown className="text-[20px]  " />
                    )}
                  </Link>
                  {item.label === "Tiện Ích" && (
                    <div className="flex flex-col top-8 absolute z-50 w-full">
                      <div className="bg-none w-full h-4"></div>
                      <div className=" top-9 hidden group-hover/main:block duration-300">
                        <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                          {HeaderPluginItems.map((items: any, idx: number) => (
                            <Link
                              key={idx}
                              href={`/${items.value}`}
                              className="full"
                            >
                              <p className="py-2 px-4 hover:bg-green-100 duration-300 text-black truncate text-[15px] font-light">
                                {" "}
                                {items.label}
                              </p>
                            </Link>
                          ))}

                          {}
                        </div>
                      </div>
                    </div>
                  )}
                  {item.label === "Xe Đạp Trợ Lực Điện" && (
                    <div className="flex flex-col top-8 absolute z-50 w-full">
                      <div className="bg-none w-full h-4"></div>
                      <div className=" top-9 hidden group-hover/main:block duration-300">
                        <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                          {ProductCategory.filter(
                            (item: any) => item.parent === "Xe đạp trợ lực điện"
                          ).map((items: any, idx: number) => (
                            <Link
                              key={idx}
                              href={`/xe-dap-tro-luc-dien?type=${items.typeUrl}`}
                              className="full"
                            >
                              <p className="py-2 px-4 hover:bg-green-100 duration-300 text-black truncate text-[15px] font-light">
                                {" "}
                                {items.type}
                              </p>
                            </Link>
                          ))}

                          {}
                        </div>
                      </div>
                    </div>
                  )}
                  {item.label === "Xe Đạp Điện" && (
                    <div className="flex flex-col top-8 absolute z-50 w-full">
                      <div className="bg-none w-full h-4"></div>
                      <div className=" top-9 hidden group-hover/main:block duration-300">
                        <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                          {/* {productTypes
                          .filter((item: any) => item.parent === "Xe đạp điện")
                          .map((items: any, idx: number) => (
                            <Link
                              key={idx}
                              href={`/xe-dap-tro-luc-dien?type=${items.typeUrl}`}
                              className="full"
                            >
                              <p className="py-2 px-4 hover:bg-green-100 duration-300 text-black truncate text-[15px] font-light">
                                {" "}
                                {items.type}
                              </p>
                            </Link>
                          ))} */}

                          {}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="d:hidden p:block fixed  h-[84px] w-full top-0  z-50">
        <div className="    bg-mainColor  text-white shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <Link href={`/`} className="h-[84px]">
              <div
                className="
      h-[80px] w-[150px] relative"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/xedapdiencantho.appspot.com/o/z5035212878455_22c2d721bc24af1ef642ada363b2876c.jpg?alt=media&token=6dc42b24-44f2-4a3b-9d9f-50fbf6ac2695"
                  alt="Logo"
                  className="w-full h-full p-2"
                  fill
                  sizes="(min-width: 808px) 50vw, 50vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </Link>
            <div className="flex gap-2">
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div
                className="text-[22px] bg-mainorange  border text-white p-2"
                onClick={() => setOpen(true)}
              >
                <IoIosMenu />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainColor flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainColor"
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
                <div className="bg-mainblue py-3 px-6 text-mainColor rounded-r-full cursor-pointer">
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
                        className="cursor-pointer p-2 text-mainColor hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="bg-[#ddd] font-normal text-center py-2">
          UY TÍN TẠO NÊN THƯƠNG HIỆU
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
            <Link href={`/`} className="p-5">
              <div
                className="
              h-[80px] w-[250px] relative
              
              "
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/xedapdiencantho.appspot.com/o/DANH%20THI%E1%BA%BEP%20KEN%20EBIKE.jpg?alt=media&token=fc253a3e-8e98-459b-911f-381ced6d2f11"
                  alt="logo"
                  fill
                  sizes="(min-width: 808px) 50vw, 50vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </Link>

            <div>
              <div className="flex flex-col mt-2 ">
                {HeaderItems.slice(0, HeaderItems.length - 1).map(
                  (item: any, idx: number) => (
                    <Link
                      href={`/${item.value}`}
                      className="cursor-pointer border-b text-mainColor border-mainColor hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link
                  href={`/dang-ky-lai-thu`}
                  className="cursor-pointer border-b text-mainColor border-mainColor hover:text-red-500 duration-300 py-2"
                >
                  Đăng ký lái thử
                </Link>
              </div>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
