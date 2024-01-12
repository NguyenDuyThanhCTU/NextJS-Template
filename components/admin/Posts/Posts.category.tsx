"use client";
import { PostsTypeItems, ProductTypeItems } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import ReportCard from "@components/items/server-items/ReportCard";
import { Modal } from "antd";
import React, { useState } from "react";
import CRUDButton from "@components/items/server-items/CRUDButton";
import { convertDate } from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";
import { PiCardsLight } from "react-icons/pi";
import { FaSort } from "react-icons/fa";
import Search from "@components/items/server-items/Search";
import CategoryCreate from "./Category/Category.create";
import CategoryUpdate from "./Category/Category.update";

interface ProductCategoryProps {
  Data: Array<any>;
}

interface PostCategoryProps {
  level0: string;
  level1: string;
  createdAt: any;
}
const PostCategory = ({ Data }: ProductCategoryProps) => {
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false);
  const [isUpdateType, setIsUpdateType] = useState(false);
  const { setFormData } = useStateProvider();
  const [SelectedProductData, setSelectedProductData] =
    useState<PostCategoryProps>({
      level0: "",
      level1: "",
      createdAt: "",
    });
  const HandleSelectProduct = (level0: string) => {
    const sort = Data?.filter((item) => item.level0 === level0);
    console.log(level0, Data);
    setSelectedProductData(sort[0]);
    setIsOpenCategoryModel(true);
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
    <div className="w-full  px-10 font-light gap-10 min-h-screen  bg-white py-10">
      <div className="">
        <div className="flex justify-between ">
          <div className="flex items-center gap-5">
            <div>
              <h3 className="text-[30px] font-bold">Đối tác</h3>
              <p className="font-light">Danh sách đối tác</p>
            </div>
            <div>
              <CRUDButton
                Clicked={setIsOpenAddTypeModal}
                Label="Thêm"
                value="loại bài viết"
                Style="hover:bg-orange-900 bg-orange-700"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[14px] mr-20">
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
                {PostsTypeItems.map((item, idx) => (
                  <option
                    key={idx}
                    className=" font-extralight "
                    value={item.label}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="font-LexendDeca font-light">
          {" "}
          <div className="mt-5 text-black">
            <div className="grid grid-cols-8 border-b-2 border-black py-3">
              {["STT", "Loại bài viết", "Mục bài viết", "Thời gian"].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className={`${
                      item === "Mục bài viết"
                        ? "col-span-4 justify-start"
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
              {Data?.map((item: PostCategoryProps, idx: number) => {
                const value = convertDate(item.createdAt);
                return (
                  <div
                    className="grid grid-cols-8 text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                    key={idx}
                    onClick={() => HandleSelectProduct(item.level0)}
                  >
                    <div className="">{idx + 1}</div>
                    <div className="text-[#7c1616] font-bold text-[20px]">
                      {item.level0}
                    </div>

                    <div className="font-normal text-blue-500">
                      {item.level1}
                    </div>

                    <div className="w-max">{value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <>
        <Modal
          footer={null}
          title="Thêm danh mục sản phẩm"
          open={isOpenAddTypeModal}
          width={1000}
          onCancel={() => setIsOpenAddTypeModal(false)}
          afterClose={() => setFormData({})}
        >
          <CategoryCreate setIsOpen={setIsOpenAddTypeModal} />
        </Modal>
      </>
      <>
        <Modal
          footer={null}
          title={`Bạn muốn thay đổi mục ${SelectedProductData?.level0} ?`}
          open={isOpenCategoryModel}
          width={1000}
          onCancel={() => setIsOpenCategoryModel(false)}
        >
          <CategoryUpdate Data={SelectedProductData} />
        </Modal>
      </>
    </div>
  );
};

export default PostCategory;
