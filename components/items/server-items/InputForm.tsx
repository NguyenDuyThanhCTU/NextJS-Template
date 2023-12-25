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
    | "ColorPicker";
  setUpload?: any;
}

const InputForm = ({ Label, Type, setUpload }: InputFormProps) => {
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
          <div className="grid grid-cols-5  items-center  w-full justify-between  ">
            <div className="">{Label}:</div>
            <div className="px-4 py-1 bg-white rounded-lg w-full col-span-4">
              <input
                type="text"
                className=" outline-none"
                onChange={setUpload}
              />
            </div>
          </div>
        ) : Type === "TextArea" ? (
          <></>
        ) : Type === "Checkbox" ? (
          <>
            <div className="flex gap-3 ">
              <div className="">{Label}:</div>
              <input
                type="checkbox"
                className=" outline-none"
                onChange={setUpload}
              />
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
            <div className="grid grid-cols-5  items-center  w-full justify-between  ">
              <div className="">{Label}:</div>
              <div className="px-4 py-1 bg-white rounded-lg w-max col-span-4">
                <input
                  type="date"
                  className=" outline-none"
                  onChange={setUpload}
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
