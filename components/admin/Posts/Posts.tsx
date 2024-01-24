"use client";
import { PostsTypeItems, ProductTypeItems } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import ReportCard from "@components/items/server-items/ReportCard";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import CRUDButton from "@components/items/server-items/CRUDButton";
import { convertDate } from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";
import { PiCardsLight } from "react-icons/pi";
import { FaSort } from "react-icons/fa";
import Search from "@components/items/server-items/Search";

import Image from "next/image";
import { useData } from "@context/DataProviders";
import PostsHandle from "./Posts/PostsHandle";
import { deleteOne } from "@lib/api";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import { IoSearchSharp } from "react-icons/io5";

interface ProductCategoryProps {
  Category: Array<any>;
}

interface PostProps {
  id: any;
  title: string;
  url: string;
  description: string;

  image: string;
  pid: string;
  content: "";
  level0: string;
  level1: string;
  createdAt: any;
}
const Posts = ({ Category }: ProductCategoryProps) => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenHandleModel, setIsOpenHandleModel] = useState(false);
  const [isOpenUpdateModel, setIsOpenUpdateModel] = useState(false);
  const [SelectedPostData, setSelectedPostData] = useState<PostProps>();
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [PostData, setPostData] = useState<any>([]);
  const [PolicyData, setPolicyData] = useState<any>([]);
  const { setFormData } = useStateProvider();
  const { Posts } = useData();
  const router = useRouter();
  useEffect(() => {
    const sort = Posts?.filter((item: any) => item.level0 !== "Introductory");
    if (sort) {
      const Posts = sort.filter((item: any) => item.level0 !== "chinh-sach");
      const Policy = sort.filter((item: any) => item.level0 === "chinh-sach");
      setPostData(Posts);
      setPolicyData(Policy);
    }
  }, [Posts]);
  //choose post in list post
  const HandleSelectPost = (id: string) => {
    const sort = PostData?.filter((item: any) => item.id === id);
    const sortPolicy = PolicyData?.filter((item: any) => item.id === id);
    if (sortPolicy.length > 0) {
      setSelectedPostData(sortPolicy[0]);
      setIsOpenHandleModel(true);
    } else {
      setSelectedPostData(sort[0]);
      setIsOpenHandleModel(true);
    }
  };
  //choose post in list policy
  // const HandleSelectPolicy = (id: string) => {
  //   const sort = PolicyData?.filter((item: any) => item.id === id);

  //   setSelectedPostData(sort[0]);
  //   setIsOpenCategoryModel(true);
  // };

  //sort bar
  const HandleFilter = (criteria: string) => {
    let sortedData = PostData?.filter((item: any) => item.level0 === criteria);
    setDataFilter(sortedData);
  };

  const HandleDelete = async (id: string) => {
    deleteOne("Posts", id).then(() => {
      setIsOpenHandleModel(false);
      router.refresh();
    });
  };
  // console.log(SelectedPostData);
  return (
    <div className="w-full p:px-0 d:px-10 font-light gap-10 min-h-screen  bg-white py-10">
      <div className="flex items-center gap-5 d:flex-row p:flex-col">
        <div>
          <h3 className="text-[30px] font-bold">Danh sách bài viết</h3>
          {DataFilter.length > 0 && (
            <p className="font-light">
              Danh mục bài viết loại: <strong> {DataFilter[0]?.title} </strong>
            </p>
          )}
        </div>
        <div>
          <CRUDButton
            Clicked={setIsOpenAddModal}
            Label="Thêm"
            value="bài viết"
            Style="hover:bg-orange-900 bg-orange-700"
          />
        </div>
      </div>
      <div className="grid p:grid-cols-1 d:grid-cols-5 mt-10 gap-5 min-h-screen">
        <div className="bg-gray-50 border rounded-lg col-span-3 ">
          <div className="p-3">
            <div className="flex items-center gap-4 text-[14px] d:flex-row p:flex-col">
              <div className="border rounded-lg ">
                <div className="py-2 px-4 flex items-center gap-2">
                  <div className="cursor-pointer">
                    <IoSearchSharp />
                  </div>
                  <input
                    type="text"
                    className="outline-none"
                    placeholder="Tìm kiếm bài viết"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center gap-1">
                  <PiCardsLight />
                  <p>{Posts?.length} bài viết</p>
                </div>
                <div className="flex items-center gap-1 text-blue-500">
                  <FaSort />
                  <select
                    className="outline-none pr-10 border-b py-1  bg-gray-100  border-blue-500   "
                    // onChange={(e: any) => filter(e.target.value)}
                  >
                    {PostsTypeItems.map((item: any, idx: number) => (
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
            <div className="font-LexendDeca font-light">
              {" "}
              <div className="mt-5 text-black">
                <div className="grid grid-cols-7 border-b-2 border-black py-3">
                  {["STT", "Tiêu đề", "Hình ảnh", "Mục", "Thời gian"].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className={`${
                          item === "Tiêu đề" || item === "Mục"
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
                  {(DataFilter.length > 0 ? DataFilter : PostData)?.map(
                    (item: PostProps, idx: number) => {
                      const Date = convertDate(item.createdAt);

                      return (
                        <div
                          className="grid grid-cols-7  gap-2 text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                          key={idx}
                          onClick={() => HandleSelectPost(item.id)}
                        >
                          <div className="">{idx + 1}</div>
                          <div className="col-span-2 text-start truncate">
                            {item.title}
                          </div>
                          <div className="flex justify-center items-center">
                            <Image
                              src={item.image}
                              width={100}
                              height={100}
                              alt="product webp"
                            />
                          </div>
                          <div className="flex flex-col items-start text-[14px] col-span-2">
                            <p>
                              {" "}
                              {item.level0} <sup>(Cấp 1)</sup>
                            </p>
                            {item.level1 && (
                              <p className="border-l border-black ml-3 w-max pl-3">
                                {item.level1} <sup>(Cấp 2 )</sup>
                              </p>
                            )}
                          </div>
                          <div className="truncate">{Date}</div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <h2 className="text-[22px] text-cyan-700 font-normal p\">
            Bài viết về chính sách
          </h2>
          <div className=" p-3">
            {" "}
            <div className="font-LexendDeca font-light">
              {" "}
              <div className="mt-5 text-black">
                <div className="grid grid-cols-4 border-b-2 border-black py-3">
                  {["STT", "Tiêu đề", "Thời gian"].map((item, idx) => (
                    <div
                      key={idx}
                      className={`${
                        item === "Tiêu đề"
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
                  {PolicyData?.map((item: PostProps, idx: number) => {
                    const value = convertDate(item.createdAt);

                    return (
                      <div
                        className="grid grid-cols-4   text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                        key={idx}
                        onClick={() => HandleSelectPost(item.id)}
                      >
                        <div className="">{idx + 1}</div>
                        <div className="col-span-2 text-start">
                          {
                            Category?.find(
                              (i) =>
                                slugify(i.level1 ? i.level1 : "", {
                                  locale: "vi",
                                  lower: true,
                                }) === item.level1
                            )?.level1
                          }
                        </div>

                        <div>{value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        <Modal
          footer={null}
          title="Thêm bài viết"
          open={isOpenAddModal}
          width={1000}
          onCancel={() => setIsOpenAddModal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <PostsHandle
            setIsOpen={setIsOpenAddModal}
            Category={Category}
            postsLength={Posts?.length}
          />
        </Modal>
      </>

      <>
        <Modal
          footer={null}
          title={`Cập nhật ${SelectedPostData?.title} ?`}
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
                  value="mục bài viết"
                  Style="hover:bg-blue-900 bg-blue-700"
                />
                <CRUDButton
                  Clicked={() => HandleDelete(SelectedPostData?.id)}
                  Label="Xóa"
                  value="mục bài viết"
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
          <PostsHandle
            setIsOpen={setIsOpenUpdateModel}
            Category={Category}
            Type="update"
            Data={SelectedPostData}
          />
        </Modal>
      </>
    </div>
  );
};

export default Posts;
