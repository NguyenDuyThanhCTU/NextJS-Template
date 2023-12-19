import React from "react";
import { CiBoxList } from "react-icons/ci";
import { GiNewspaper } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { TbAccessPoint } from "react-icons/tb";

const AdminHomePage = () => {
  const FunctionItem = [
    {
      label: "Hướng dẫn quản trị",
      value: "",
      image: `<?xml version="1.0" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
       width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000"
       preserveAspectRatio="xMidYMid meet">
      
      <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M161 1187 c-19 -7 -44 -25 -55 -40 -20 -27 -21 -39 -21 -347 0 -308
      1 -320 21 -347 37 -50 54 -52 534 -52 480 0 497 2 534 52 20 27 21 39 21 347
      0 308 -1 320 -21 347 -11 15 -36 33 -55 40 -48 17 -910 17 -958 0z m534 -249
      c113 -68 145 -98 145 -134 0 -44 -17 -61 -136 -135 -127 -79 -158 -87 -199
      -49 -25 23 -25 26 -25 180 0 150 1 157 23 177 47 43 59 41 192 -39z"/>
      </g>
      </svg>
      `,
    },
    {
      label: "Cấu Hình Chung",
      value: "/admin/cau-hinh?tab=cau-hinh-chung",
      image: "",
    },
    {
      label: "Tối Ưu SEO",
      value: "/admin/cau-hinh?tab=cau-hinh-seo",
      image: "",
    },
    {
      label: "Quản Lý Danh Mục Bài Viết",
      value: "/admin/bai-viet?tab=danh-muc-bai-viet",
      image: "",
    },
    {
      label: "Quản Lý Danh Sách Bài Viết",
      value: "/admin/bai-viet?tab=danh-sach-bai-viet",
      image: "",
    },
    {
      label: "Kênh Truyền Thông",
      value: "/admin/truyen-thong?tab=kenh-truyen-thong",
      image: "",
    },
    {
      label: "Quản Lý Tài Khoản",
      value: "/admin/tai-khoan?tab=lich-su-hoat-dong",
      image: "",
    },
    {
      label: "Quản Lý Các Slide Giới Thiệu",
      value: "/admin/san-pham?tab=slide-gioi-thieu",
      image: "",
    },
    {
      label: "Tối Ưu SEO Sản Phẩm",
      value: "/admin/san-pham?tab=cau-hinh-seo",
      image: "",
    },
    {
      label: "Tối Ưu SEO Bài Viết",
      value: "/admin/bai-viet?tab=cau-hinh-seo",
      image: "",
    },
    {
      label: "Điều khoản dịch vụ",
      value: "/admin/bai-viet?tab=dieu-khoan-su-dung",
      image: "",
    },
    {
      label: "Quản Lý Đơn Hàng",
      value: "/admin/bao-cao?tab=don-hang",
      image: "",
    },
    {
      label: "Quản Lý Các Đối Tác",
      value: "/admin/tien-ich?tab=doi-tac",
      image: "",
    },
    {
      label: "Góp Ý Của Khách Hàng",
      value: "/admin/bao-cao?tab=Phan-hoi-cua-khach-hang",
      image: "",
    },
    {
      label: "Quản Lý Các Chi Nhánh",
      value: "",
      image: "",
    },
  ];
  return (
    <div>
      <div className="w-[1200px] mx-auto flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-[#FF9F1C] text-white rounded-md">
            <div className="p-3 grid grid-cols-5 gap-2 items-center">
              <div className="col-span-4 font-semibold">
                <h3 className="text-[40px] ">251</h3>
                <p className="text-[20px]">Tổng Số Sản Phẩm</p>
              </div>
              <div className="flex">
                <div
                  className="bg-[rgba(255,255,255,0.35)] p-2 text-[30px] rounded-full h-max
                "
                >
                  <CiBoxList />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4360F0] text-white rounded-md">
            <div className="p-3 grid grid-cols-5 gap-2 items-center">
              <div className="col-span-4 font-semibold">
                <h3 className="text-[40px] ">251</h3>
                <p className="text-[20px]">Tổng Số Tin Tức</p>
              </div>
              <div className="flex">
                <div
                  className="bg-[rgba(255,255,255,0.35)] p-2 text-[30px] rounded-full h-max
                "
                >
                  <GiNewspaper />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FF6A6B] text-white rounded-md">
            <div className="p-3 grid grid-cols-5 gap-2 items-center">
              <div className="col-span-4 font-semibold">
                <h3 className="text-[40px] ">251</h3>
                <p className="text-[20px]">Tổng Số Truy Cập </p>
              </div>
              <div className="flex">
                <div
                  className="bg-[rgba(255,255,255,0.35)] p-2 text-[30px] rounded-full h-max
                "
                >
                  <TbAccessPoint />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4DCDC4] text-white rounded-md">
            <div className="p-3 grid grid-cols-5 gap-2 items-center">
              <div className="col-span-4 font-semibold">
                <h3 className="text-[40px] ">251</h3>
                <p className="text-[18px]">Thông báo</p>
              </div>
              <div className="flex">
                <div
                  className="bg-[rgba(255,255,255,0.35)] p-2 text-[30px] rounded-full h-max
                "
                >
                  <IoIosNotifications />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          {FunctionItem.map((item: any, idx: number) => (
            <div key={idx}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
