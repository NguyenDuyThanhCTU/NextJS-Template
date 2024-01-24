"use client";
import { PostsTypeItems, ProductTypeItems, WebsiteUrl } from "@assets/item";
import { convertDate } from "@components/items/server-items/Handle";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { insertAndCustomizeId, insertOne, updateOne } from "@lib/api";
import { Form, Tabs, notification } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { MdUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import slugify from "slugify";

interface PostsHandleProps {
  setIsOpen: (isOpen: boolean) => void;
  Category?: any;
  Type?: string;
  postsLength?: any;
  Data?: any;
}

const PostsHandle = ({
  setIsOpen,
  Category,
  Type,
  postsLength,
  Data,
}: PostsHandleProps) => {
  const [DataFilter, setDataFilter] = useState<any>([]);
  const { FormData, setFormData } = useStateProvider();
  const [Keyword, setKeyword] = useState<any>([]);
  const [Change, setChange] = useState<any>(Type === "update" ? false : true);

  useEffect(() => {
    let sortedData = Category.filter(
      (item: any) => item.title === FormData?.level0
    );

    let formattedArray = sortedData?.map((item: any) => ({
      label: item.level1,
      value: slugify(item?.level1 ? item?.level1 : "", {
        lower: true,
        locale: "vi",
      }),
    }));

    setDataFilter(formattedArray);
  }, [FormData?.level0]);

  useEffect(() => {
    const randomText = Math.floor(Math.random() * 100000000000);
    const headUrl = slugify(`${FormData?.title}-p${randomText}.html`, {
      lower: true,
      locale: "vi",
    });
    setFormData({
      ...FormData,
      url: `${headUrl}?poid=${100000000001 + postsLength}`,
    });
  }, [FormData?.title]);

  const HandleChangeKeyword = (item: number) => {
    let newKeyword = FormData?.keyword?.filter((i: any) => i !== item);
    setFormData({ ...FormData, keyword: newKeyword });
  };
  const router = useRouter();

  const HandleSubmit = async () => {
    const level0 = slugify(`${FormData?.level0}`, {
      lower: true,
      locale: "vi",
    });
    let Data = { ...FormData, level0: level0 };

    if (Type === "update") {
      await updateOne("Posts", Data?.id, Data).then(() => {
        setIsOpen(false);
        router.refresh();
      });
    } else {
      await insertAndCustomizeId(
        "Posts",
        Data,
        `${100000000001 + postsLength}`
      ).then(() => {
        setIsOpen(false);
        router.refresh();
      });
    }

    router.refresh();
  };

  const HandlePolicySubmit = async () => {
    const level0 = slugify(`${FormData?.level0}`, {
      lower: true,
      locale: "vi",
    });
    let Data = { ...FormData, level0: level0 };
    try {
      await updateOne("Posts", Data, FormData);
      setIsOpen(false);
      router.refresh();
    } catch (updateError) {
      console.error("Update failed:", updateError);

      try {
        await insertAndCustomizeId("Posts", Data, FormData.level1);
        setIsOpen(false);
        router.refresh();
      } catch (insertError) {
        console.error("Insert failed:", insertError);
      }
    }

    router.refresh();
  };
  const HandleChange = () => {
    setFormData(Data);
    setChange(true);
  };
  const Date = convertDate(Data?.createdAt);
  return (
    <div className="relative h-[60vh] overflow-y-auto scrollbar-thin px-3">
      {Type === "update" && (
        <div className="flex p-4">
          <div
            onClick={() => HandleChange()}
            className="bg-red-400 px-4 py-1 cursor-pointer hover:bg-red-600 duration-300 text-white "
          >
            <p className="w-max"> {Change ? "Reset" : "Bắt đầu chỉnh sửa"}</p>
          </div>
        </div>
      )}
      {Change && (
        <Tabs
          tabPosition="top"
          items={[
            {
              key: Type === "update" ? "0" : "1",
              label: Type === "update" ? "Thông tin chung" : "",
              children: (
                <>
                  {Type === "update" && (
                    <div>
                      <Link
                        href={`https://www.google.com/search?q=${WebsiteUrl}/chi-tiet-san-pham/${FormData?.url}`}
                      >
                        <div className="border rounded-md border-black hover:shadow-2xl duration-300 mt-3 cursor-pointer">
                          <div className=" flex flex-col px-5 py-3 text-[18px] font-normal">
                            <h2 className="text-[#1a0dab]  text-[30px] font-semibold">
                              {FormData?.title === undefined ? (
                                <>N/A</>
                              ) : (
                                FormData?.title
                              )}
                            </h2>
                            <p className="text-[#006621]">
                              {WebsiteUrl}/{FormData?.url}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <div className="p-4  text-[20px] font-LexendDeca">
                        <div className="col-span-4 text-gray-600 flex flex-col gap-5">
                          <div className="">
                            <h3 className="font-bold">Thông tin bài viết</h3>

                            <div className="border rounded-xl border-black mt-3">
                              <div className="text-[18px] ml-2 mt-3 grid grid-cols-1 w-full gap-2 p-2 overflow-y-auto">
                                <li className="">
                                  Tên bài viết:{" "}
                                  <span className="underline">
                                    {Data?.title}
                                  </span>
                                </li>

                                <div className="flex items-center gap-2">
                                  <p> Mã bài viết:</p>
                                  <div className="rounded-md px-3 py-1 bg-gray-200">
                                    #{Data?.id}
                                  </div>
                                </div>

                                <li>
                                  Trạng thái:{" "}
                                  <span className="text-green-500">
                                    Hiển thị
                                  </span>
                                </li>
                                <li>
                                  Ngày tạo: <strong> {Date}</strong>
                                </li>
                                <li>
                                  Lượt xem: <strong> {Data?.view}</strong>
                                </li>

                                <div className="border rounded-md bg-slate-100">
                                  <div className="p-2">
                                    {" "}
                                    <li>Danh mục: {Data?.level0}</li>
                                    <li>Danh mục con: {Data?.level1}</li>
                                    <li>Topic: </li>
                                  </div>
                                </div>
                                <li>
                                  lượt đánh giá:{" "}
                                  <strong>
                                    {Data?.evaluate ? Data?.evaluate : "N/A"}{" "}
                                    Đánh giá
                                  </strong>
                                </li>
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <h3 className="font-bold">Thẻ mô tả: </h3>
                            <div>{Data.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ),
            },
            {
              key: "1",
              label: "Thông tin chi tiết",
              children: (
                <form className="flex flex-col gap-3 overflow-y-auto h-[60vh]">
                  <div className="grid grid-cols-2 gap-5">
                    {" "}
                    {FormData?.level0 !== "Chính sách" && (
                      <div className="flex flex-col gap-2">
                        <InputForm
                          Label="Tiêu đề bài viết"
                          Type="Input"
                          field="title"
                        />{" "}
                        <InputForm
                          Label="Ảnh đại diện"
                          Type="Upload"
                          field="image"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <InputForm
                        Label="Loại bài viết"
                        Type="Select"
                        field="level0"
                        Option={PostsTypeItems}
                      />
                      <>
                        {" "}
                        <InputForm
                          Label="Mục bài viết"
                          Type="Select"
                          field="level1"
                          Option={DataFilter}
                        />
                      </>
                    </div>
                  </div>
                  <InputForm Label="Chi Tiết" Type="Editor" field="content" />
                  <InputForm
                    Label="Mô tả"
                    Type="TextArea"
                    field="description"
                  />
                </form>
              ),
            },
            {
              key: "2",
              label: "Cấu hình SEO",
              children: (
                <form className="font-LexendDeca">
                  <Link
                    href={`https://www.google.com/search?q=${WebsiteUrl}/chi-tiet-bai-viet/${FormData?.url}`}
                  >
                    <div className="border rounded-md border-black hover:shadow-2xl duration-300 mt-3 cursor-pointer">
                      <div className=" flex flex-col px-5 py-3 text-[18px] font-normal">
                        <h2 className="text-[#1a0dab]  text-[30px] font-semibold">
                          {FormData?.title === undefined ? (
                            <>N/A</>
                          ) : (
                            FormData?.title
                          )}
                        </h2>
                        <p className="text-[#006621]">
                          {WebsiteUrl}/{FormData?.url}
                        </p>
                        <p className="">
                          {FormData?.description === undefined
                            ? "N/A"
                            : FormData?.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex  flex-col gap-2 mt-5">
                    <InputForm
                      PlaceHolder={FormData?.title}
                      Label="Thẻ tiêu đề trang"
                      Type="Input"
                      field="title"
                    />
                    <InputForm Label="Đường dẫn" Type="Input" field="url" />

                    <InputForm
                      Label="Thẻ mô tả"
                      Type="Input"
                      field="description"
                    />
                    <div className="border rounded-xl border-black">
                      <div className="p-2 flex flex-col">
                        <div className="grid grid-cols-7 mt-2 items-center">
                          <div>Từ khóa SEO:</div>
                          <div className="col-span-6">
                            <div className=" pl-2 py-2 flex flex-wrap gap-2">
                              {FormData?.keyword?.length > 0 && (
                                <>
                                  {FormData?.keyword?.map(
                                    (item: any, idx: number) => (
                                      <div
                                        key={idx}
                                        className="border bg-slate-200 rounded-full relative"
                                      >
                                        <div className="w-max py-1 px-3">
                                          {item}
                                        </div>
                                        <div
                                          className="bg-white p-1 absolute rounded-full w-max -top-2 -right-2 cursor-pointer"
                                          onClick={() =>
                                            HandleChangeKeyword(item)
                                          }
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
                        <div className="mt-2 ">
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
                                  if (FormData?.keyword === undefined) {
                                    setFormData({
                                      ...FormData,
                                      keyword: [Keyword],
                                    });
                                  } else {
                                    setFormData({
                                      ...FormData,
                                      keyword: [...FormData?.keyword, Keyword],
                                    });
                                  }

                                  setKeyword("");
                                }}
                              >
                                <MdUpload />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ),
            },
          ]}
        />
      )}
      {FormData?.level0 === "Chính sách" ? (
        <>
          <div className="flex w-full justify-end mt-5 pt-3 border-t border-black">
            <div
              className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white p-2 rounded-md"
              onClick={() => HandlePolicySubmit()}
            >
              Cập nhật
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full justify-end mt-5 pt-3 border-t border-black">
            <div
              className="bg-blue-500 hover:bg-blue-700 duration-300 cursor-pointer text-white p-2 rounded-md"
              onClick={() => HandleSubmit()}
            >
              Cập nhật
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostsHandle;
