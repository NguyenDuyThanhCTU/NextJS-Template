import React from "react";
import ImageUploader from "./ImageUploader";

interface InputFormProps {
  Label: string;
  Type:
    | "Upload"
    | "Select"
    | "Input"
    | "TextArea"
    | "Checkbox"
    | "Radio"
    | "Switch"
    | "Slider"
    | "DatePicker"
    | "TimePicker"
    | "ColorPicker"
    | "InputNumber";
  setState?: any;
  setUpload?: any;
  FormData?: any;
  setFormData?: any;
  field?: any;
}

const InputForm = ({
  Label,
  Type,
  setState,
  setUpload,
  FormData,
  setFormData,
  field,
}: InputFormProps) => {
  return (
    <>
      <div>
        {Type === "Upload" ? (
          <>
            <ImageUploader onChange={setUpload} />
          </>
        ) : Type === "Select" ? (
          <></>
        ) : Type === "Input" ? (
          <div className="grid grid-cols-8  items-center  w-full justify-between  ">
            <div className="col-span-2">{Label}:</div>
            <div className="px-4 py-1 bg-white rounded-lg w-full col-span-6">
              <input
                type="text"
                className=" outline-none w-full"
                value={field ? FormData[field] : FormData}
                onChange={(e) =>
                  setFormData({ ...FormData, [field]: e.target.value })
                }
              />
            </div>
          </div>
        ) : Type === "InputNumber" ? (
          <div className="grid grid-cols-8  items-center  w-full justify-between  ">
            <div className="col-span-2">{Label}:</div>
            <div className="px-4 py-1 bg-white rounded-lg w-full col-span-6">
              <input
                type="number"
                className=" outline-none w-full"
                value={field ? FormData[field] : FormData}
                onChange={(e) =>
                  setFormData({ ...FormData, [field]: e.target.value })
                }
              />
            </div>
          </div>
        ) : Type === "TextArea" ? (
          <></>
        ) : Type === "Checkbox" ? (
          <>
            <div className="grid grid-cols-8  items-center  w-full justify-between  ">
              <div className="col-span-2">{Label}:</div>
              <div className="col-span-6">
                {field ? (
                  <>
                    <input
                      type="checkbox"
                      checked={FormData[field]}
                      className=" outline-none"
                      onChange={(e) =>
                        setFormData({ ...FormData, [field]: e.target.checked })
                      }
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <input
                      type="checkbox"
                      className=" outline-none"
                      onChange={(e) => setState(e.target.checked)}
                    />
                  </>
                )}
              </div>
            </div>
          </>
        ) : Type === "Radio" ? (
          <></>
        ) : Type === "Switch" ? (
          <></>
        ) : Type === "Slider" ? (
          <></>
        ) : Type === "DatePicker" ? (
          <>
            <div className="grid grid-cols-8 gap-3  items-center  w-full justify-between  ">
              <div className="col-span-2">{Label}:</div>
              <div className="px-4 py-1 bg-white rounded-lg w-max col-span-6">
                <input
                  type="date"
                  className=" outline-none"
                  onChange={(e) =>
                    setFormData({ ...FormData, [field]: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        ) : Type === "TimePicker" ? (
          <></>
        ) : Type === "ColorPicker" ? (
          <></>
        ) : null}
      </div>
    </>
  );
};

export default InputForm;
