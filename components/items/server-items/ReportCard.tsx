import React from "react";
import { CiBoxList, CiCircleList } from "react-icons/ci";
import { GiNewspaper } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { TbAccessPoint } from "react-icons/tb";
interface ReportCardProps {
  Label: string;
  Value?: number;
}
const ReportCard = ({ Label, Value }: ReportCardProps) => {
  return (
    <div
      className={`${
        Label === "Tổng Số Sản Phẩm"
          ? "bg-[#FF9F1C]"
          : Label === "Tổng Số Tin Tức"
          ? "bg-[#4360F0]"
          : Label === "Tổng Số Truy Cập"
          ? "bg-[#FF6A6B]"
          : "bg-[#4DCDC4]"
      }  text-white rounded-md`}
    >
      <div className="p-3 grid grid-cols-5 gap-2 items-center">
        <div className="col-span-4 font-semibold">
          <h3 className="text-[40px] ">{Value}</h3>
          <p className="text-[20px]">{Label}</p>
        </div>
        <div className="flex">
          <div
            className="bg-[rgba(255,255,255,0.35)] p-2 text-[30px] rounded-full h-max
                  "
          >
            {Label === "Tổng Số Sản Phẩm" ? (
              <CiBoxList />
            ) : Label === "Tổng Số Tin Tức" ? (
              <GiNewspaper />
            ) : Label === "Tổng Số Truy Cập" ? (
              <TbAccessPoint />
            ) : Label === "Tổng Số Thông Báo" ? (
              <IoIosNotifications />
            ) : (
              <CiCircleList />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
