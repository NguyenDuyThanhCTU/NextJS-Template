"use client";
import { useStateProvider } from "@context/StateProvider";
import { Modal } from "antd";
import React from "react";

const FormNotification = () => {
  const { FormNotification, setFormNotification, setFormData } =
    useStateProvider();
  const HandleContinue = () => {
    setFormNotification(false);
    setFormData({});
  };
  return (
    <>
      <Modal open={FormNotification} footer={null} title="Rời khỏi trang?">
        <div>
          <p>
            Bạn có chắc chắn muốn rời khỏi? Mọi thay đổi chưa được lưu sẽ bị
            mất.
          </p>
          <div className="flex w-full justify-center gap-5 mt-5 cursor-pointer ">
            <div
              className="px-6 py-1 text-blue-600 hover:bg-slate-200 duration-300 rounded-md"
              onClick={() => setFormNotification(false)}
            >
              Ở lại
            </div>
            <div
              className="bg-blue-600 hover:bg-blue-700  text-white px-6 py-1 duration-300 rounded-md"
              onClick={() => HandleContinue()}
            >
              Rời khỏi
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FormNotification;
