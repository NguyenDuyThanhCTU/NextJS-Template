import React from "react";
import ImageUploader from "./ImageUploader";

interface InputFormProps {
  Label: string;
  Type: string;
  setUpload?: any;
}

const InputForm = ({ Label, Type, setUpload }: InputFormProps) => {
  return (
    <>
      <div className="flex gap-2 items-start admin-label flex-col ">
        <div className="">{Label}:</div>
        <div>
          {Type === "Upload" ? (
            <>
              <ImageUploader onChange={setUpload} />
            </>
          ) : Type === "Select" ? (
            <></>
          ) : Type === "Input" ? (
            <></>
          ) : Type === "TextArea" ? (
            <></>
          ) : Type === "Checkbox" ? (
            <></>
          ) : Type === "Radio" ? (
            <></>
          ) : Type === "Switch" ? (
            <></>
          ) : Type === "Slider" ? (
            <></>
          ) : Type === "DatePicker" ? (
            <></>
          ) : Type === "TimePicker" ? (
            <></>
          ) : Type === "ColorPicker" ? (
            <></>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InputForm;
