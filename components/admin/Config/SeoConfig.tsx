"use client";
import EditButton from "@components/items/server-items/EditButton";
import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const SeoConfig = () => {
  const BasicSEOItems = [
    {
      label: "Tiêu đề trang ",
      value: "",
      tooltip: "",
    },

    {
      label: "Thẻ mô tả",
      value: "",
      tooltip: "",
    },

    {
      label: "Favicon",
      value: "",
      tooltip: "",
    },
  ];

  return (
    <>
      <div className="py-5 ">
        <div className="w-full px-10 font-light">
          <div className="">
            <h1 className="text-[30px] font-semibold"> Cấu Hình SEO </h1>
            <p className=" text-gray-500">
              Bổ sung đầy đủ thông tin SEO để website của bạn có thể được tìm
              thấy trên các công cụ tìm kiếm
            </p>
          </div>
          <div className="border rounded-md border-black hover:shadow-2xl duration-300 mt-3 cursor-pointer">
            <div className="flex p-5 gap-3 flex-col">
              <div className="">Kết quả tìm kiếm:</div>
              <div className=" flex flex-col ml-10">
                <h2 className="text-[#1a0dab] text-[22px]">
                  Sơn lót epoxy rainbow 1073
                </h2>
                <p className="text-[#006621] ">
                  http://sikadalat.vn/son-lot-epoxy-rainbow-1073
                </p>
                <p>
                  SIKA,SIKA ĐÀ LẠT, BESTMIX, CHỐNG THẤM ĐÀ LẠT, CHỐNG THẤM GIÁ
                  RẺ, SIKA GIÁ RẺ, CHỐNG THẤM NỨT, CHỐNG RÊU MỐC, Sơn lót epoxy
                  rainbow 1073{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 ">
        <div className="w-full grid grid-cols-2 px-10 font-light gap-5">
          <div className=" mt-3 border border-black shadow-sm bg-white rounded-md  ">
            <div className="p-4 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-[18px]">
                  <p>Cấu hình SEO cơ bản</p>
                  <Tooltip
                    title={`Trang "404 Not Found" xuất hiện khi URL không chính xác, trang web đã bị xóa hoặc máy chủ không thể tìm thấy URL mà bạn đang cố truy cập`}
                  >
                    {" "}
                    <div className="text-[20px]">
                      <FaRegCircleQuestion />
                    </div>
                  </Tooltip>
                </div>
                <div>
                  <EditButton />
                </div>
              </div>

              <div className="mt-4">
                {BasicSEOItems.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className={`${
                      idx === BasicSEOItems.length - 1
                        ? "border-y"
                        : "border-t "
                    } grid grid-cols-6  border-x `}
                  >
                    <div className="py-2 pr-3 border-r flex items-center gap-2 col-span-2 w-full justify-end">
                      {" "}
                      <p> {item.label}</p>{" "}
                      {item.tooltip && (
                        <Tooltip title={item.tooltip}>
                          {" "}
                          <div className="">
                            <FaRegCircleQuestion />
                          </div>
                        </Tooltip>
                      )}
                      :{" "}
                    </div>
                    {item.label === "Vị trí (Google map)" ? (
                      <></>
                    ) : item.label === "Logo website" ? (
                      <div className="py-2 flex items-center  ml-2">
                        <Image
                          src={item.value}
                          alt="logo website"
                          width={100}
                          height={100}
                        ></Image>
                      </div>
                    ) : (
                      <div className="col-span-4 pl-2 py-2 text-gray-00">
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 mt-2">
                <div className="py-2 pr-3 flex items-center gap-2 col-span-1 w-full justify-end">
                  Từ khóa SEO:
                </div>
                <div className="col-span-6 pl-2 py-2 flex gap-2 overflow-auto scrollbar-thin ">
                  {[
                    "sika",
                    "sika đà lạt",
                    "bestmix",
                    "chống thấm đà lạt",
                    "chống thấm giá rẻ",
                    "sika giá rẻ",
                    "chống thấm nứt",
                    "chống rêu mốc",
                    "sơn lót epoxy rainbow 1073",
                  ].map((item: any, idx: number) => (
                    <div key={idx} className="border bg-slate-200 rounded-full">
                      <div className="w-max py-1 px-3">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-3 border border-black shadow-sm bg-white rounded-md  ">
            <div className="p-4 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-[18px]">
                  <p>Cấu hình SEO nâng cao </p>
                  <Tooltip
                    title={`Trang "404 Not Found" xuất hiện khi URL không chính xác, trang web đã bị xóa hoặc máy chủ không thể tìm thấy URL mà bạn đang cố truy cập`}
                  >
                    {" "}
                    <div className="text-[20px]">
                      <FaRegCircleQuestion />
                    </div>
                  </Tooltip>
                </div>
                <div>
                  <EditButton />
                </div>
              </div>

              <div className="mt-4">
                {/* {AdvanceSEOItems.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className={`${
                      idx === AdvanceSEOItems.length - 1
                        ? "border-y"
                        : "border-t "
                    } grid grid-cols-6  border-x `}
                  >
                    <div className="py-2 pr-3  flex items-end gap-2 col-span-2 w-full justify-end flex-col">
                      <div>
                        <p> {item.title}</p>
                      </div>
                      <div>
                        {" "}
                        <p> {item.label}</p>{" "}
                        {item.tooltip && (
                          <Tooltip title={item.tooltip}>
                            {" "}
                            <div className="">
                              <FaRegCircleQuestion />:
                            </div>
                          </Tooltip>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col col-span-4 px-2 ">
                      <div className="text-[#006621]  py-2">{item.value}</div>
                      <div className="border ">
                        <div className="p-2 min-h-[20px] ">{item.content}</div>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <div className="grid grid-cols-7 ">
                  <div className="py-2 pr-3 flex items-center gap-2 col-span-2 w-full justify-end">
                    Đường dẫn tới file robot:
                  </div>
                  <div className="col-span-5 pl-2 py-2 flex gap-2 overflow-auto scrollbar-thin text-[#006621] cursor-pointer">
                    http://sikadalat.vn/robots.txt
                  </div>
                  <div className="py-2 pr-3 flex items-start gap-2 col-span-2 w-full justify-end mt-2 ">
                    Nội dung file robots.txt:
                  </div>
                  <div className="col-span-5 pl-2 py-2 flex gap-2 border rounded-lg border-gray-500 mt-2 bg-slate-100">
                    <div className="p-2">
                      User-agent: * <br /> Disallow: /admin
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-7 ">
                  <div className="py-2 pr-3 flex items-center gap-2 col-span-2 w-full justify-end">
                    Đường dẫn tới file sitemap.xml:
                  </div>
                  <div className="col-span-5 pl-2 py-2 flex gap-2 overflow-auto scrollbar-thin text-[#006621] cursor-pointer">
                    http://sikadalat.vn/sitemap.xml
                  </div>
                  <div className="py-2 pr-3 flex items-start gap-2 col-span-2 w-full justify-end mt-2 ">
                    Nội dung file sitemap.xml:
                  </div>
                  <div className="col-span-5 pl-2 py-2 flex gap-2 border rounded-lg border-gray-500 mt-2 bg-slate-100">
                    <div className="p-2">
                      {`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://acme.com</loc>
        <lastmod>2023-04-06T15:02:24.021Z</lastmod>
        <changefreq>yearly</changefreq>
        <priority>1</priority>
      </url>
      <url>
        <loc>https://acme.com/about</loc>
        <lastmod>2023-04-06T15:02:24.021Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://acme.com/blog</loc>
        <lastmod>2023-04-06T15:02:24.021Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
    </urlset>`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoConfig;
