import ConfigPage from "@components/admin/Config/ConfigPage";
import Notification from "@components/admin/Home/Notification";
import ReportCard from "@components/items/server-items/ReportCard";
import { find, findById, findOne } from "@lib/api";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { CiBoxList } from "react-icons/ci";
import { GiNewspaper } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { TbAccessPoint } from "react-icons/tb";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

const AdminHomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchValue = searchParams.tab;

  let componentToRender;

  switch (searchValue) {
    case "cau-hinh":
      const ConfigData = await find("Config");

      componentToRender = <ConfigPage Data={ConfigData} />;
      break;
    case "danh-sach-san-pham":
      // const Data = await findById("Config", "contact");

      // componentToRender = <ReportCard />;
      break;
    // additional cases as needed
    default:
      componentToRender = null; // or a default component
  }

  return <>{componentToRender}</>;
};

export default AdminHomePage;
