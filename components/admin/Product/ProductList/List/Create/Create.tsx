"use client";
import { uploadImage } from "@components/items/server-items/Handle";
import InputForm from "@components/items/server-items/InputForm";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Tabs, Upload } from "antd";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CreateProduct = () => {
  const { FormData, setFormData } = useStateProvider();
  const [ListSubImage, setListSubImage] = useState<any>([]);

  const customRequest = async (options: any) => {
    options.onSuccess({});

    try {
      const url = await uploadImage(options.file, "avatar");
      const newUrl = {
        uid: options.file.uid,
        url: url,
      };
      setListSubImage((prev: any) => [...prev, newUrl]);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between fixed top-3 right-5">
        <div></div>
        <div>
          <div className="bg-blue-500 py-2 px-6 rounded-lg text-white cursor-pointer hover:bg-blue-700 duration-300">
            Cập nhật
          </div>
        </div>
      </div>
      <Tabs
        tabPosition="top"
        items={[
          {
            key: "1",
            label: "Thông tin chi tiết",
            children: (
              <>
                <form className="flex flex-col gap-2">
                  <InputForm
                    Label="Tên sản phẩm"
                    Type="Input"
                    FormData={FormData}
                    setFormData={setFormData}
                    field="name"
                    Tips="Nhập tên sản phẩm, tối đa 100 ký tự"
                  />
                  <InputForm
                    Label="Giá sản phẩm"
                    Type="Input"
                    FormData={FormData}
                    setFormData={setFormData}
                    field="price"
                    Tips="Nhập giá sản phẩm (VD: 1.000.000, 10.000.000, ...) .Tối đa 100 ký tự"
                  />
                  <InputForm
                    Label="Mã sản phẩm"
                    Type="Input"
                    FormData={FormData}
                    setFormData={setFormData}
                    field="pID"
                    Tips="
          Mã của sản phẩm là các con số hoặc một đoạn mã để xác định tính duy nhất của sản phẩm. Tối đa 20 ký tự
      "
                  />

                  <div className="border border-gray-600">
                    <div className="p-3 flex flex-col gap-2">
                      <InputForm
                        Label="Phân Loại"
                        Type="Select"
                        FormData={FormData}
                        setFormData={setFormData}
                        Option={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                        ]}
                        field="price"
                        Tips="Lựa chọn danh mục chứa sản phẩm"
                      />
                      <InputForm
                        Label="Mục sản phẩm"
                        Type="Select"
                        FormData={FormData}
                        setFormData={setFormData}
                        Option={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                        ]}
                        field="price"
                        Tips="Lựa chọn mục trong danh mục chứa sản phẩm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 flex-col mt-5">
                    <InputForm
                      Label="Mô tả sản phẩm"
                      Type="Editor"
                      FormData={FormData}
                      setFormData={setFormData}
                      field="describe"
                    />
                    <InputForm
                      Label="Chi tiết sản phẩm"
                      Type="Editor"
                      FormData={FormData}
                      setFormData={setFormData}
                      field="detail"
                    />
                  </div>
                  <InputForm
                    Label="Ảnh đại diện"
                    Type="Upload"
                    FormData={FormData}
                    setFormData={setFormData}
                    field="image"
                  />
                </form>
              </>
            ),
          },
          {
            key: "2",
            label: "Thông tin khác",
            children: (
              <form className="flex flex-col gap-2">
                <div className="border border-gray-600">
                  <div className="p-3 flex flex-col gap-2">
                    <InputForm
                      Label="Tình trạng"
                      Type="Radio"
                      FormData={FormData}
                      setFormData={setFormData}
                      Option={["Còn Hàng", "Hết Hàng", "Đang Cập nhật"]}
                      field="state"
                    />
                  </div>
                </div>
                <div className="border border-gray-600">
                  <div className="p-3 flex flex-col gap-2">
                    <InputForm
                      Label="Tùy chọn"
                      Type="Checkbox"
                      FormData={FormData}
                      setFormData={setFormData}
                      Option={[
                        "Sản phẩm mới",
                        "Sản phẩm nổi bật",
                        "Sản phẩm bán chạy",
                        "Sản phẩm khuyến mãi",
                      ]}
                      field="topic"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full gap-2 ">
                  <div className="col-span-2 flex items-center gap-2 ">
                    <p> Ảnh liên quan: </p>
                  </div>
                  <div className="px-4 py-1   bg-white rounded-lg w-full col-span-6">
                    <Upload
                      customRequest={customRequest}
                      listType="picture-card"
                    >
                      <div className="flex flex-col items-center">
                        <AiOutlinePlus className="text-[24px]" />
                        <div className="mt-2">Upload</div>
                      </div>
                    </Upload>
                  </div>
                </div>
              </form>
            ),
          },
          {
            key: "3",
            label: "Cấu hình SEO",
            children: "Content of Tab Pane 3",
          },
        ]}
      />
    </div>
  );
};

export default CreateProduct;
