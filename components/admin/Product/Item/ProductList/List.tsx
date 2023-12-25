"use client";
import InputForm from "@components/items/server-items/InputForm";
import { Modal } from "antd";
import Image from "next/image";
import React from "react";
import { FaFilter, FaSort } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { PiCardsLight } from "react-icons/pi";

interface ProductProps {
  stt: number;
  uid: string;
  name: string;
  image: string;
  price: string;
  view: number;
  time: string;
}

interface ButtonProps {
  label: string;
  onClick: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 px-4 py-2 rounded-lg text-white"
      onChange={onClick}
    >
      {label}
    </button>
  );
};

const ListProduct = () => {
  const [isOpenProductModal, setIsOpenProductModal] =
    React.useState<boolean>(false);
  const [SelectedProductData, setSelectedProductData] =
    React.useState<ProductProps>({
      stt: 0,
      uid: "",
      name: "",
      image: "",
      price: "",
      view: 0,
      time: "",
    });

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
  const productItem = [
    {
      stt: 1,
      uid: "1215",
      name: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 200,
      time: "10/10/2021",
    },
    {
      stt: 2,
      uid: "1216",
      name: "Áo thun nữ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 500,
      time: "10/10/2021",
    },
    {
      stt: 3,
      uid: "1217",
      name: "Áo thun trẻ em",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 100,
      time: "10/10/2021",
    },
    {
      stt: 4,
      uid: "1218",
      name: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 200,
      time: "10/10/2021",
    },
    {
      stt: 5,
      uid: "1219",
      name: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 200,
      time: "10/10/2021",
    },
  ];

  const HandleSelectProduct = (id: string) => {
    const sort = productItem?.filter((item) => item.uid === id);
    setSelectedProductData(sort[0]);
    setIsOpenProductModal(true);
  };

  return (
    <div className="border rounded-lg bg-white">
      <div className="p-4 font-normal text-gray-700">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[30px] font-bold">Danh sách sản phẩm</h3>
            <p className="font-light">Tóm tắc ngắn gọn tất cả sản phẩm</p>
          </div>
          <div className="flex items-center gap-4 text-[14px]">
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
            <div className="flex items-center gap-1">
              <PiCardsLight />
              <p>25 sản phẩm</p>
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
        <div className="mt-5 text-black">
          <div className="grid grid-cols-8 border-b-2 border-black py-3">
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
            {productItem.map((item, idx) => (
              <div
                className="grid grid-cols-8 border-b py-3 cursor-pointer hover:bg-slate-100"
                key={idx}
                onClick={() => HandleSelectProduct(item.uid)}
              >
                <div className="flex justify-center items-center">
                  {item.stt}
                </div>
                <div className="col-span-3">
                  <div className="text-[#16757c]">{item.name}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span>Mã SP:</span>
                    <div className="rounded-md px-3 py-1 bg-gray-200">
                      #{item.uid}
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

                <div className="flex justify-center items-center">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <>
        <Modal
          title={`Bạn muốn thay đổi sản phẩm ${SelectedProductData?.name} ?`}
          open={isOpenProductModal}
          onCancel={() => setIsOpenProductModal(false)}
        >
          <div>{/* <Button /> */}</div>
        </Modal>
      </>
    </div>
  );
};

export default ListProduct;
