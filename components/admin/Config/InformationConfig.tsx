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
    await UpdateDataProps("Config", "information", FormData).then(() => {
      if (type === "404") setIsOpen404Modal(false);
      if (type === "LogoSnippet") setIsHandleLogo(false);
      router.refresh();
    });

    router.refresh();
  };

  return (
    <div className="pb-5 ">
      <div className="w-full grid grid-cols-2 px-10 font-light">
        <div className="">
          <h1 className="text-[30px] font-semibold"> Cấu Hình Website </h1>
          <p className=" text-gray-500">
            Đây là những gì khách hàng đang nhìn thấy từ website của bạn
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 ">
          <div className="border shadow-sm bg-white rounded-md border-gray-200 ">
            <div className="p-4 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-[18px]">
                  <p>Chia sẻ website </p>
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

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className=" ">
                  <div className="py-2 pr-3 flex items-start gap-2 col-span-2 w-full justify-start">
                    Zalo:
                  </div>
                  <div className="col-span-5 pl-2 py-2 flex gap-2 border rounded-lg  mt-2 bg-blue-100">
                    <div className="p-2 w-full">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/ads-company-285a6.appspot.com/o/avatar%2F368441144_643292161353452_5814920262973361704_n.jpg?alt=media&token=fbbe7ecd-4ff0-494c-a050-89a4d8c21f74"
                        alt="og"
                        width={200}
                        className="w-full rounded-2xl"
                        height={200}
                      />
                      <div className="mt-2">
                        <div className="font-normal text-[17px]">
                          Hỏi dân it
                        </div>
                        <div className="text-gray-500">Description</div>
                        <div className="text-blue-500 text-[14px] font-normal">
                          www.www
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" ">
                  <div className="py-2 pr-3 flex items-start gap-2 col-span-2 w-full justify-start mt-2 ">
                    Facebook:
                  </div>
                  <div className="col-span-5  flex gap-2   bg-blue-100">
                    <div className=" w-full">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/ads-company-285a6.appspot.com/o/avatar%2F368441144_643292161353452_5814920262973361704_n.jpg?alt=media&token=fbbe7ecd-4ff0-494c-a050-89a4d8c21f74"
                        alt="og"
                        width={200}
                        className="w-full "
                        height={200}
                      />
                      <div className=" p-2">
                        <div className="font-normal text-[17px]">
                          Hỏi dân it
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
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
                    Chuyển hướng: Trang{" "}
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

            <InputForm Label="Tải lên" Type="Upload" field="ImageNotFound" />

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
