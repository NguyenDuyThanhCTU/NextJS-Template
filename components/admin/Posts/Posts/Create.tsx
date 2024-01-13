"use client";
import { PostsTypeItems, ProductTypeItems, WebsiteUrl } from "@assets/item";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { AddDataProps } from "@lib/Create";
import { Tabs, notification } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import slugify from "slugify";

interface CreateProps {
  setIsOpen: (isOpen: boolean) => void;
  Data: Array<any>;
  pid: number;
}

const Create = ({ setIsOpen, Data, pid }: CreateProps) => {
  const [DataFilter, setDataFilter] = useState<any>([]);
  const { FormData, setFormData } = useStateProvider();
  const [Keyword, setKeyword] = useState<any>([]);

  useEffect(() => {
    let sortedData = Data.filter((item) => item.title === FormData?.level0);

    let formattedArray = sortedData.map((item) => ({
      label: item.level1,
      value: item.level1,
    }));

    setDataFilter(formattedArray);
  }, [FormData?.level0]);

  useEffect(() => {
    //convert title to url with slugify
    setFormData({
      ...FormData,
      url: slugify(`${FormData?.title}pid${1000 + pid}.html`, {
        lower: true,
        locale: "vi",
      }),
    });
  }, [FormData?.title]);
  const HandleChangeKeyword = (item: number) => {
    let newKeyword = FormData?.keyword?.filter((i: any) => i !== item);
    setFormData({ ...FormData, keyword: newKeyword });
  };
  const router = useRouter();
  const HandleSubmit = async () => {
    console.log(FormData);

    await AddDataProps("Posts", FormData).then(() => {
      setIsOpen(false);
      router.refresh();
    });

    router.refresh();
  };
  return (
    <div>
      <Tabs
        tabPosition="top"
        items={[
          {
            key: "1",
            label: "Thông tin chung",
            children: (
              <form className="flex flex-col gap-3 overflow-y-auto h-[60vh]">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    {" "}
                    <InputForm
                      Label="Tiêu đề bài viết"
                      Type="Input"
                      field="title"
                    />
                    <InputForm
                      Label="Ảnh đại diện"
                      Type="Upload"
                      field="image"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <InputForm
                      Label="Loại bài viết"
                      Type="Select"
                      field="level0"
                      Option={PostsTypeItems}
                    />
                    <InputForm
                      Label="Mục bài viết"
                      Type="Select"
                      field="level1"
                      Option={DataFilter}
                    />
                  </div>
                </div>
                <InputForm Label="Chi Tiết" Type="Editor" field="content" />

                <InputForm Label="Mô tả" Type="TextArea" field="description" />
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
                                if (FormData.keyword === undefined) {
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
      <div className="flex w-full justify-end mt-5 pt-3 border-t border-black">
        <div
          className="bg-blue-500 hover:bg-blue-700 duration-300 cursor-pointer text-white p-2 rounded-md"
          onClick={() => HandleSubmit()}
        >
          Cập nhật
        </div>
      </div>
    </div>
  );
};

export default Create;
