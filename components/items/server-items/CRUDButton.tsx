"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever, MdNumbers } from "react-icons/md";

interface ButtonProps {
  Label: string;
  Style: string;
  value: string;
  Clicked: any;
}

export const CRUDButton = ({ Label, Style, Clicked, value }: ButtonProps) => {
  return (
    <div
      className={`${Style} py-2 px-3  cursor-pointer duration-300  text-white rounded-full flex items-center gap-1`}
      onClick={Clicked}
    >
      <div className="text-[20px]">
        {Label === "Cập Nhật" ? (
          <>
            {" "}
            <MdNumbers />
          </>
        ) : Label === "Thêm" ? (
          <>
            <FaPlus />
          </>
        ) : Label === "Chỉnh Sửa" ? (
          <>
            {" "}
            <CiEdit />
          </>
        ) : (
          <MdDeleteForever />
        )}
      </div>
      <p>
        {" "}
        {Label} {value}
      </p>
    </div>
  );
};

export default CRUDButton;
