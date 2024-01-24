"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Notification from "./Home/Notification";
import ReportCard from "@components/items/server-items/ReportCard";
import { useAuth } from "@context/AuthProviders";
import { ParticlesCustom } from "@components/login/Items/ParticlesCustom";
import ClientLogin from "@components/login/ClientLogin";
import { useData } from "@context/DataProviders";
import Link from "next/link";

const AdminPage = () => {
  const { Products, Posts } = useData();
  const FunctionItem = [
    {
      label: "Hướng dẫn quản trị",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/book.png?alt=media&token=08690163-3f6a-40b4-a6af-23d266c2efbf",
    },
    {
      label: "Cấu Hình Chung",
      value: "/admin/?tab=cau-hinh",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/settings.png?alt=media&token=a8a90b1f-9e60-4e7c-a85c-cc282bb6031d",
    },
    {
      label: "Tối Ưu SEO",
      value: "/admin/?tab=cau-hinh",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/search-engine-optimization.png?alt=media&token=7076503f-c260-4090-8a74-2339d9b0fb3c",
    },
    {
      label: "Quản Lý Danh Mục Bài Viết",
      value: "/admin/?tab=danh-muc-bai-viet",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/app.png?alt=media&token=5366ef4b-af86-404a-a02c-67206b174ee8",
    },
    {
      label: "Quản Lý Danh Sách Bài Viết",
      value: "/admin/?tab=danh-sach-bai-viet",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/categories.png?alt=media&token=3ec19f87-15f3-4a8f-97aa-fa1d3f06ad2c",
    },
    {
      label: "Kênh Truyền Thông",
      value: "/admin/?tab=kenh-truyen-thong",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/social-media.png?alt=media&token=16b9f3a4-6035-4d4e-839b-c2a6f8f46dfc",
    },
    {
      label: "Quản Lý Tài Khoản",
      value: "/admin/?tab=tai-khoan",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/working.png?alt=media&token=b57dc690-c7ab-4073-96bb-b3c09858a7bc",
    },
    {
      label: "Quản Lý Các Slide Giới Thiệu",
      value: "/admin/?tab=slide-gioi-thieu",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/slide-show.png?alt=media&token=87d64e17-1a28-4116-9daf-b96ce9f558c5",
    },
    {
      label: "Tối Ưu SEO Sản Phẩm",
      value: "/admin/?tab=danh-sach-san-pham",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/seo.png?alt=media&token=41afe929-186a-441b-a0d3-6eb6e84a04eb",
    },
    {
      label: "Tối Ưu SEO Bài Viết",
      value: "/admin/?tab=danh-sach-bai-viet",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/seo(1).png?alt=media&token=8890b74b-ee28-4ea9-bf9d-21acd1686c00",
    },
    {
      label: "Điều khoản dịch vụ",
      value: "/admin/?tab=danh-muc-bai-viet",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/privacy-policy.png?alt=media&token=9c6b5ac6-632e-4b86-bf0d-b137314973c7",
    },
    {
      label: "Quản Lý Đơn Hàng",
      value: "/admin/?tab=bao-cao",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/bill.png?alt=media&token=94493a65-4184-4fec-96bf-ccb3ade49c0b",
    },
    {
      label: "Quản Lý Các Đối Tác",
      value: "/admin/?tab=doi-tac",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/partner.png?alt=media&token=4e0f99cb-23c4-462d-a9ab-320575fe2583",
    },
    {
      label: "Góp Ý Của Khách Hàng",
      value: "/admin/?tab=bao-cao",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/satisfaction.png?alt=media&token=99138c99-0f77-48b1-96a2-bc8a1d45e5aa",
    },
    {
      label: "Quản Lý Các Chi Nhánh",
      value: "/admin/?tab=chi-nhanh",
      image:
        "https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/branch.png?alt=media&token=86a20ee2-6e06-4e7d-84fb-412f89177ca0",
    },
  ];

  return (
    <div className="d:w-[1200px] p:mx-auto mx-auto flex flex-col gap-5">
      <div className="grid p:grid-cols-2 d:grid-cols-4 gap-3">
        <ReportCard Label="Tổng Số Sản Phẩm" Value={Products?.length} />
        <ReportCard Label="Tổng Số Tin Tức" Value={Posts?.length} />
        <ReportCard Label="Tổng Số Truy Cập" />
        <ReportCard Label="Tổng Số Thông Báo" />
      </div>
      <div className="py-5 grid p:grid-cols-1 d:grid-cols-8 p:gap-0 d:gap-10 ">
        <div className=" d:col-span-2">
          <Notification />
        </div>
        <div className="grid p:grid-cols-2 d:grid-cols-4 gap-5 w-full col-span-6">
          {FunctionItem.map((item: any, idx: number) => (
            <Link key={idx} href={item.value}>
              <div className="grid grid-rows-3  justify-center p-2 items-center gap-2 border cursor-pointer hover:bg-[#F2F2F2] duration-300 h-[196px]">
                <div className="row-span-2 h-full w-full justify-center items-center flex">
                  <div className="h-[80px] w-[80px] relative  ">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className="text-center font-light text-[18px]">
                  {item.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
