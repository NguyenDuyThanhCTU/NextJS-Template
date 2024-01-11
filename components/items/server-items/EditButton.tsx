"use client";
import React from "react";

interface Props {
  onClick: (value: boolean) => void;
}

const EditButton = ({ onClick }: Props) => {
  return (
    <div className="text-white bg-blue-400 hover:bg-blue-600 duration-300 w-max cursor-pointer font-light  rounded-md">
      <div className="px-3 py-1" onClick={() => onClick(true)}>
        Edit Snippet
      </div>
    </div>
  );
};

export default EditButton;
