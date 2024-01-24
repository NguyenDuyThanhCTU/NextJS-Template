"use client";
import EditButton from "@components/items/server-items/EditButton";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { updateOne } from "@lib/api";
import { Modal, Tooltip } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const ContactConfig = ({ Data }: any) => {
  const [isOpenContactModal, setIsOpenContactModal] = React.useState(false);
  const { setFormData, FormData } = useStateProvider();
  const ContactItems = [
    {
      label: "Địa chỉ website",
      value: Data?.WebsiteAddress,
      tooltip:
        "Số điện thoại chính của website, Số điện thoại này sẽ được ưu tiên hiển thị trên website và nút gọi điện thoại",
    },
    {
      label: "Số điện thoại",
      value: Data?.Hotline,
      tooltip: "",
    },
    {
      label: "Số điện thoại (phụ)",
      value: Data?.PhoneNumber,
      tooltip: "",
    },
    {
      label: "Email",
      value: Data?.Email,
      tooltip: "",
    },
    {
      label: "Thời gian hoạt động website",
      value: Data?.WebsiteTime,
      tooltip: "",
    },
    {
      label: "Thời gian hoạt động của công ty",
      value: Data?.CompanyTime,
      tooltip: "",
    },
    {
      label: "Địa chỉ (chi nhánh chính)",
      value: Data?.CompanyAddress,
      tooltip: "",
    },

    {
      label: "Logo website",
      value: Data?.LogoWebsite,
      tooltip: "",
    },
  ];
  const router = useRouter();
  const HandleSubmit = async (e: any) => {
    e.preventDefault();

    await updateOne("Config", "contact", FormData).then(() => {
      setIsOpenContactModal(false);
      router.refresh();
    });

    router.refresh();
  };

  const extractSrc = (embedCode: string) => {
    // Kiểm tra xem embedCode có tồn tại không
    if (!embedCode) {
      return null;
    }

    // Tìm index của 'src="' trong đoạn mã nhúng
    const srcIndex = embedCode.indexOf('src="');
    if (srcIndex === -1) {
      return null;
    }

    // Tìm index của kết thúc của URL src
    const srcStart = srcIndex + 5; // Bắt đầu sau 'src="'
    const srcEnd = embedCode.indexOf('"', srcStart);

    // Trích xuất URL src từ đoạn mã nhúng
    const srcUrl = embedCode.substring(srcStart, srcEnd);
    setFormData({ ...FormData, GoogleMap: srcUrl });
  };

  return (
    <div className="py-5 border-t  bg-white">
      <div className="w-full grid p:grid-cols-1 d:grid-cols-2 p:px-0 d:px-10 font-light gap-5">
        <div className="">
          <h1 className="text-[30px] font-semibold">
            Các Thông Tin Liên Hệ Website{" "}
          </h1>
          <p className=" text-gray-500">
            Đây là những gì khách hàng đang nhìn thấy từ website của bạn
          </p>
          <div className=" mt-3 border border-black shadow-sm bg-white rounded-md  ">
            <div className="p-4 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-[18px]">
                  <p>Thông tin website </p>
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
                  <EditButton onClick={setIsOpenContactModal} />
                </div>
              </div>

              <div className="mt-4">
                {ContactItems.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className={`${
                      idx === ContactItems.length - 1 ? "border-y" : "border-t "
                    } grid grid-cols-6  border-x `}
                  >
                    <div className="py-2 pr-3 border-r flex items-center gap-2 col-span-2 w-full justify-end">
                      {" "}
                      <p> {item.label}</p>{" "}
                      {item.tooltip && (
                        <Tooltip title={item.tooltip}>
                          {" "}
                          <div className="">
                            <FaRegCircleQuestion />
                          </div>
                        </Tooltip>
                      )}
                      :{" "}
                    </div>
                    {item.label === "Vị trí (Google map)" ? (
                      <></>
                    ) : item.label === "Logo website" ? (
                      <div className="py-2 flex items-center  ml-2">
                        <Image
                          src={item.value}
                          alt="logo website"
                          width={100}
                          height={100}
                        ></Image>
                      </div>
                    ) : (
                      <div className="col-span-4 pl-2 py-2 text-gray-00">
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 ">
          <iframe
            src={Data?.GoogleMap}
            loading="lazy"
            className="w-full h-full outline-none"
          ></iframe>
        </div>
      </div>
      <>
        <Modal
          title="Cập nhật thông tin website"
          footer={null}
          open={isOpenContactModal}
          width={1000}
          onCancel={() => setIsOpenContactModal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <form
            onSubmit={(e) => HandleSubmit(e)}
            className="p-2 flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <div className="grid p:grid-cols-1 d:grid-cols-2 gap-2">
                <div className="border border-black rounded-lg">
                  <div className="p-2 flex flex-col gap-2">
                    <InputForm
                      Label="Địa chỉ website"
                      Type="Input"
                      field={"WebsiteAddress"}
                    />
                    <InputForm
                      Label="Số điện thoại"
                      Type="Input"
                      field={"Hotline"}
                    />

                    <InputForm
                      Label="Số điện thoại (phụ)"
                      Type="Input"
                      field={"PhoneNumber"}
                    />
                  </div>
                </div>
                <div className="border border-black rounded-lg">
                  <div className="p-2 flex flex-col gap-2">
                    <InputForm Label="Email" Type="Input" field={"Email"} />
                    <InputForm
                      Label="Thời gian hoạt động website"
                      Type="Input"
                      field={"WebsiteTime"}
                    />
                    <InputForm
                      Label="Thời gian hoạt động của công ty"
                      Type="Input"
                      field={"CompanyTime"}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-black rounded-lg">
                <div className="p-2 flex flex-col gap-2">
                  <InputForm
                    Label="Địa chỉ (chi nhánh chính)"
                    Type="Input"
                    field={"CompanyAddress"}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <InputForm
                      Label="Logo website"
                      Type="Upload"
                      field={"LogoWebsite"}
                    />
                    <div>
                      <InputForm
                        Label="Vị trí (Google map)"
                        Type="Input"
                        field={"GoogleMap"}
                      />
                      {FormData?.GoogleMap && (
                        <div className="flex mt-2 gap-2">
                          <div>
                            <div
                              className="py-2 px-5 rounded-lg cursor-pointer bg-lime-400 w-max hover:bg-lime-600 duration-300"
                              onClick={() => extractSrc(FormData?.GoogleMap)}
                            >
                              Kiểm tra
                            </div>
                          </div>
                          <iframe
                            src={FormData?.GoogleMap}
                            loading="lazy"
                            className="w-full h-full outline-none"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

export default ContactConfig;
