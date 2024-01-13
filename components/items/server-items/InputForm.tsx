"use client";
import React from "react";
import ImageUploader from "./ImageUploader";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Tooltip } from "antd";
import TextEditor from "./TextEditor/TextEditor";
import { useStateProvider } from "@context/StateProvider";

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
    | "InputNumber"
    | "Editor";
  setState?: any;
  setUpload?: any;
  FormData?: any;
  setFormData?: any;
  field: any;
  Tips?: string;
  Option?: any;
  PlaceHolder?: string;
}

const InputForm = ({
  Label,
  Type,

  field,
  Tips,
  Option,
  PlaceHolder,
}: InputFormProps) => {
  const { FormData, setFormData } = useStateProvider();
  return (
    <>
      <div>
        {Type === "Upload" ? (
          <>
            <div className="flex flex-col w-full gap-2 ">
              <div className="col-span-2 flex items-center gap-2 ">
                <p> {Label}:</p>
                {Tips && (
                  <Tooltip title={Tips}>
                    <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                  </Tooltip>
                )}
              </div>
              <div className="px-4 py-1   bg-white rounded-lg w-full col-span-6">
                <ImageUploader
                  PlaceHolder={PlaceHolder}
                  setForm={setFormData}
                  Form={FormData}
                  Field={field}
                />
              </div>
            </div>
          </>
        ) : Type === "Editor" ? (
          <>
            <div className="flex flex-col w-full gap-2 ">
              <div className="col-span-2 flex items-center gap-2 ">
                <p> {Label}:</p>
                {Tips && (
                  <Tooltip title={Tips}>
                    <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                  </Tooltip>
                )}
              </div>
              <div className="px-4 py-1   bg-white rounded-lg w-full col-span-6">
                <TextEditor
                  onChange={setFormData}
                  Form={FormData}
                  Field={field}
                />
              </div>
            </div>
          </>
        ) : Type === "Select" ? (
          <>
            {" "}
            <div className="grid grid-cols-8  items-center  w-full justify-between  ">
              <div className="col-span-2 flex items-center gap-2 ">
                <p> {Label}:</p>
                {Tips && (
                  <Tooltip title={Tips}>
                    <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                  </Tooltip>
                )}
              </div>
              <div className="px-4 py-1 border  bg-white rounded-lg w-full col-span-6">
                <select
                  className=" outline-none w-full bg-white"
                  value={field ? FormData[field] : FormData}
                  onChange={(e) =>
                    setFormData({ ...FormData, [field]: e.target.value })
                  }
                >
                  <option>--- Chọn Danh Mục ---</option>
                  {Option.map((item: any, idx: number) => (
                    <option key={idx} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        ) : Type === "Input" ? (
          <div className="grid grid-cols-8  items-center  w-full justify-between  ">
            <div className="col-span-2 flex items-center gap-2 ">
              <p> {Label}:</p>
              {Tips && (
                <Tooltip title={Tips}>
                  <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                </Tooltip>
              )}
            </div>
            <div className="px-4 py-1 border  bg-white rounded-lg w-full col-span-6">
              <input
                type="text"
                placeholder={PlaceHolder ? PlaceHolder : ""}
                className=" outline-none w-full"
                value={FormData[field] === undefined ? "" : FormData[field]}
                onChange={(e) =>
                  setFormData({ ...FormData, [field]: e.target.value })
                }
              />
            </div>
          </div>
        ) : Type === "InputNumber" ? (
          <div className="grid grid-cols-8  items-center  w-full justify-between  ">
            <div className="col-span-2">{Label}:</div>
            {Tips && (
              <Tooltip title={Tips}>
                <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
              </Tooltip>
            )}
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
          <div className="grid grid-cols-8  items-center  w-full justify-between  ">
            <div className="col-span-2 flex items-center gap-2 ">
              <p> {Label}:</p>
              {Tips && (
                <Tooltip title={Tips}>
                  <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                </Tooltip>
              )}
            </div>
            <div className="p-2 border  bg-white rounded-lg w-full col-span-6">
              <textarea
                placeholder={PlaceHolder ? PlaceHolder : ""}
                className=" outline-none w-full"
                value={FormData[field] === undefined ? "" : FormData[field]}
                onChange={(e) =>
                  setFormData({ ...FormData, [field]: e.target.value })
                }
              />
            </div>
          </div>
        ) : Type === "Checkbox" ? (
          <>
            <div className="flex  gap-5 ">
              <div className="col-span-2">
                {Label}:
                {Tips && (
                  <Tooltip title={Tips}>
                    <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                  </Tooltip>
                )}
              </div>
              <div className="col-span-6">
                <div>
                  {Option.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        id={`checkbox_${idx}`}
                        value={item.value}
                        checked={(FormData[field] || []).includes(item.value)}
                        onChange={(e) => {
                          const currentFormData = FormData[field] || []; // Ensure FormData[field] exists
                          if (e.target.checked) {
                            setFormData({
                              ...FormData,
                              [field]: [...currentFormData, e.target.value],
                            });
                          } else {
                            setFormData({
                              ...FormData,
                              [field]: currentFormData.filter(
                                (existingItem: any) =>
                                  existingItem !== e.target.value
                              ),
                            });
                          }
                        }}
                      />
                      <label htmlFor={`checkbox_${idx}`}>{item.label}</label>
                    </div>
                  ))}
                </div>
                {/* {field ? (
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
                )} */}
              </div>
            </div>
          </>
        ) : Type === "Radio" ? (
          <>
            <div className="grid grid-cols-8  w-full items-start  ">
              <div className="col-span-2 flex items-center gap-2 ">
                <p> {Label}:</p>
                {Tips && (
                  <Tooltip title={Tips}>
                    <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                  </Tooltip>
                )}
              </div>
              <div className=" py-1  bg-white rounded-lg w-full col-span-6">
                <div>
                  {Option.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id={`radio_${idx}`}
                        value={item.value}
                        checked={FormData[field] === item.value}
                        onChange={(e) =>
                          setFormData({
                            ...FormData,
                            [field]: e.target.value,
                          })
                        }
                      />
                      <label htmlFor={`radio_${idx}`}>{item.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : Type === "Switch" ? (
          <></>
        ) : Type === "Slider" ? (
          <></>
        ) : Type === "DatePicker" ? (
          <>
            <div className="grid grid-cols-8 gap-3  items-center  w-full justify-between  ">
              <div className="col-span-2">
                {Label}:
                {Tips && (
                  <Tooltip title={Tips}>
                    <FaRegCircleQuestion className="text-[18px] cursor-pointer" />
                  </Tooltip>
                )}
              </div>
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
