import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

interface UpdateIndexProps {
  Data: any;
  HandleForm: any;
}

const UpdateIndex = ({ Data, HandleForm }: UpdateIndexProps) => {
  const { FormData, setFormData } = useStateProvider();

  return (
    <div className="flex flex-col gap-2   font-LexendDeca font-light">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-1 text-[16px]">
          <div>Tên sản phẩm:{Data?.name}</div>
          <div className="text-blue-500">Thứ tự hiện tại: {Data?.stt}</div>
          <div className="text-blue-500">Giá Hiện tại: {Data?.price}</div>
        </div>
        <div className="flex flex-col gap-1 text-[16px]">
          <div className="text-blue-500">Sale hiện tại:</div>
          <div className="text-blue-500">Giảm giá: %</div>
          <div className="text-blue-500">Giá mới:</div>
        </div>
      </div>
      <form
        className="border rounded-lg from-slate-200 to-slate-400 bg-gradient-to-tr mt-5"
        onSubmit={HandleForm}
      >
        <div className="p-4 flex flex-col ">
          <div></div>
          <div className=" flex flex-col gap-2  pb-5 border-b border-gray-500">
            <InputForm
              Label="Thứ tự"
              Type="Input"
              FormData={FormData}
              setFormData={setFormData}
              field="pid"
            />
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
  );
};

export default UpdateIndex;
