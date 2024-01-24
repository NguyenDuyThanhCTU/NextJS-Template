"use client";
import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PiCardsLight } from "react-icons/pi";

import { useStateProvider } from "@context/StateProvider";
import Create from "./Partner/Create";
import CRUDButton from "@components/items/server-items/CRUDButton";
import { convertDate } from "@components/items/server-items/Handle";
// import Update from "./Partner/Update";
import { useRouter } from "next/navigation";
import { deleteOne } from "@lib/api";
import Update from "./Partner/Update";

interface PartnerProps {
  id: string;
  image: string;
  title: string;
  url: string;
  createdAt: any;
}

const Plugins = ({ Data }: any) => {
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const [SelectedProductData, setSelectedProductData] = useState<any>();
  const [isOpenUpdateModel, setIsOpenUpdateModel] = useState<boolean>(false);
  const [isOpenHandleModel, setIsOpenHandleModel] = useState<boolean>(false);
  const { setFormData, FormData } = useStateProvider();
  const router = useRouter();

  const HandleSelectProduct = (id: string) => {
    const sort = Data?.filter((item: any) => item.id === id);
    setSelectedProductData(sort[0]);
    setIsOpenHandleModel(true);
  };

  const HandleDelete = async (id: string) => {
    deleteOne("Partner", id).then(() => {
      setIsOpenHandleModel(false);
      router.refresh();
    });
  };

  useEffect(() => {
    setFormData(SelectedProductData);
  }, [isOpenHandleModel]);

  return (
    <div className="border rounded-lg bg-white">
      <div className="p-4 font-normal text-gray-700">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <div>
              <h3 className="text-[30px] font-bold">Đối tác</h3>
              <p className="font-light">Danh sách đối tác</p>
            </div>
            <div>
              <CRUDButton
                Clicked={setIsOpenAdd}
                Label="Thêm"
                value="Đối tác"
                Style="hover:bg-emerald-900 bg-emerald-700"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[14px] ">
            <div className="flex items-center gap-1">
              <PiCardsLight />
              <p>{Data?.length} đối tác</p>
            </div>
          </div>
        </div>
        <div className="mt-5 text-black">
          <div className="grid grid-cols-8 border-b-2 border-black py-3">
            {["STT", "Tên Đối tác", "Logo", "Liên Kết", "Thời gian"].map(
              (item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item === "Tên Đối tác" || item === "Liên Kết"
                      ? "col-span-2 justify-start"
                      : "justify-center col-span-1"
                  }
                flex  w-full
                `}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div>
            {Data?.map((item: PartnerProps, idx: number) => {
              const value = convertDate(item.createdAt);

              return (
                <div
                  className="grid grid-cols-8 border-b py-3 cursor-pointer hover:bg-slate-100"
                  key={idx}
                  onClick={() => HandleSelectProduct(item.id)}
                >
                  <div className="flex justify-center items-center">
                    {idx + 1}
                  </div>
                  <div className="col-span-2">{item.title}</div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="product webp"
                    />
                  </div>
                  <div className="text-start text-red-500 col-span-2">
                    {item.url}
                  </div>

                  <div className="flex justify-center items-center">
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <>
        <Modal
          footer={null}
          title={`Cập nhật ${SelectedProductData?.title} ?`}
          open={isOpenHandleModel}
          width={700}
          onCancel={() => setIsOpenHandleModel(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          {/* <Update
            Data={SelectedProductData}
            OpenUpdate={setIsOpenUpdateModel}
          /> */}
          <>
            <div className="border rounded-xl bg-slate-100">
              <div className="p-5 grid grid-cols-2  justify-center gap-3">
                <CRUDButton
                  Clicked={() => setIsOpenUpdateModel(true)}
                  Label="Chỉnh Sửa"
                  value="Đối tác"
                  Style="hover:bg-green-900 bg-green-700"
                />
                <CRUDButton
                  Clicked={() => HandleDelete(SelectedProductData?.id)}
                  Label="Xóa"
                  value="Đối tác"
                  Style="hover:bg-green-900 bg-green-700"
                />
              </div>
            </div>
          </>
        </Modal>
      </>

      <Modal
        title="Thêm Đối Tác"
        footer={null}
        open={isOpenAdd}
        width={700}
        destroyOnClose={true}
        afterClose={() => setFormData({})}
        onCancel={() => setIsOpenAdd(false)}
      >
        <Create OpenCreate={setIsOpenAdd} />
      </Modal>

      <Modal
        title="Chỉnh sửa"
        footer={null}
        open={isOpenUpdateModel}
        width={700}
        destroyOnClose={true}
        afterClose={() => setFormData({})}
        onCancel={() => setIsOpenUpdateModel(false)}
      >
        <Update OpenUpdate={setIsOpenUpdateModel} Data={SelectedProductData} />
      </Modal>
    </div>
  );
};

export default Plugins;
