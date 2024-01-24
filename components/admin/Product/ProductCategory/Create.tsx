"use client";
import { ProductTypeItems } from "@assets/item";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { insertOne, updateOne } from "@lib/api";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Create = ({ setIsOpen, Type, Data }: any) => {
  const router = useRouter();
  const { FormData } = useStateProvider();

  const HandleSubmit = async (type: string) => {
    if (type === "add") {
      if (FormData?.level0 === undefined) {
        notification.error({
          message: "Vui lòng chọn loại sản phẩm",
        });
      } else {
        await insertOne("ProductCategory", FormData).then(() => {
          setIsOpen(false);
          router.refresh();
        });
      }
    }
    if (type === "update") {
      if (Data?.level1 === undefined) {
        notification.error({
          message: "Vui lòng chọn mục sản phẩm",
        });
      } else {
        await updateOne("ProductCategory", Data?.id, FormData).then(() => {
          setIsOpen(false);
          router.refresh();
        });
      }
    }
  };

  const OptionItems = [
    {
      label: "Danh mục sản phẩm",
      value: "type",
    },
    {
      label: "Topic",
      value: "topic",
    },
  ];

  return (
    <div>
      {Type === "update" ? (
        <div className="flex flex-col gap-2">
          <InputForm
            Label="Mục sản phẩm"
            Type="Input"
            field="level1"
            PlaceHolder={Data?.level1}
          />
          <div className="flex w-full justify-end">
            <div
              className="bg-blue-500 hover:bg-blue-700 duration-300 text-white p-2 rounded-md cursor-pointer"
              onClick={() => HandleSubmit("update")}
            >
              Cập nhật
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="p-2 flex flex-col gap-2">
            <div className="border border-black rounded-lg  pb-2">
              <div className="p-2">
                <InputForm
                  Label="Mục cần thêm"
                  Type="Radio"
                  field="Type"
                  Option={OptionItems}
                />
              </div>
            </div>
            {FormData?.Type === "type" ? (
              <>
                <InputForm
                  Label="Loại sản phẩm"
                  Type="Select"
                  field="level0"
                  Option={ProductTypeItems}
                />
                <InputForm Label="Mục sản phẩm" Type="Input" field="level1" />
              </>
            ) : (
              FormData?.Type === "type" && (
                <>
                  {" "}
                  <InputForm
                    Label="Tiêu đề Topic"
                    Type="Input"
                    field="title"
                    Option={OptionItems}
                  />
                  <InputForm
                    Label="Ảnh đại diện"
                    Type="Upload"
                    field="image"
                    Option={OptionItems}
                  />
                </>
              )
            )}

            <div className="flex w-full justify-end ">
              <div
                className="bg-blue-500 hover:bg-blue-700 duration-300 text-white p-2 rounded-md cursor-pointer"
                onClick={() => HandleSubmit("add")}
              >
                Tải lên
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Create;
