import CRUDButton from "@components/items/server-items/CRUDButton";
import React from "react";

const CategoryUpdate = ({ Data }: any) => {
  const [isOpenAddCategoryModal, setIsOpenAddCategoryModal] =
    React.useState(false);
  return (
    <div className="flex flex-col gap-4 font-LexendDeca font-light">
      <div className="p-4 grid grid-cols-6 gap-5 text-[20px]">
        <div className="col-span-4 text-gray-600 flex flex-col gap-5">
          <div className="">
            <h3 className="font-bold">Thông tin mục</h3>

            <div className="border rounded-xl border-black mt-3">
              <div className="text-[18px] ml-2 mt-3 grid grid-cols-2 w-full gap-2 p-2 overflow-y-auto">
                <li className="">
                  Loại bài viết:{" "}
                  <span className="underline">{Data.level0}</span>
                </li>

                <div className="flex items-center gap-2">
                  <p> Mục bài viết:</p>
                  <div className="rounded-md px-3 py-1 bg-gray-200">
                    {Data.level1}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-xl bg-slate-100">
        <div className="p-5 grid grid-cols-2  justify-center gap-3">
          <CRUDButton
            Label="Cập nhật"
            value="loại bài viết"
            Style="hover:bg-blue-900 bg-blue-700"
            Clicked={() => setIsOpenAddCategoryModal(true)}
          />

          <CRUDButton
            Clicked={() => console.log("delete")}
            Label="Xóa"
            value="loại bài viết"
            Style="hover:bg-red-900 bg-red-700"

            //   Clicked={() => setIsOpenDelete(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
