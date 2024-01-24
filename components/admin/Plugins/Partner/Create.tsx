"use client";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { insertOne } from "@lib/api";
import { useRouter } from "next/navigation";
import React from "react";

const Create = ({ OpenCreate }: any) => {
  const { FormData } = useStateProvider();
  const router = useRouter();
  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    await insertOne("Partner", FormData).then(() => {
      OpenCreate(false);
      router.refresh();
    });
  };
  return (
    <form onSubmit={(e) => HandleSubmit(e)}>
      {" "}
      <div className="border border-black rounded-lg">
        <div className="p-2 flex flex-col gap-2">
          <InputForm Label="Tên đối tác" Type="Input" field={"title"} />

          <InputForm Label="Đường dẫn" Type="Input" field={"url"} />
          <InputForm Label="Logo" Type="Upload" field={"image"} />
        </div>
      </div>
      <div className="flex w-full justify-end mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 duration-300 text-white py-2 px-5 rounded-md"
          type="submit"
        >
          Cập nhật
        </button>
      </div>
    </form>
  );
};

export default Create;
