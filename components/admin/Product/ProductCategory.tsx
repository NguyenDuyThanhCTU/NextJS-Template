"use client";

import { Modal } from "antd";
import React, { useState } from "react";
import CRUDButton from "@components/items/server-items/CRUDButton";
import Create from "./ProductCategory/Create";
import { convertDate } from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";

interface ProductCategoryProps {
  Data: any;
}

interface ListProps {
  level0: string;
  level1: string;
  level2: any;
  createdAt: Date;
}
const ProductCategory = ({ Data }: ProductCategoryProps) => {
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [isUpdateType, setIsUpdateType] = useState(false);
  const { setFormData } = useStateProvider();
  return (
    <div className="w-full grid grid-cols-3 px-10 font-light gap-10 min-h-screen  ">
      <div className=" col-span-2">
        <h1 className="text-[30px] font-semibold"> Danh mục sản phẩm </h1>
        <p className=" text-gray-500">
          Tại đây, bạn có thể phân mục, thêm, chỉnh sửa hoặc các đối tượng trong
          danh mục sản phẩm của mình
        </p>
        <div className="flex mt-5">
          <CRUDButton
            Clicked={setIsOpenAddTypeModal}
            Label="Thêm"
            value="mục sản phẩm"
            Style="hover:bg-emerald-900 bg-emerald-700"
          />
        </div>
        <div className="font-LexendDeca font-light">
          {" "}
          <div className="mt-5 text-black">
            <div className="grid grid-cols-8 border-b-2 border-black py-3">
              {[
                "STT",
                "Loại sản phẩm",
                "Mục sản phẩm",
                "Mục con",
                "Thời gian",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item === "Mục con"
                      ? "col-span-3 justify-start"
                      : "justify-center col-span-1"
                  }
          flex  w-full
          `}
                >
                  {item}
                </div>
              ))}
            </div>
            <div>
              {Data?.map((item: ListProps, idx: number) => {
                const value = convertDate(item.createdAt);
                return (
                  <div
                    className="grid grid-cols-8 text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                    key={idx}
                    // onClick={() => HandleSelectProduct(item.pid)}
                  >
                    <div className="">{idx + 1}</div>
                    <div className="text-[#7c1616] font-bold text-[20px]">
                      {item.level0}
                    </div>

                    <div className="font-normal text-blue-500">
                      {item.level1}
                    </div>
                    <div className="col-span-3 text-start">
                      {item?.level2?.length > 0 && (
                        <div className="flex flex-grow gap-2">
                          {item?.level2?.map((item: any, idx: number) => (
                            <div
                              key={idx}
                              className="py-1 px-3 bg-slate-300 rounded-full"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-max">{value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl border-black"></div>
      <>
        <Modal
          footer={null}
          title="Thêm danh mục sản phẩm"
          open={isOpenAddTypeModal}
          width={1000}
          onCancel={() => setIsOpenAddTypeModal(false)}
          afterClose={() => setFormData({})}
        >
          <Create setIsOpen={setIsOpenAddTypeModal} />
        </Modal>
      </>
    </div>
  );
};

export default ProductCategory;
