"use client";
import { HeaderItems } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import ImageUploader from "@components/items/server-items/ImageUploader";
import InputForm from "@components/items/server-items/InputForm";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { UpdateDataProps } from "@lib/get-data";
import { Modal, Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const WebConfig = ({ Data }: any) => {
  const [isOpen404Modal, setIsOpen404Modal] = React.useState(false);
  const { FormData, setFormData } = useStateProvider();
  const Handle404Submit = async (e: any) => {
    e.preventDefault();
    await UpdateDataProps("Config", "information", FormData);
    setIsOpen404Modal(false);
  };

  return (
    <div className="">
      <div className="w-full grid grid-cols-4 px-10 font-light">
        <div className="col-span-2">
          <h1 className="text-[30px] font-semibold">Trang Cấu Hình Website </h1>
          <p className=" text-gray-500">
            Đây là những gì khách hàng đang nhìn thấy từ website của bạn
          </p>
        </div>
        <div className="border shadow-sm bg-white rounded-md border-gray-200 ">
          <div className="p-4 flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 font-bold text-[18px]">
                <p>Trang lỗi 404</p>
                <Tooltip
                  title={`Trang "404 Not Found" xuất hiện khi URL không chính xác, trang web đã bị xóa hoặc máy chủ không thể tìm thấy URL mà bạn đang cố truy cập`}
                >
                  {" "}
                  <div className="text-[20px]">
                    <FaRegCircleQuestion />
                  </div>
                </Tooltip>
              </div>
              <div>
                <EditButton onClick={setIsOpen404Modal} />
              </div>
            </div>
            <div>
              <h3>Ảnh hiển thị:</h3>
              <div className="relative mt-2  h-[150px]">
                <Image
                  src={Data?.image}
                  alt="404 Not Found"
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="mt-2">
              <div> Chuyển hướng: {Data?.default}</div>
            </div>
          </div>
        </div>
        <div>hi</div>
      </div>

      <>
        <Modal
          title="404 Not Found Editing"
          footer={null}
          open={isOpen404Modal}
          onCancel={() => setIsOpen404Modal(false)}
          afterClose={() => setFormData({})}
        >
          <form onSubmit={Handle404Submit} className="p-2 flex flex-col gap-2">
            <div className="">
              <InputForm
                Label="Chuyển hướng"
                Type="Radio"
                Option={HeaderItems}
                field={"default"}
              />
            </div>

            <InputForm Label="Tải lên" Type="Upload" field="image" />

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

export default WebConfig;
