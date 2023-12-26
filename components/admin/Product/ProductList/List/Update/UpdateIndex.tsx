import EditButton from "@components/items/server-items/EditButton";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

interface UpdateIndexProps {
  Data: any;
  HandleForm: any;
}

const UpdateIndex = ({ Data, HandleForm }: UpdateIndexProps) => {
  const [isOpenForm, setIsOpenForm] = React.useState(false);
  const [isOpenDiscount, setIsOpenDiscount] = React.useState(false);

  const { FormData, setFormData } = useStateProvider();

  const HandleSaleForm = (e: any) => {
    e.preventDefault();
    console.log(FormData);
    // const From: startpoint, endpoint
  };

  return (
    <div className="flex flex-col gap-5   font-LexendDeca font-light text-slate-700">
      <div className="pb-5 border-b border-slate-300">
        <div className="border rounded-lg border-slate-500">
          <div className="p-6">
            <div className="flex justify-between">
              <h2 className="font-normal text-[20px]">Thông tin sản phẩm</h2>
              <div>
                <EditButton onClick={() => setIsOpenForm(true)} />
              </div>
            </div>
            <div className="grid grid-cols-2 text-[16px] mt-5">
              <div className="flex flex-col gap-2 ">
                <div>
                  Tên sản phẩm:{" "}
                  <span className="text-gray-500">{Data?.name}</span>
                </div>
                <div className="">
                  Thứ tự hiện tại: <span>{Data?.stt}</span>
                </div>
                <div className="">
                  Giá Hiện tại: <span>{Data?.price}</span>
                </div>
              </div>
              <div className="">
                {Data.discount && (
                  <div className="flex flex-col gap-1 ">
                    <div className="">Sale hiện tại:</div>
                    <div className="">Giảm giá: %</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {isOpenForm && (
          <>
            {" "}
            <form
              className="border rounded-lg from-slate-200 to-slate-400 bg-gradient-to-tr mt-5"
              onSubmit={HandleForm}
            >
              <div className="p-4 flex flex-col ">
                <div className=" flex flex-col gap-2  pb-5 border-b border-gray-500">
                  <InputForm
                    Label="Thứ tự"
                    Type="Input"
                    FormData={FormData}
                    setFormData={setFormData}
                    field="pid"
                  />
                  <InputForm
                    Label="Giá"
                    Type="Input"
                    FormData={FormData}
                    setFormData={setFormData}
                    field="price"
                  />
                  <InputForm
                    Label="Giảm giá"
                    Type="Checkbox"
                    setState={setIsOpenDiscount}
                  />
                  {isOpenDiscount && (
                    <InputForm
                      Label="Giảm giá (%)"
                      Type="Input"
                      FormData={FormData}
                      setFormData={setFormData}
                      field="discount"
                    />
                  )}

                  {FormData?.discount && (
                    <div className="text-red-500">Giá mới:</div>
                  )}
                  <InputForm
                    Label="Sale"
                    Type="Checkbox"
                    FormData={FormData}
                    setFormData={setFormData}
                    field="sale"
                  />
                </div>{" "}
                <div className=" flex flex-col gap-2 pt-5 ">
                  <div className="flex justify-center mt-2">
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
          </>
        )}
      </div>
      <div className="pt-5">
        <div className="border-x-2 rounded-lg   border-red-500">
          <div className="p-6">
            <div className="flex justify-between">
              <h2 className="font-normal text-[20px]">
                Thay đổi thời gian sale
              </h2>
              <div>
                <EditButton onClick={() => setIsOpenForm(false)} />
              </div>
            </div>
            <div className="grid grid-cols-2 text-[16px] mt-5">
              <div className="flex flex-col gap-2 ">
                <div>
                  Thời gian bắt đầu:
                  <span className="text-gray-500">{Data?.name}</span>
                </div>
                <div className="">
                  Thời gian kết thúc: <span>{Data?.stt}</span>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>

        {!isOpenForm && (
          <>
            <form
              className="border rounded-lg from-slate-200 to-slate-400 bg-gradient-to-tr mt-5"
              onSubmit={HandleSaleForm}
            >
              <div className="p-4 flex flex-col ">
                <div className=" flex flex-col gap-2  pb-5 border-b border-gray-500">
                  <InputForm
                    Label="Thời gian bắt đầu"
                    Type="DatePicker"
                    field="startpoint"
                    FormData={FormData}
                    setFormData={setFormData}
                  />
                  <InputForm
                    Label="Thời gian kết thúc"
                    Type="DatePicker"
                    field="endpoint"
                    FormData={FormData}
                    setFormData={setFormData}
                  />
                </div>
                <div className=" flex flex-col gap-2 pt-5 ">
                  <div className="flex justify-center mt-2">
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
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateIndex;
