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
import CreateProduct from "./Create/Create";
import { IoMdStar } from "react-icons/io";

interface ProductProps {
  stt: number;
  pid: string;
  title: string;
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

interface UpdateIndexProps {
  pid: string;
  price: number;
  discount: number;
  newprice: number;
  sale: boolean;
}

export const Button = ({ Label, Style, Clicked }: ButtonProps) => {
  return (
    <div
      className={`${Style} py-2 px-3  cursor-pointer duration-300  text-white rounded-full flex items-center gap-1`}
      onClick={Clicked}
    >
      <div className="text-[20px]">
        {Label === "Cập Nhật Sản phẩm" ? (
          <>
            {" "}
            <CiEdit />
          </>
        ) : Label === "Thêm Sản Phẩm" ? (
          <>
            <FaPlus />
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
    pid: "",
    title: "",
    image: "",
    price: "",
    view: 0,
    time: "",
  });

  const { FormData } = useStateProvider();

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
      pid: "1215",
      title: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 200,
      time: "10/10/2021",
    },
    {
      stt: 2,
      pid: "1216",
      title: "Áo thun nữ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 500,
      time: "10/10/2021",
    },
    {
      stt: 3,
      pid: "1217",
      title: "Áo thun trẻ em",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 100,
      time: "10/10/2021",
    },
    {
      stt: 4,
      pid: "1218",
      title: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 200,
      time: "10/10/2021",
    },
    {
      stt: 5,
      pid: "1219",
      title: "Áo thun nam",
      image:
        "https://firebasestorage.googleapis.com/v0/b/lachmarket-34ace.appspot.com/o/products%2F48e1f92a03a2a0fdb3c771645c7714aa.jpg_720x720q80.jpg?alt=media&token=dc625438-4630-4617-b093-8136d3743716",
      price: "200.000",
      view: 200,
      time: "10/10/2021",
    },
  ];

  const HandleSelectProduct = (id: string) => {
    const sort = productItem?.filter((item) => item.pid === id);
    setSelectedProductData(sort[0]);
    setIsOpenProductModal(true);
  };

  const HandleUpdateIndexForm = (e: any) => {
    e.preventDefault();
    //regex
    console.log(FormData);
  };

  return (
    <div className="border rounded-lg bg-white">
      <div className="p-4 font-normal text-gray-700">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <div>
              <h3 className="text-[30px] font-bold">Danh sách sản phẩm</h3>
              <p className="font-light">Tóm tắc ngắn gọn tất cả sản phẩm</p>
            </div>
            <div>
              <Button
                Style="hover:bg-emerald-900 bg-emerald-700"
                Label="Thêm Sản Phẩm"
                Clicked={() => setIsOpenAdd(true)}
              />
            </div>
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
                onClick={() => HandleSelectProduct(item.pid)}
              >
                <div className="flex justify-center items-center">
                  {item.stt}
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
          title={`Bạn muốn thay đổi sản phẩm ${SelectedProductData?.title} ?`}
          open={isOpenProductModal}
          width={1000}
          onCancel={() => setIsOpenProductModal(false)}
        >
          <div className="flex flex-col gap-4 font-LexendDeca font-light">
            <div className="p-4 grid grid-cols-6 gap-5 text-[20px]">
              <div className="col-span-2">
                <div className="p-3  bg-slate-100 ">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                      <Image
                        src={SelectedProductData?.image}
                        alt="Product"
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <p className="text-[20px] font-normal">
                        {SelectedProductData.title}
                      </p>
                    </div>
                    <div className="mt-5">
                      <p className="text-center font-light ">123 Đánh giá</p>
                      <div className="text-yellow-400 flex items-center text-[20px] gap-1">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 text-gray-600 flex flex-col gap-5">
                <div className="">
                  <h3 className="font-bold">Thông tin sản phẩm</h3>

                  <div className="border rounded-xl border-black mt-3">
                    <div className="text-[18px] ml-2 mt-3 grid grid-cols-2 w-full gap-2 p-2 overflow-y-auto">
                      <li className="">
                        Tên sản phẩm:{" "}
                        <span className="underline">
                          {SelectedProductData.title}
                        </span>
                      </li>

                      <div className="flex items-center gap-2">
                        <p> Mã sản phẩm:</p>
                        <div className="rounded-md px-3 py-1 bg-gray-200">
                          #{SelectedProductData.pid}
                        </div>
                      </div>
                      <li>
                        Giá sản phẩm:{" "}
                        <strong className="text-red-500">
                          {SelectedProductData.price} VNĐ
                        </strong>
                      </li>

                      <li>
                        Trạng thái:{" "}
                        <span className="text-green-500">Còn Hàng</span>
                      </li>
                      <li>
                        Ngày tạo: <strong> {SelectedProductData.time}</strong>
                      </li>
                      <li>
                        Lượt xem: <strong> {SelectedProductData.view}</strong>
                      </li>

                      <div className="border rounded-md bg-slate-100">
                        <div className="p-2">
                          {" "}
                          <li>Danh mục: abc</li>
                          <li>Danh mục con: abc</li>
                          <li>Topic: abc</li>
                        </div>
                      </div>
                      <li>
                        lượt đánh giá: <strong>123 Đánh giá</strong>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="font-bold">Thông tin Sale</h3>
                  <div>chuyển hướng đến sale</div>
                </div>
                <div className="">
                  <h3 className="font-bold">Mô tả sản phẩm</h3>
                  <div>abced</div>
                </div>
                <div className="">
                  <h3 className="font-bold">Chi tiết sản phẩm</h3>
                  <div>abced</div>
                </div>
              </div>
            </div>

            <div className="border rounded-xl bg-slate-100">
              <div className="p-5 grid grid-cols-2  justify-center gap-3">
                <Button
                  Style="hover:bg-blue-900 bg-blue-700"
                  Label="Cập Nhật Sản phẩm"
                  Clicked={() => setIsOpenChangeIndex(true)}
                />

                <Button
                  Style="hover:bg-red-900 bg-red-700"
                  Label="Xóa Sản Phẩm"
                  Clicked={() => setIsOpenDelete(true)}
                />
              </div>
            </div>
          </div>
        </Modal>
      </>

      <>
        {/* Thay đổi thứ tự sản phẩm */}
        <Drawer
          title={`Thay đổi thứ tự, Cập nhật giá cho sản phẩm ${SelectedProductData?.title}`}
          footer={null}
          open={isOpenChangeIndex}
          width={700}
          onClose={() => setIsOpenChangeIndex(false)}
          style={{ backgroundColor: "white" }}
        >
          <UpdateIndex
            Data={SelectedProductData}
            HandleForm={HandleUpdateIndexForm}
          />
        </Drawer>
        {/* chỉnh sửa sản phẩm */}

        <Drawer
          footer={null}
          open={isOpenEdit}
          width={700}
          onClose={() => setIsOpenEdit(false)}
        >
          <div className="p-2 flex flex-col gap-2">
            {/* <InputForm Label="Tên sản phẩm" Type="Input" />
            <InputForm Label="Giá sản phẩm" Type="Input" />
            <InputForm Label="Số lượng sản phẩm" Type="Input" />
            <InputForm Label="Mô tả sản phẩm" Type="TextArea" />
            <InputForm Label="Ảnh sản phẩm" Type="Upload" />
            <InputForm Label="Danh mục sản phẩm" Type="Select" />
            <InputForm Label="Thương hiệu sản phẩm" Type="Select" />
            <InputForm Label="Trạng thái sản phẩm" Type="Select" /> */}
          </div>
        </Drawer>

        {/* thêm sản phẩm */}
        <Drawer
          title="Thêm mới sản phẩm"
          footer={null}
          open={isOpenAdd}
          width={700}
          onClose={() => setIsOpenAdd(false)}
        >
          <CreateProduct />
        </Drawer>
        {/* xóa sản phẩm */}
        <Drawer
          footer={null}
          open={isOpenDelete}
          width={700}
          onClose={() => setIsOpenDelete(false)}
        >
          <div className="p-2 flex flex-col gap-2">
            {/* <InputForm Label="Tên sản phẩm" Type="Input" />
            <InputForm Label="Giá sản phẩm" Type="Input" />
            <InputForm Label="Số lượng sản phẩm" Type="Input" />
            <InputForm Label="Mô tả sản phẩm" Type="TextArea" />
            <InputForm Label="Ảnh sản phẩm" Type="Upload" />
            <InputForm Label="Danh mục sản phẩm" Type="Select" />
            <InputForm Label="Thương hiệu sản phẩm" Type="Select" />
            <InputForm Label="Trạng thái sản phẩm" Type="Select" /> */}
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default ListProduct;
