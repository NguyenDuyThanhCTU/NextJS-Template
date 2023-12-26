"use client";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

const EditButton = ({ onClick }: any) => {
  const { setFormNotification, FormData } = useStateProvider();
  console.log(FormData);
  const HandleClick = () => {
    if (Object.keys(FormData).length === 0) {
      onClick(true);
    } else {
      setFormNotification(true);
      onClick(true);
    }
  };
  return (
    <div className="text-white bg-blue-400 hover:bg-blue-600 duration-300 w-max cursor-pointer font-light  rounded-md">
      <div className="px-3 py-1" onClick={() => HandleClick()}>
        Edit Snippet
      </div>
    </div>
  );
};

export default EditButton;
