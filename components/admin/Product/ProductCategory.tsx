"use client";
import { ProductTypeItems } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import ReportCard from "@components/items/server-items/ReportCard";
import { Modal } from "antd";
import React, { useState } from "react";
import CRUDButton from "@components/items/server-items/CRUDButton";
import List from "./ProductCategory/List";

interface ProductCategoryProps {
  Type: any;
  Topic: any;
}

const ProductCategory = ({ Type, Topic }: ProductCategoryProps) => {
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [isUpdateType, setIsUpdateType] = useState(false);

  return (
    <div className="w-full grid grid-cols-3 px-10 font-light gap-10">
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
        <List Data={Type} />
      </div>
      <div className="border rounded-xl border-black">
        <div className="grid grid-cols-2 gap-5 p-2 rounded-xl bg-slate-100">
          <ReportCard Label="Mục sản phẩm" Value={255} />
          <ReportCard Label="Mục cấp 1" Value={1} />
          <ReportCard Label="Mục cấp 2" Value={0} />
        </div>
      </div>
      <>
        <Modal
          footer={null}
          title="Thêm danh mục sản phẩm"
          open={isOpenAddTypeModal}
          width={1000}
          onCancel={() => setIsOpenAddTypeModal(false)}
        ></Modal>
      </>
    </div>
  );
};

export default ProductCategory;
