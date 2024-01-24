"use client";
import { WebsiteUrl } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { updateOne } from "@lib/api";
import { Form, Modal, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const SeoConfig = ({ Data }: any) => {
  const [isOpenBasicSEO, setIsOpenBasicSEO] = useState(false);
  const [isOpenAdvanceSEO, setIsOpenAdvanceSEO] = useState(false);
  const { setFormData, FormData } = useStateProvider();
  const [Keyword, setKeyword] = useState<any>([""]);
  const BasicSEOItems = [
    {
      label: "Tiêu đề trang ",
      value: Data?.Title,
      tooltip: "",
    },

    {
      label: "Thẻ mô tả",
      value: Data?.Description,
      tooltip: "",
    },

    {
      label: "Favicon",
      value: Data?.Favicon,
      tooltip: "",
    },
  ];

  const router = useRouter();
  const HandleSubmit = async (e: any, type: string) => {
    e.preventDefault();

    await updateOne("Config", "SEOconfig", FormData).then(() => {
      if (type === "Basic") setIsOpenBasicSEO(false);
      if (type === "Advance") setIsOpenAdvanceSEO(false);
      router.refresh();
    });

    router.refresh();
  };

  const HandleChangeKeyword = (item: number) => {
    let newKeyword = FormData?.Keyword?.filter((i: any) => i !== item);
    setFormData({ ...FormData, Keyword: newKeyword });
  };

  return (
    <>
      <div className="py-5 ">
        <div className="w-full p:px-0 d:px-10 font-light">
          <div className="">
            <h1 className="text-[30px] font-semibold"> Cấu Hình SEO </h1>
            <p className=" text-gray-500">
              Bổ sung đầy đủ thông tin SEO để website của bạn có thể được tìm
              thấy trên các công cụ tìm kiếm
            </p>
          </div>
          <Link href={`https://www.google.com/search?q=${WebsiteUrl}`}>
            <div className="border rounded-md border-black hover:shadow-2xl duration-300 mt-3 cursor-pointer">
              <div className="flex p-5 gap-3 flex-col">
                <div className="">Kết quả tìm kiếm:</div>
                <div className=" flex flex-col p:ml-0 d:ml-10">
                  <h2 className="text-[#1a0dab]  flex items-center gap-3">
                    <Image
                      src={Data?.Favicon}
                      alt="Logo"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />{" "}
                    <div>
                      <p className="text-[22px] font-normal">{Data?.Title}</p>
                      <p className="text-[#006621] ">{WebsiteUrl}</p>
                    </div>
                  </h2>

                  <p className="mt-3">{Data?.Description}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="py-5 ">
        <div className="w-full grid p:grid-cols-1 d:grid-cols-2 p:px-0 d:px-10 font-light gap-5">
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
                  <EditButton onClick={setIsOpenBasicSEO} />
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
                    ) : item.label === "Favicon" ? (
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
                <div className="col-span-6 pl-2 py-2 flex flex-wrap gap-2">
                  {Data?.Keyword?.map((item: any, idx: number) => (
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
                  <EditButton onClick={setIsOpenAdvanceSEO} />
                </div>
              </div>

              <div className="mt-4"></div>
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
                    <div className="p-2 overflow-auto">
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
        <>
          <Modal
            title="Cấu hình SEO cơ bản"
            footer={null}
            open={isOpenBasicSEO}
            onCancel={() => setIsOpenBasicSEO(false)}
            destroyOnClose={true}
            afterClose={() => setFormData({})}
          >
            <form
              onSubmit={(e) => HandleSubmit(e, "Basic")}
              className="p-2 flex flex-col gap-2"
            >
              <InputForm
                Label="Tiêu đề trang"
                Type="Input"
                field="Title"
                PlaceHolder={Data?.Title}
              />
              <InputForm
                Label="Thẻ mô tả"
                Type="Input"
                field="Description"
                PlaceHolder={Data?.Description}
              />
              <InputForm
                Label="Favicon"
                Type="Upload"
                field="Favicon"
                PlaceHolder={Data?.Favicon}
              />

              <div className="border rounded-xl">
                <div className="p-2 flex flex-col">
                  <div className="grid grid-cols-7 mt-2">
                    <div className="py-2 pr-3 flex items-start gap-2 col-span-1 w-full justify-end">
                      Từ khóa SEO:
                    </div>
                    <div className="col-span-6">
                      <div className=" pl-2 py-2 flex flex-wrap gap-2">
                        {FormData?.Keyword?.length > 0 && (
                          <>
                            {FormData?.Keyword?.map(
                              (item: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="border bg-slate-200 rounded-full relative"
                                >
                                  <div className="w-max py-1 px-3">{item}</div>
                                  <div
                                    className="bg-white p-1 absolute rounded-full w-max -top-2 -right-2 cursor-pointer"
                                    onClick={() => HandleChangeKeyword(item)}
                                  >
                                    <RxCross2 />
                                  </div>
                                </div>
                              )
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="grid grid-cols-8  items-center  w-full justify-between  ">
                      <div className="col-span-2 flex items-center gap-2 ">
                        <p>Thêm từ khóa</p>
                      </div>
                      <div className="px-4 py-1 border flex justify-between items-center   bg-white rounded-lg w-full col-span-6">
                        <input
                          type="text"
                          className=" outline-none w-full"
                          value={Keyword}
                          onChange={(e) => setKeyword(e.target.value)}
                        />
                        <div
                          className="text-[20px]  cursor-pointer duration-300 hover:text-blue-500"
                          onClick={() => {
                            if (FormData.Keyword === undefined) {
                              setFormData({ ...FormData, Keyword: [Keyword] });
                              setKeyword("");
                            } else {
                              setFormData({
                                ...FormData,
                                Keyword: [...FormData?.Keyword, Keyword],
                              });
                              setKeyword("");
                            }
                          }}
                        >
                          <MdUpload />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 duration-300 text-white p-2 rounded-md"
                  type="submit"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </Modal>
        </>
      </div>
    </>
  );
};

export default SeoConfig;
