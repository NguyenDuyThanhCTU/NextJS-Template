"use client";
import { ProductTypeItems } from "@assets/item";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { insertOne } from "@lib/api";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Create = ({ setIsOpen }: any) => {
  const router = useRouter();
  const { FormData, setFormData } = useStateProvider();

  const HandleSubmit = async (e: any) => {
    e.preventDefault();

    if (FormData?.level0 === undefined) {
      notification.error({
        message: "Vui lòng chọn loại sản phẩm",
      });
    }

    await insertOne("ProductTypes", FormData).then(() => {
      setIsOpen(false);
      router.refresh();
    });

    router.refresh();
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
  console.log(FormData);
  return (
    <div>
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="p-2 flex flex-col gap-2"
      >
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
        )}

        <div className="flex w-full justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 duration-300 text-white p-2 rounded-md"
            type="submit"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
