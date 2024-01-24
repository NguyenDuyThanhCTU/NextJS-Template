"use client";
import { ProductTypeItems, WebsiteUrl } from "@assets/item";
import {
  convertDate,
  uploadImage,
} from "@components/items/server-items/Handle";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { insertAndCustomizeId } from "@lib/api";
import { ColorPicker, Tabs, Upload } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import slugify from "slugify";

interface ProductHandleProps {
  Data?: any;
  setIsOpen: (value: boolean) => void;
  Type?: string;
  Category: any;
  productLength?: any;
}

const ProductHandle = ({
  Data,
  setIsOpen,
  Type,
  Category,
  productLength,
}: ProductHandleProps) => {
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [Keyword, setKeyword] = useState<any>();
  const [Color, setColor] = useState<any>([]);
  const { FormData, setFormData } = useStateProvider();
  const [Change, setChange] = useState<any>(Type === "update" ? false : true);
  const router = useRouter();

  useEffect(() => {
    let sortedData = Category?.filter(
      (item: any) => item.level0 === FormData?.level0
    );

    let formattedArray = sortedData?.map((item: any) => ({
      label: item.level1,
      value: slugify(item?.level1 ? item?.level1 : "", {
        lower: true,
        locale: "vi",
      }),
    }));
    setDataFilter(formattedArray);
  }, [FormData.level0]);

  useEffect(() => {
    const randomText = Math.floor(Math.random() * 100000000000);
    const headUrl = slugify(`${FormData?.title}-p${randomText}.html`, {
      lower: true,
      locale: "vi",
    });
    setFormData({
      ...FormData,
      url: `${headUrl}?poid=${100000000001 + productLength}`,
    });
  }, [FormData.title]);

  const HandleSubmit = async () => {
    const level0 = slugify(`${FormData?.level0}`, {
      lower: true,
      locale: "vi",
    });
    let Data = { ...FormData, level0: level0 };

    await insertAndCustomizeId(
      "Products",
      Data,
      `${100000000001 + productLength}`
    ).then(() => {
      setIsOpen(false);
      router.refresh();
    });

    router.refresh();
  };

  const customRequest = async (options: any) => {
    options.onSuccess({});

    try {
      const url = await uploadImage(options.file, "avatar");
      const newUrl = {
        uid: options.file.uid,
        url: url,
      };
      if (FormData?.subimage === undefined) {
        setFormData({ ...FormData, subimage: [newUrl] });
      } else {
        setFormData({ ...FormData, subimage: [...FormData?.subimage, newUrl] });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleRemove = (file: any) => {
    const newImageUrl = FormData?.subimage.filter(
      (item: any) => item.uid !== file.uid
    );
    setFormData({ ...FormData, subimage: newImageUrl });
  };
  const Date = convertDate(Data?.createdAt);

  const HandleChange = () => {
    setFormData(Data);
    setChange(true);
  };
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
                      <div className="flex flex-col gap-4 font-LexendDeca font-light">
                        <div className="p-4 grid grid-cols-6 gap-5 text-[20px]">
                          <div className="col-span-2">
                            <div className="p-3  bg-slate-100 ">
                              <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center">
                                  <Image
                                    src={Data?.image}
                                    alt="Product"
                                    width={100}
                                    height={100}
                                    className=" rounded-md"
                                  />
                                  <p className="text-[20px] font-normal text-center mt-2">
                                    {Data?.title}
                                  </p>
                                </div>
                                <div className="mt-5">
                                  <p className="text-center font-light ">
                                    {Data?.evaluate ? Data?.evaluate : "N/A"}{" "}
                                    Đánh giá
                                  </p>
                                  <div className="text-yellow-400 flex items-center text-[20px] gap-1">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-4 text-gray-600 flex flex-col gap-5">
                            <div className="">
                              <h3 className="font-bold">Thông tin sản phẩm</h3>

                              <div className="border rounded-xl border-black mt-3">
                                <div className="text-[18px] ml-2 mt-3 grid grid-cols-1 w-full gap-2 p-2 overflow-y-auto">
                                  <li className="">
                                    Tên sản phẩm:{" "}
                                    <span className="underline">
                                      {Data?.title}
                                    </span>
                                  </li>

                                  <div className="flex items-center gap-2">
                                    <p> Mã sản phẩm:</p>
                                    <div className="rounded-md px-3 py-1 bg-gray-200">
                                      #{Data?.id}
                                    </div>
                                  </div>
                                  <li>
                                    Giá sản phẩm:{" "}
                                    <strong className="text-red-500">
                                      {Data?.price} VNĐ
                                    </strong>
                                  </li>

                                  <li>
                                    Trạng thái:{" "}
                                    <span className="text-green-500">
                                      Còn Hàng
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
                              <h3 className="font-bold">Thông tin Sale</h3>
                              <div>chuyển hướng đến sale</div>
                            </div>
                            <div className="">
                              <h3 className="font-bold">Mô tả sản phẩm</h3>
                              <div
                                dangerouslySetInnerHTML={
                                  Data?.describe
                                    ? { __html: Data?.describe }
                                    : { __html: "" }
                                }
                              ></div>
                            </div>
                            <div className="">
                              <h3 className="font-bold">Chi tiết sản phẩm</h3>
                              <div
                                className="truncate"
                                dangerouslySetInnerHTML={
                                  Data?.detail
                                    ? { __html: Data?.detail }
                                    : { __html: "" }
                                }
                              ></div>
                            </div>
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
                <>
                  <form className="flex flex-col gap-2">
                    <InputForm
                      Label="Tên sản phẩm"
                      Type="Input"
                      field="title"
                      Tips="Nhập tên sản phẩm, tối đa 100 ký tự"
                    />
                    <InputForm
                      Label="Giá sản phẩm"
                      Type="Input"
                      field="price"
                      Tips="Nhập giá sản phẩm (VD: 1.000.000, 10.000.000, ...) .Tối đa 100 ký tự"
                    />
                    <InputForm
                      Label="Thẻ Mô tả"
                      Type="TextArea"
                      field="description"
                    />

                    <div className="border border-gray-600">
                      <div className="p-3 flex flex-col gap-2">
                        <InputForm
                          Label="Loại sản phẩm"
                          Type="Select"
                          field="level0"
                          Option={ProductTypeItems}
                        />
                        <>
                          {" "}
                          <InputForm
                            Label="Mục sản phẩm"
                            Type="Select"
                            field="level1"
                            Option={DataFilter}
                          />
                        </>
                      </div>
                    </div>
                    <div className="flex gap-5 flex-col mt-5">
                      <InputForm
                        Label="Mô tả sản phẩm"
                        Type="Editor"
                        field="describe"
                      />
                      <InputForm
                        Label="Chi tiết sản phẩm"
                        Type="Editor"
                        field="detail"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Ảnh phụ</label>
                      <Upload
                        customRequest={customRequest}
                        listType="picture-card"
                        onRemove={handleRemove}
                      >
                        <div className="flex flex-col items-center">
                          <AiOutlinePlus className="text-[24px]" />
                          <div className="mt-2">Upload</div>
                        </div>
                      </Upload>
                    </div>
                    <InputForm
                      Label="Ảnh đại diện"
                      Type="Upload"
                      field="image"
                    />
                  </form>
                </>
              ),
            },
            {
              key: "2",
              label: "Thông tin khác",
              children: (
                <form className="flex flex-col gap-3">
                  <div>
                    <p>Bảng màu:</p>
                    <div className="border rounded-lg mt-3 min-h-20 border-black">
                      <div className="p-2 flex flex-wrap gap-5">
                        {FormData?.color?.length > 0 && (
                          <>
                            {FormData?.color?.map((item: any, idx: number) => (
                              <div
                                key={`${item}-${idx}`}
                                className={` bg-[#${item}] border rounded-full relative`}
                              >
                                <ColorPicker value={`#${item}`} />
                                <div
                                  className="bg-white p-1 absolute rounded-full w-max -top-2 -right-2 cursor-pointer"
                                  onClick={() => {
                                    const newColor = FormData?.color.filter(
                                      (itemColor: any) => itemColor !== item
                                    );
                                    setFormData({
                                      ...FormData,
                                      color: newColor,
                                    });
                                  }}
                                >
                                  <RxCross2 />
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-8  items-center  w-full justify-between  ">
                    <div className="col-span-2 flex items-center gap-2 ">
                      <p>Màu</p>
                    </div>
                    <div className="px-4 py-1 border flex justify-between items-center   bg-white rounded-lg w-full col-span-6">
                      <ColorPicker
                        defaultValue="#1677ff"
                        onChangeComplete={(e) => setColor(e.toHex())}
                        showText
                      />
                      <div
                        className="text-[20px]  cursor-pointer duration-300 hover:text-blue-500"
                        onClick={() => {
                          if (FormData?.color === undefined) {
                            setFormData({
                              ...FormData,
                              color: [Color],
                            });
                            setColor("");
                          } else {
                            setFormData({
                              ...FormData,
                              color: [...FormData?.color, Color],
                            });
                          }

                          setColor("");
                        }}
                      >
                        <MdUpload />
                      </div>
                    </div>
                  </div>
                </form>
              ),
            },
            {
              key: "3",
              label: "Cấu hình SEO",
              children: (
                <form className="font-LexendDeca">
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
                                          // onClick={() =>
                                          //   HandleChangeKeyword(item)
                                          // }
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
                                    setKeyword("");
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
    </div>
  );
};

export default ProductHandle;
