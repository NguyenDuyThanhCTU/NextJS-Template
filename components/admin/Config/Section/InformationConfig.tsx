"use client";
import { HeaderItems } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import ImageUploader from "@components/items/server-items/ImageUploader";
import InputForm from "@components/items/server-items/InputForm";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { updateOne } from "@lib/api";
import { Modal, Tooltip } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const InformationConfig = ({ Data }: any) => {
  const [isOpen404Modal, setIsOpen404Modal] = React.useState(false);
  const [isHandleLogo, setIsHandleLogo] = React.useState(false);
  const { FormData, setFormData } = useStateProvider();
  const router = useRouter();

  const LogoPosition = [
    {
      label: "Góc trên bên trái",
      value: "absolute top-0 left-0 mt-5 ml-5",
    },
    {
      label: "Góc trên bên phải",
      value: "absolute top-0 right-0 mt-5 mr-5",
    },
    {
      label: "Góc dưới bên trái",
      value: "absolute bottom-0 left-0 mb-5 ml-5",
    },
    {
      label: "Góc dưới bên phải",
      value: "absolute bottom-0 right-0 mb-5 mr-5",
    },

    {
      label: "Giữa",
      value:
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    },
  ];
  const HandleSubmit = async (e: any, type: string) => {
    e.preventDefault();
    await updateOne("Config", "information", FormData).then(() => {
      if (type === "404") setIsOpen404Modal(false);
      if (type === "LogoSnippet") setIsHandleLogo(false);
      router.refresh();
    });

    router.refresh();
  };

  return (
    <div className="pb-5 ">
      <div className="w-full grid p:grid-cols-1 d:grid-cols-2 p:px-0 d:px-10 font-light gap-5">
        <div className="">
          <h1 className="text-[30px] font-semibold"> Cấu Hình Website </h1>
          <p className=" text-gray-500">
            Đây là những gì khách hàng đang nhìn thấy từ website của bạn
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 ">
          <div className="grid p:grid-cols-1 d:grid-cols-2 gap-3">
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

                  <div className="relative mt-2  h-[150px] w-[150px]">
                    <Image
                      src={Data?.ImageNotFound}
                      alt="404 Not Found"
                      fill
                      className="object-contain "
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    {" "}
                    Chuyển hướng:{" "}
                    {
                      HeaderItems.find(
                        (item: any) => item.value === Data?.NotFoundNavigate
                      )?.label
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow-sm bg-white rounded-md border-gray-200 ">
              <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 font-bold text-[18px]">
                    <p>Đóng logo vào ảnh</p>
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
                    <EditButton onClick={setIsHandleLogo} />
                  </div>
                </div>
                <div>
                  <h3>Logo:</h3>
                  <div className="relative mt-2  h-[150px] w-[150px]">
                    <Image
                      src={Data?.LogoSnippet}
                      alt="404 Not Found"
                      fill
                      className="object-contain "
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    Vị trí:{"   "}
                    {
                      LogoPosition.find(
                        (item: any) => item.value === Data?.LogoPosition
                      )?.label
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        <Modal
          title="404 Not Found Editing"
          footer={null}
          open={isOpen404Modal}
          onCancel={() => setIsOpen404Modal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <form
            onSubmit={(e) => HandleSubmit(e, "404")}
            className="p-2 flex flex-col gap-2"
          >
            <div className="">
              <InputForm
                Label="Chuyển hướng"
                Type="Radio"
                Option={HeaderItems}
                field={"NotFoundNavigate"}
              />
            </div>

            <InputForm
              Label="Ảnh hiển thị"
              Type="Upload"
              field="ImageNotFound"
            />

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

      <>
        <Modal
          title="Đóng logo vào ảnh"
          footer={null}
          open={isHandleLogo}
          onCancel={() => setIsHandleLogo(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <form
            onSubmit={(e) => HandleSubmit(e, "LogoSnippet")}
            className="p-2 flex flex-col gap-2"
          >
            <div className="">
              <InputForm
                Label="Vị trí của logo"
                Type="Radio"
                Option={LogoPosition}
                field={"LogoPosition"}
              />
            </div>

            <InputForm Label="Tải lên" Type="Upload" field="LogoSnippet" />

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

export default InformationConfig;
