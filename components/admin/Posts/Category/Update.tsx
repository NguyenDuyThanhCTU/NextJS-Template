import CRUDButton from "@components/items/server-items/CRUDButton";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { deleteOne, updateOne } from "@lib/api";

import { Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CategoryUpdateProps {
  Data: any;
  setIsOpen: (isOpen: boolean) => void;
}

const Update = ({ Data, setIsOpen }: CategoryUpdateProps) => {
  const [isOpenUpdateCategoryModal, setIsOpenUpdateCategoryModal] =
    useState(false);
  const { FormData } = useStateProvider();
  const router = useRouter();
  const HandleDelete = (id: string) => {
    deleteOne("PostCategory", id).then(() => {
      setIsOpen(false);
      router.refresh();
    });
    router.refresh();
  };

  const HandleSubmit = (e: any, id: string) => {
    e.preventDefault();
    console.log(id, FormData);
    updateOne("PostCategory", id, FormData).then(() => {
      setIsOpen(false);
      setIsOpenUpdateCategoryModal(false);
      router.refresh();
    });
    router.refresh();
  };
  return (
    <div className="flex flex-col gap-4 font-LexendDeca font-light">
      <div className="">
        <h3 className="font-bold">Thông tin mục</h3>

        <div className="border rounded-xl border-black mt-3">
          <div className="text-[18px] ml-2 mt-3 grid grid-cols-2 w-full gap-2 p-2 overflow-y-auto">
            <li className="">
              Loại bài viết: <span className="underline">{Data.title}</span>
            </li>

            <div className="flex items-center gap-2">
              <p> Mục bài viết:</p>
              <div className="rounded-md px-3 py-1 bg-gray-200">
                {Data.level1}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl bg-slate-100">
        <div className="p-5 grid grid-cols-2  justify-center gap-3">
          <CRUDButton
            Label="Cập Nhật"
            value="Loại Bài Viết"
            Style="hover:bg-blue-900 bg-blue-700"
            Clicked={() => setIsOpenUpdateCategoryModal(true)}
          />

          <CRUDButton
            Label="Xóa"
            value="Loại Bài Viết"
            Style="hover:bg-red-900 bg-red-700"
            Clicked={() => HandleDelete(Data.id)}
          />
        </div>
      </div>
      <>
        <Modal
          footer={null}
          open={isOpenUpdateCategoryModal}
          width={1000}
          onCancel={() => setIsOpenUpdateCategoryModal(false)}
        >
          <form
            onSubmit={(e) => HandleSubmit(e, Data.id)}
            className="p-2 flex flex-col gap-2"
          >
            <>
              {" "}
              <InputForm
                Label="Tiêu đề cho mục bài viết"
                Type="Input"
                field="level1"
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
        </Modal>
      </>
    </div>
  );
};

export default Update;
