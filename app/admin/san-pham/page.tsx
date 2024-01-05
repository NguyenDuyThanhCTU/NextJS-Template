import ContactConfig from "@components/admin/Config/ContactConfig";
import SeoConfig from "@components/admin/Config/SeoConfig";
import AdminProductList from "@components/admin/Product/ProductList";
import { getAllDataProps } from "@lib/get-data";
import React from "react";

const AdminProductPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.tab;
  let Data = await getAllDataProps("Config");
  let informationData: any = [];
  let contactData: any = [];
  let SEOconfigData: any = [];
  if (searchParamsValue === "thong-tin-website") {
    informationData = Data.filter((item: any) => item.id === "information");
  }
  if (searchParamsValue === "lien-he") {
    contactData = Data.filter((item: any) => item.id === "contact");
  }
  if (searchParamsValue === "cau-hinh-seo") {
    SEOconfigData = Data.filter((item: any) => item.id === "SEOconfig");
  }
  return (
    <div>
      {searchParamsValue === "danh-sach-san-pham" ? (
        <AdminProductList />
      ) : searchParamsValue === "lien-he" ? (
        <ContactConfig />
      ) : searchParamsValue === "cau-hinh-seo" ? (
        <SeoConfig />
      ) : null}
    </div>
  );
};

export default AdminProductPage;
