"use client";
import { PostsTypeItems, ProductTypeItems } from "@assets/item";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { insertOne } from "@lib/api";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface CategoryCreateProps {
  setIsOpen: (isOpen: boolean) => void;
}

const CategoryCreate = ({ setIsOpen }: CategoryCreateProps) => {
  const router = useRouter();
  const { FormData } = useStateProvider();

  const HandleSubmit = async (e: any) => {
    e.preventDefault();

    if (FormData?.title === undefined || FormData?.level1 === "") {
      notification.error({
        message: "Vui lòng bổ sung đầy đủ thông tin",
      });
    } else {
      await insertOne("PostCategory", FormData).then(() => {
        setIsOpen(false);
        router.refresh();
      });

      router.refresh();
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
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="p-2 flex flex-col gap-2"
      >
        <div className="border border-black rounded-lg  pb-2">
          <div className="p-2">
            <InputForm
              Label="Mục cần thêm"
              Type="Radio"
              field="title"
              Option={PostsTypeItems}
            />
          </div>
        </div>

        <>
          {" "}
          <InputForm
            Label="Tiêu đề cho mục bài viết"
            Type="Input"
            field="level1"
            Option={OptionItems}
          />
        </>

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

export default CategoryCreate;
