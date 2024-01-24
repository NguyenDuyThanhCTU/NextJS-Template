"use client";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

const ListProductHistory = () => {
  const { FormData, setFormData } = useStateProvider();
  return (
    <div>
      <InputForm
        Label="Mô tả sản phẩm"
        Type="Editor"
        field="price"
        Tips="
          Mã của sản phẩm là các con số hoặc một đoạn mã để xác định tính duy nhất của sản phẩm. Tối đa 20 ký tự
      "
      />
    </div>
  );
};

export default ListProductHistory;
