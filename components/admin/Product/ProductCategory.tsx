"use client";

import { Modal } from "antd";
import React, { useState } from "react";
import CRUDButton from "@components/items/server-items/CRUDButton";
import Create from "./ProductCategory/Create";
import { convertDate } from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";
import { deleteOne } from "@lib/api";
import { useRouter } from "next/navigation";

interface ProductCategoryProps {
  Data: any;
}

interface ListProps {
  id: any;
  level0: string;
  level1: string;
  level2: any;
  createdAt: Date;
}
const ProductCategory = ({ Data }: ProductCategoryProps) => {
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [isOpenHandleModel, setIsOpenHandleModel] = useState(false);
  const [isOpenUpdateModel, setIsOpenUpdateModel] = useState(false);
  const [SelectedProductData, setSelectedProductData] = useState<ListProps>();
  const { setFormData } = useStateProvider();
  const router = useRouter();

  const HandleSelectProduct = (id: string) => {
    const sort = Data?.filter((item: any) => item.id === id);
    setSelectedProductData(sort[0]);
    setIsOpenHandleModel(true);
  };
  const HandleDelete = async (id: string) => {
    deleteOne("ProductCategory", id).then(() => {
      setIsOpenHandleModel(false);
      router.refresh();
    });
  };

  return (
    <div className="w-full grid p:grid-cols-1 d:grid-cols-3 p:px-0 d:px-10 font-light gap-10 min-h-screen  ">
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
              {["STT", "Loại sản phẩm", "Mục sản phẩm", "Thời gian"].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className={`${
                      item === "Loại sản phẩm" || item === "Mục sản phẩm"
                        ? "col-span-2 justify-start"
                        : "justify-center col-span-1"
                    }
          flex  w-full
          `}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
            <div>
              {Data?.map((item: ListProps, idx: number) => {
                const value = convertDate(item.createdAt);
                return (
                  <div
                    className="grid grid-cols-8 text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                    key={idx}
                    onClick={() => HandleSelectProduct(item.id)}
                  >
                    <div className="">{idx + 1}</div>
                    <div className="text-[#7c1616] col-span-2  text-start font-bold text-[20px]">
                      {item.level0}
                    </div>

                    <div className="font-normal col-span-2  text-start text-blue-500">
                      {item.level1}
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
          title={`Cập nhật ${SelectedProductData?.level1} ?`}
          open={isOpenHandleModel}
          width={700}
          onCancel={() => setIsOpenHandleModel(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <>
            <div className="border rounded-xl bg-slate-100">
              <div className="p-5 grid grid-cols-2  justify-center gap-3">
                <CRUDButton
                  Clicked={() => {
                    setIsOpenUpdateModel(true);
                    setIsOpenHandleModel(false);
                  }}
                  Label="Chỉnh Sửa"
                  value="mục sản phẩm"
                  Style="hover:bg-blue-900 bg-blue-700"
                />
                <CRUDButton
                  Clicked={() => HandleDelete(SelectedProductData?.id)}
                  Label="Xóa"
                  value="mục sản phẩm"
                  Style="hover:bg-red-900 bg-red-700"
                />
              </div>
            </div>
          </>
        </Modal>
      </>
      <>
        <Modal
          footer={null}
          title="Thêm danh mục sản phẩm"
          open={isOpenAddTypeModal}
          width={1000}
          onCancel={() => setIsOpenAddTypeModal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <Create setIsOpen={setIsOpenAddTypeModal} />
        </Modal>
      </>
      <>
        <Modal
          title="Chỉnh sửa"
          footer={null}
          open={isOpenUpdateModel}
          width={700}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
          onCancel={() => setIsOpenUpdateModel(false)}
        >
          <Create
            setIsOpen={setIsOpenUpdateModel}
            Type="update"
            Data={SelectedProductData}
          />
        </Modal>
      </>
    </div>
  );
};

export default ProductCategory;
