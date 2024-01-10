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
  image: string;
  url: number;
  time: string;
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
        ) : Label === "Thêm Đối Tác" ? (
          <>
            <FaPlus />
          </>
        ) : Label === "Chỉnh Sửa Đối Tác" ? (
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

const Parner = () => {
  const [isOpenPartnerModel, setIsOpenPartnerModel] = useState<boolean>(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [SelectedProductData, setSelectedProductData] = useState<ProductProps>({
    stt: 0,
    pid: "",
    title: "",
    image: "",

    url: 0,
    time: "",
  });

  const { FormData, setFormData } = useStateProvider();

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
      pid: "1215",
      title: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",

      url: 200,
      time: "10/10/2021",
    },
    {
      stt: 2,
      pid: "1216",
      title: "Áo thun nữ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",

      url: 500,
      time: "10/10/2021",
    },
    {
      stt: 3,
      pid: "1217",
      title: "Cúc áo",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",

      url: 100,
      time: "10/10/2021",
    },
    {
      stt: 4,
      pid: "1218",
      title: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",

      url: 200,
      time: "10/10/2021",
    },
    {
      stt: 5,
      pid: "1219",
      title: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",

      url: 200,
      time: "10/10/2021",
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
              <h3 className="text-[30px] font-bold">Đối tác</h3>
              <p className="font-light">Danh sách đối tác</p>
            </div>
            <div>
              <Button
                Style="hover:bg-emerald-900 bg-emerald-700"
                Label="Thêm Đối Tác"
                Clicked={() => setIsOpenAdd(true)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[14px] ">
            <Search Data={Data} Select={HandleSelectProduct} />
            <div className="flex items-center gap-1">
              <PiCardsLight />
              <p>{Data.length} đối tác</p>
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
            {["STT", "Tên Đối tác", "Logo", "Liên Kết", "Thời gian"].map(
              (item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item === "Tên Đối tác"
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
                  <div className="col-span-3">
                    <div className="text-[#16757c]">{item.title}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span>Mã SP:</span>
                      <div className="rounded-md px-3 py-1 bg-gray-200">
                        #{item.pid}
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
                    {item.url}
                  </div>

                  <div className="flex justify-center items-center">
                    {item.time}
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
          afterClose={() => setFormData({})}
          onCancel={() => setIsOpenAdd(false)}
        >
          <Create setIsOpenContactModal={setIsOpenAdd} />
        </Modal>
      </>
    </div>
  );
};

export default Parner;
