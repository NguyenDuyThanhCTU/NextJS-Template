"use client";
import InputForm from "@components/items/server-items/InputForm";
import { Drawer, Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaFilter, FaPlus, FaSort } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdDeleteForever, MdNumbers } from "react-icons/md";
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
        {Label === "Cập Nhật Giá, Thứ Tự" ? (
          <>
            {" "}
            <MdNumbers />
          </>
        ) : Label === "Thêm Sản Phẩm" ? (
          <>
            <FaPlus />
          </>
        ) : Label === "Chỉnh Sửa Sản Phẩm, SEO" ? (
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

const ListProduct = () => {
  const [isOpenProductModal, setIsOpenProductModal] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [isOpenChangeIndex, setIsOpenChangeIndex] = useState<boolean>(false);
  const [SelectedProductData, setSelectedProductData] = useState<ProductProps>({
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
          footer={null}
          title={`Bạn muốn thay đổi sản phẩm ${SelectedProductData?.name} ?`}
          open={isOpenProductModal}
          width={700}
          onCancel={() => setIsOpenProductModal(false)}
        >
          <div className="border rounded-xl bg-slate-100">
            <div className="p-5 grid grid-cols-2  justify-center gap-3">
              <Button
                Style="hover:bg-blue-900 bg-blue-700"
                Label="Cập Nhật Giá, Thứ Tự"
                Clicked={() => setIsOpenChangeIndex(true)}
              />
              <Button
                Style="hover:bg-orange-900 bg-orange-700"
                Label="Thêm Sản Phẩm"
                Clicked={() => setIsOpenAdd(true)}
              />
              <Button
                Style="hover:bg-green-900 bg-green-700"
                Label="Chỉnh Sửa Sản Phẩm, SEO"
                Clicked={() => setIsOpenEdit(true)}
              />
              <Button
                Style="hover:bg-red-900 bg-red-700"
                Label="Xóa Sản Phẩm"
                Clicked={() => setIsOpenDelete(true)}
              />
            </div>
          </div>
        </Modal>
      </>

      <>
        {/* Thay đổi thứ tự sản phẩm */}
        <Drawer
          title={`Thay đổi thứ tự, Cập nhật giá cho sản phẩm ${SelectedProductData?.name}`}
          footer={null}
          open={isOpenChangeIndex}
          width={700}
          onClose={() => setIsOpenChangeIndex(false)}
          style={{ backgroundColor: "white" }}
        >
          <div className="flex flex-col gap-2   font-LexendDeca font-light">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-1 text-[16px]">
                <div>Tên sản phẩm:{SelectedProductData?.name}</div>
                <div className="text-blue-500">
                  Thứ tự hiện tại: {SelectedProductData?.stt}
                </div>
                <div className="text-blue-500">
                  Giá Hiện tại: {SelectedProductData?.price}
                </div>
              </div>
              <div className="flex flex-col gap-1 text-[16px]">
                <div className="text-blue-500">Sale hiện tại:</div>
                <div className="text-blue-500">Giảm giá: %</div>
                <div className="text-blue-500">Giá mới:</div>
              </div>
            </div>
            <form className="border rounded-lg from-slate-200 to-slate-400 bg-gradient-to-tr mt-5">
              <div className="p-4 flex flex-col ">
                <div></div>
                <div className=" flex flex-col gap-2  pb-5 border-b border-gray-500">
                  <InputForm Label="Thứ tự" Type="Input" />
                  <InputForm Label="Giá" Type="Input" />
                  <InputForm Label="Giảm giá" Type="Checkbox" />
                  <InputForm Label="Giảm giá (%)" Type="Input" />

                  <div className="text-red-500">Giá mới:</div>
                </div>{" "}
                <div className=" flex flex-col gap-2 pt-5 ">
                  <InputForm Label="Sale" Type="Checkbox" />
                  <InputForm Label="Thay đổi thời gian Sale" Type="Checkbox" />
                  <InputForm Label="Thời gian bắt đầu" Type="DatePicker" />
                  <InputForm Label="Thời gian kết thúc" Type="DatePicker" />
                  <div className="flex justify-center mt-5">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-blue-700 text-white rounded-lg"
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Drawer>
        {/* chỉnh sửa sản phẩm */}
        <Drawer
          footer={null}
          open={isOpenEdit}
          width={700}
          onClose={() => setIsOpenEdit(false)}
        >
          <div className="p-2 flex flex-col gap-2">
            <InputForm Label="Tên sản phẩm" Type="Input" />
            <InputForm Label="Giá sản phẩm" Type="Input" />
            <InputForm Label="Số lượng sản phẩm" Type="Input" />
            <InputForm Label="Mô tả sản phẩm" Type="TextArea" />
            <InputForm Label="Ảnh sản phẩm" Type="Upload" />
            <InputForm Label="Danh mục sản phẩm" Type="Select" />
            <InputForm Label="Thương hiệu sản phẩm" Type="Select" />
            <InputForm Label="Trạng thái sản phẩm" Type="Select" />
          </div>
        </Drawer>

        {/* thêm sản phẩm */}
        <Drawer
          footer={null}
          open={isOpenAdd}
          width={700}
          onClose={() => setIsOpenAdd(false)}
        >
          <div className="p-2 flex flex-col gap-2">
            <InputForm Label="Tên sản phẩm" Type="Input" />
            <InputForm Label="Giá sản phẩm" Type="Input" />
            <InputForm Label="Số lượng sản phẩm" Type="Input" />
            <InputForm Label="Mô tả sản phẩm" Type="TextArea" />
            <InputForm Label="Ảnh sản phẩm" Type="Upload" />
            <InputForm Label="Danh mục sản phẩm" Type="Select" />
            <InputForm Label="Thương hiệu sản phẩm" Type="Select" />
            <InputForm Label="Trạng thái sản phẩm" Type="Select" />
          </div>
        </Drawer>
        {/* xóa sản phẩm */}
        <Drawer
          footer={null}
          open={isOpenDelete}
          width={700}
          onClose={() => setIsOpenDelete(false)}
        >
          <div className="p-2 flex flex-col gap-2">
            <InputForm Label="Tên sản phẩm" Type="Input" />
            <InputForm Label="Giá sản phẩm" Type="Input" />
            <InputForm Label="Số lượng sản phẩm" Type="Input" />
            <InputForm Label="Mô tả sản phẩm" Type="TextArea" />
            <InputForm Label="Ảnh sản phẩm" Type="Upload" />
            <InputForm Label="Danh mục sản phẩm" Type="Select" />
            <InputForm Label="Thương hiệu sản phẩm" Type="Select" />
            <InputForm Label="Trạng thái sản phẩm" Type="Select" />
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default ListProduct;
