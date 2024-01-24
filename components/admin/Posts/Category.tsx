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

interface ProductCategoryProps {
  Data: Array<any>;
}

interface PostCategoryProps {
  id: string;
  title: string;
  level1: string;
  createdAt: any;
}
const PostCategory = ({ Data }: ProductCategoryProps) => {
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [LabelDataChart, setLabelDataChart] = useState<any>([]);
  const [ValueDataChart, setValueDataChart] = useState<any>([]);
  const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false);
  const { setFormData } = useStateProvider();
  const [SelectedProductData, setSelectedProductData] =
    useState<PostCategoryProps>({
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

  return (
    <div className="w-full  p:px-0 d:px-10 font-light h-screen  bg-white py-10">
      <div className="">
        <div className="flex items-center gap-5 d:flex-row p:flex-col">
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

        <div>
          <div className="grid p:grid-cols-1 d:grid-cols-5 gap-5 items-start mt-5">
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
                    (item: PostCategoryProps, idx: number) => {
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
            <div className="p:col-span-1 d:col-span-2 border  rounded-lg">
              <div className="p-2 ">
                {LabelDataChart.length > 0 && ValueDataChart.length > 0 && (
                  <Barchart
                    Label={LabelDataChart}
                    Value={ValueDataChart}
                    Title="Loại bài viết"
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

export default PostCategory;
