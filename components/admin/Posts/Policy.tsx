"use client";
import { PostsTypeItems, ProductTypeItems } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import ReportCard from "@components/items/server-items/ReportCard";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import CRUDButton from "@components/items/server-items/CRUDButton";
import {
  convertDate,
  convertToChartArray,
} from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";
import { PiCardsLight } from "react-icons/pi";
import { FaSort } from "react-icons/fa";
import Search from "@components/items/server-items/Search";
import CategoryCreate from "./Category/Create";
import CategoryUpdate from "./Category/Update";
import Barchart from "@components/items/Chart/Barchart";
import LineChart from "@components/items/Chart/Linechart";
import TimelineChart from "@components/items/Chart/Timeline";

interface ProductCategoryProps {
  Data: Array<any>;
}

interface PostPolicyProps {
  id: string;
  title: string;
  level1: string;
  createdAt: any;
}
const PostPolicy = ({ Data }: ProductCategoryProps) => {
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [LabelDataChart, setLabelDataChart] = useState<any>([]);
  const [ValueDataChart, setValueDataChart] = useState<any>([]);
  const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false);
  const { setFormData } = useStateProvider();
  const [SelectedProductData, setSelectedProductData] =
    useState<PostPolicyProps>({
      id: "",
      title: "",
      level1: "",
      createdAt: "",
    });
  const HandleSelectProduct = (id: string) => {
    const sort = Data?.filter((item) => item.id === id);

    setSelectedProductData(sort[0]);
    setIsOpenCategoryModel(true);
  };

  const HandleFilter = (criteria: string) => {
    let sortedData = Data.filter((item) => item.title === criteria);
    setDataFilter(sortedData);
  };

  useEffect(() => {
    const Label = convertToChartArray(PostsTypeItems);
    setLabelDataChart(Label);
    const arr: any = [];
    Label.map((item: any) => {
      const sort = Data.filter((item2: any) => item2.title === item).length;
      arr.push(sort);
    });
    setValueDataChart(arr);
  }, [Data]);
  const timelineLabels = [
    "2022-01-01",
    "2022-02-01",
    "2022-03-01",
    "2022-04-01",
  ];
  const timelineData = [10, 25, 15, 30];
  return (
    <div className="w-full  px-10 font-light gap-10 h-screen  bg-white py-10">
      <div className="">
        <div className="flex justify-between ">
          <div className="flex items-center gap-5">
            <div>
              <h3 className="text-[30px] font-bold">Danh sách loại bài viết</h3>
              {DataFilter.length > 0 && (
                <p className="font-light">
                  Danh mục bài viết loại:{" "}
                  <strong> {DataFilter[0]?.title} </strong>
                </p>
              )}
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
              <p>{Data.length} loại bài viết</p>
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <FaSort />
              <select
                className="outline-none pr-10 border-b py-1  bg-gray-100  border-blue-500   "
                onChange={(e: any) => HandleFilter(e.target.value)}
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
        <div>
          <div className="grid grid-cols-5 gap-5 items-start mt-5">
            <div className="font-LexendDeca font-light col-span-3 overflow-y-auto ">
              {" "}
              <div className="mt-5 text-black">
                <div className="grid grid-cols-4 border-b-2 border-black py-3">
                  {["STT", "Mục bài viết", "Thời gian"].map((item, idx) => (
                    <div
                      key={idx}
                      className={`${
                        item === "Mục bài viết"
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
                  {(DataFilter.length > 0 ? DataFilter : Data)?.map(
                    (item: PostPolicyProps, idx: number) => {
                      const value = convertDate(item.createdAt);

                      return (
                        <div
                          className="grid grid-cols-4 text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                          key={idx}
                          onClick={() => HandleSelectProduct(item.id)}
                        >
                          <div className="">{idx + 1}</div>

                          <div className="font-normal text-blue-500 col-span-2 text-start">
                            <p>
                              {" "}
                              {item.level1}{" "}
                              <sup className="text-[#7c1616]">
                                {" "}
                                {item.title}
                              </sup>
                            </p>
                          </div>

                          <div className="">{value}</div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-2 border  rounded-lg">
              <div className="p-2 ">
                {LabelDataChart.length > 0 && ValueDataChart.length > 0 && (
                  <TimelineChart
                    timeLabels={timelineLabels}
                    data={timelineData}
                  />
                )}
              </div>
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
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <CategoryCreate setIsOpen={setIsOpenAddTypeModal} />
        </Modal>
      </>
      <>
        <Modal
          footer={null}
          title={`Bạn muốn thay đổi mục ${SelectedProductData?.title} ?`}
          open={isOpenCategoryModel}
          width={1000}
          onCancel={() => setIsOpenCategoryModel(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          {/* <CategoryUpdate
            Data={SelectedProductData}
            setIsOpen={setIsOpenCategoryModel}
          /> */}
        </Modal>
      </>
    </div>
  );
};

export default PostPolicy;
