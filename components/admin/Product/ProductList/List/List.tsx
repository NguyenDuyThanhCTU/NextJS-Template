"use client";
import InputForm from "@components/items/server-items/InputForm";
import { Drawer, Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus, FaSort } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdDeleteForever, MdNumbers } from "react-icons/md";
import { PiCardsLight } from "react-icons/pi";
import UpdateIndex from "./Update/UpdateIndex";
import { useStateProvider } from "@context/StateProvider";
import { IoMdStar } from "react-icons/io";
import CRUDButton from "@components/items/server-items/CRUDButton";
import { useData } from "@context/DataProviders";
import ProductHandle from "../ProductHandle";
import { convertDate } from "@components/items/server-items/Handle";
import { deleteOne } from "@lib/api";
import { useRouter } from "next/navigation";

interface ProductProps {
  id: any;
  title: string;
  image: string;
  price: string;
  view: number;
  level0: string;
  level1: string;
  createdAt: any;
  description: string;
  details: string;
}

const ListProduct = ({ Category }: any) => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenHandleModel, setIsOpenHandleModel] = useState(false);
  const [isOpenUpdateModel, setIsOpenUpdateModel] = useState(false);
  const [SelectedProductData, setSelectedProductData] =
    useState<ProductProps>();

  const { setFormData } = useStateProvider();
  const { Products } = useData();
  const sortItem = [
    {
      label: "Mới nhất",
      value: "newest",
    },
    {
      label: "Giá: Giảm dần",
      value: "lowest",
    },
    {
      label: "Giá: Tăng dần",
      value: "highest",
    },
    {
      label: "Tên: A-Z",
      value: "nameaz",
    },
    {
      label: "Tên: Z-A",
      value: "nameza",
    },
    {
      label: "Cũ nhất",
      value: "oldest",
    },
    {
      label: "Bán chạy nhất",
      value: "bestseller",
    },
  ];
  const router = useRouter();

  const HandleSelectProduct = (id: string) => {
    const sort = Products?.filter((item: any) => item.id === id);

    setSelectedProductData(sort[0]);
    setIsOpenHandleModel(true);
  };
  const HandleDelete = async (id: string) => {
    deleteOne("Products", id).then(() => {
      setIsOpenHandleModel(false);
      router.refresh();
    });
  };
  return (
    <div className="border rounded-lg bg-white">
      <div className="p-4 font-normal text-gray-700">
        <div className="flex justify-between d:flex-row p:flex-col gap-5">
          <div className="flex items-center gap-5 d:flex-row p:flex-col">
            <div>
              <h3 className="text-[30px] font-bold">Danh sách sản phẩm</h3>
              <p className="font-light">Tóm tắc ngắn gọn tất cả sản phẩm</p>
            </div>
            <div>
              <CRUDButton
                Clicked={setIsOpenAddModal}
                Label="Thêm"
                value="sản phẩm"
                Style="hover:bg-emerald-900 bg-emerald-700"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[14px] d:flex-row p:flex-col">
            <div className="border rounded-lg ">
              <div className="py-2 px-4 flex items-center gap-2">
                <div className="cursor-pointer">
                  <IoSearchSharp />
                </div>
                <input
                  type="text"
                  className="outline-none"
                  placeholder="Tìm kiếm sản phẩm"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <PiCardsLight />
                <p>{Products?.length} sản phẩm</p>
              </div>
              <div className="flex items-center gap-1 text-blue-500">
                <FaSort />
                <select
                  className="outline-none pr-10 border-b py-1  bg-gray-100  border-blue-500   "
                  // onChange={(e: any) => filter(e.target.value)}
                >
                  {sortItem.map((item, idx) => (
                    <option
                      key={idx}
                      className=" font-extralight "
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-black d:block p:hidden ">
          <div className="grid grid-cols-8 border-b-2 border-black py-3 ">
            {[
              "STT",
              "Sản phẩm",
              "Hình Ảnh",
              "Lượt Xem",
              "Đơn Giá",
              "Thời gian",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${
                  item === "Sản phẩm"
                    ? "col-span-3 justify-start"
                    : "justify-center col-span-1"
                }
                flex  w-full
                `}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            {Products?.map((item: any, idx: any) => {
              const Date = convertDate(item.createdAt);
              return (
                <div
                  className="grid grid-cols-8 border-b py-3 cursor-pointer hover:bg-slate-100"
                  key={idx}
                  onClick={() => HandleSelectProduct(item.id)}
                >
                  <div className="flex justify-center items-center">{idx}</div>
                  <div className="col-span-3">
                    <div className="text-[#16757c]">{item.title}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span>Mã SP:</span>
                      <div className="rounded-md px-3 py-1 bg-gray-200">
                        #{item.id}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="product webp"
                    />
                  </div>
                  <div className="flex justify-center items-center text-red-500">
                    {item.view}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.price}
                  </div>

                  <div className="flex justify-center items-center">{Date}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5 text-black p:block d:hidden">
          <div className="grid grid-cols-4 border-b-2 border-black py-3 ">
            {["Sản phẩm", "Hình Ảnh", "Thời gian"].map((item, idx) => (
              <div
                key={idx}
                className={`${
                  item === "Sản phẩm"
                    ? "col-span-2 justify-start"
                    : "justify-center col-span-1"
                }
                flex  w-full
                `}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            {Products?.map((item: any, idx: any) => {
              const Date = convertDate(item.createdAt);
              return (
                <div
                  className="grid grid-cols-4 border-b py-3 cursor-pointer hover:bg-slate-100 text-[14px] gap-3"
                  key={idx}
                  onClick={() => HandleSelectProduct(item.id)}
                >
                  <div className="col-span-2">
                    <div className="text-[#16757c]">{item.title}</div>
                    <div className="flex items-center gap-2 mt-2 ">
                      <span>Mã SP:</span>
                      <div className="rounded-md px-3 py-1 bg-gray-200">
                        #{item.id}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="product webp"
                    />
                  </div>

                  <div className="flex justify-center items-center">{Date}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <>
        <Modal
          footer={null}
          title="Thêm sản phẩm"
          open={isOpenAddModal}
          width={1000}
          onCancel={() => setIsOpenAddModal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <ProductHandle
            setIsOpen={setIsOpenAddModal}
            Category={Category}
            productLength={Products?.length}
          />
        </Modal>
      </>

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
          <>
            <div className="border rounded-xl bg-slate-100">
              <div className="p-5 grid grid-cols-2  justify-center gap-3">
                <CRUDButton
                  Clicked={() => {
                    setIsOpenUpdateModel(true);
                    setIsOpenHandleModel(false);
                  }}
                  Label="Chỉnh Sửa"
                  value="mục sản phẩm"
                  Style="hover:bg-blue-900 bg-blue-700"
                />
                <CRUDButton
                  Clicked={() => HandleDelete(SelectedProductData?.id)}
                  Label="Xóa"
                  value="mục sản phẩm"
                  Style="hover:bg-red-900 bg-red-700"
                />
              </div>
            </div>
          </>
        </Modal>
      </>
      <>
        <Modal
          title="Chỉnh sửa"
          footer={null}
          open={isOpenUpdateModel}
          width={1000}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
          onCancel={() => setIsOpenUpdateModel(false)}
        >
          <ProductHandle
            setIsOpen={setIsOpenUpdateModel}
            Category={Category}
            Type="update"
            Data={SelectedProductData}
          />
        </Modal>
      </>
    </div>
  );
};

export default ListProduct;
