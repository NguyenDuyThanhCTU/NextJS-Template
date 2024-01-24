"use client";
import InputForm from "@components/items/server-items/InputForm";
import { Drawer, Modal, Pagination } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus, FaSort } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdDeleteForever, MdNumbers } from "react-icons/md";
import { PiCardsLight } from "react-icons/pi";

import { useStateProvider } from "@context/StateProvider";
import Search from "@components/items/server-items/Search";
import Create from "./Partner/Create";
import Update from "./Partner/Update";

interface ProductProps {
  stt: number;
  pid: string;
  title: string;
  phoneNumber: string;
  address: string;
  location: string;
}
interface ButtonProps {
  Label: string;
  Style: string;
  Clicked: any;
}

export const Button = ({ Label, Style, Clicked }: ButtonProps) => {
  return (
    <div
      className={`${Style} py-2 px-3  cursor-pointer duration-300  text-white rounded-full flex items-center gap-1`}
      onClick={Clicked}
    >
      <div className="text-[20px]">
        {Label === "Cập Nhật Thứ Tự" ? (
          <>
            {" "}
            <MdNumbers />
          </>
        ) : Label === "Thêm Chi Nhánh" ? (
          <>
            <FaPlus />
          </>
        ) : Label === "Chỉnh Chi Nhánh" ? (
          <>
            {" "}
            <CiEdit />
          </>
        ) : (
          <MdDeleteForever />
        )}
      </div>
      <p> {Label}</p>
    </div>
  );
};

const Branch = () => {
  const [isOpenPartnerModel, setIsOpenPartnerModel] = useState<boolean>(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [SelectedProductData, setSelectedProductData] = useState<ProductProps>({
    stt: 0,
    pid: "",
    title: "",
    phoneNumber: "",
    address: "",
    location: "",
  });

  const { setFormData } = useStateProvider();

  const sortItem = [
    {
      label: "Mới nhất",
      value: "newest",
    },
    {
      label: "Cũ nhất",
      value: "oldest",
    },

    {
      label: "Tên: A-Z",
      value: "nameaz",
    },
    {
      label: "Tên: Z-A",
      value: "nameza",
    },
  ];
  const Data = [
    {
      stt: 1,
      pid: "1",
      title: "Chi nhánh 1",
      phoneNumber: "0123456789",
      address: "Địa chỉ 1",
      location: "Vị trí 1",
    },
    {
      stt: 2,
      pid: "2",
      title: "Chi nhánh 2",
      phoneNumber: "0123456789",
      address: "Địa chỉ 2",
      location: "Vị trí 2",
    },
    {
      stt: 3,
      pid: "3",
      title: "Chi nhánh 3",
      phoneNumber: "0123456789",
      address: "Địa chỉ 3",
      location: "Vị trí 3",
    },
    {
      stt: 4,
      pid: "4",
      title: "Chi nhánh 4",
      phoneNumber: "0123456789",
      address: "Địa chỉ 4",
      location: "Vị trí 4",
    },
    {
      stt: 5,
      pid: "5",
      title: "Chi nhánh 5",
      phoneNumber: "0123456789",
      address: "Địa chỉ 5",
      location: "Vị trí 5",
    },
    {
      stt: 6,
      pid: "6",
      title: "Chi nhánh 6",
      phoneNumber: "0123456789",
      address: "Địa chỉ 6",
      location: "Vị trí 6",
    },
    {
      stt: 7,
      pid: "7",
      title: "Chi nhánh 7",
      phoneNumber: "0123456789",
      address: "Địa chỉ 7",
      location: "Vị trí 7",
    },
    {
      stt: 8,
      pid: "8",
      title: "Chi nhánh 8",
      phoneNumber: "0123456789",
      address: "Địa chỉ 8",
      location: "Vị trí 8",
    },
  ];

  const HandleSelectProduct = (id: string) => {
    const sort = Data?.filter((item) => item.pid === id);
    setSelectedProductData(sort[0]);
    setIsOpenPartnerModel(true);
  };

  const filter = (criteria: string) => {
    let sortedData = [...Data];

    switch (criteria) {
      case "newest":
        sortedData = Data;
        break;
      case "oldest":
        sortedData.reverse();
        break;
      case "nameaz":
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "nameza":
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        console.log("Default");

      // sortedData.sort((a, b) => new Date(b.time) - new Date(a.time));
    }

    setDataFilter(sortedData);
  };

  return (
    <div className="border rounded-lg bg-white">
      <div className="p-4 font-normal text-gray-700">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <div>
              <h3 className="text-[30px] font-bold">Chi nhánh</h3>
              <p className="font-light">Danh sách chi nhánh</p>
            </div>
            <div>
              <Button
                Style="hover:bg-emerald-900 bg-emerald-700"
                Label="Thêm Chi Nhánh"
                Clicked={() => setIsOpenAdd(true)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[14px] ">
            <Search Data={Data} Select={HandleSelectProduct} />
            <div className="flex items-center gap-1">
              <PiCardsLight />
              <p>{Data.length} chi nhánh</p>
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <FaSort />
              <select
                className="outline-none pr-10 border-b py-1  bg-gray-100  border-blue-500   "
                onChange={(e: any) => filter(e.target.value)}
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
        <div className="mt-5 text-black">
          <div className="grid grid-cols-8 border-b-2 border-black py-3">
            {["STT", "Tên Chi Nhánh", "SĐT chính", "Địa chỉ", "Vị trí "].map(
              (item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item === "Địa chỉ"
                      ? "col-span-3 justify-start"
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
            {(DataFilter.length > 0 ? DataFilter : Data).map(
              (item: ProductProps, idx: number) => (
                <div
                  className="grid grid-cols-8 border-b py-3 cursor-pointer hover:bg-slate-100"
                  key={idx}
                  onClick={() => HandleSelectProduct(item.pid)}
                >
                  <div className="flex justify-center items-center">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-[#16757c]">{item.title}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span>Mã SP:</span>
                      <div className="rounded-md px-3 py-1 bg-gray-200">
                        #{item.pid}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {item.phoneNumber}
                  </div>
                  <div className="flex justify-start items-center  text-red-500 col-span-3">
                    {item.address}
                  </div>

                  <div className="flex justify-center items-center">
                    <iframe
                      src={item.location}
                      width="100"
                      height="100"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="map"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-3 w-full flex justify-end border-t py-3 border-black">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>

      <>
        <Modal
          footer={null}
          title={`Bạn muốn thay đổi sản phẩm ${SelectedProductData?.title} ?`}
          open={isOpenPartnerModel}
          width={700}
          onCancel={() => setIsOpenPartnerModel(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <div className="border rounded-xl bg-slate-100">
            <div className="p-5 grid grid-cols-2  justify-center gap-3">
              <Button
                Style="hover:bg-green-900 bg-green-700"
                Label="Chỉnh Sửa Đối Tác"
                Clicked={() => setIsOpenUpdate(true)}
              />
              <Button
                Style="hover:bg-red-900 bg-red-700"
                Label="Xóa"
                Clicked={() => console.log("delete")}
              />
            </div>
          </div>
        </Modal>
      </>

      <>
        {/* chỉnh sửa đối tác */}
        <Modal
          title="Chỉnh Sửa Đối Tác"
          footer={null}
          open={isOpenUpdate}
          width={700}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
          onCancel={() => setIsOpenUpdate(false)}
        >
          <Update Data={SelectedProductData} />
        </Modal>
        {/* thêm đối tác */}
        <Modal
          title="Thêm Đối Tác"
          footer={null}
          open={isOpenAdd}
          width={700}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
          onCancel={() => setIsOpenAdd(false)}
        >
          <Create setIsOpenContactModal={setIsOpenAdd} />
        </Modal>
      </>
    </div>
  );
};

export default Branch;
