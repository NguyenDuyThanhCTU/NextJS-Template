import ContactConfig from "@components/admin/Config/ContactConfig";
import SeoConfig from "@components/admin/Config/SeoConfig";
import TrademarkConfig from "@components/admin/Config/TrademarkConfig";
import WebConfig from "@components/admin/Config/WebConfig";
import AdminProductList from "@components/admin/Product/ProductList";
import React from "react";

const AdminProductPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.tab;
  return (
    <div>
      {searchParamsValue === "danh-sach-san-pham" ? (
        <AdminProductList />
      ) : searchParamsValue === "thuong-hieu-website" ? (
        <TrademarkConfig />
      ) : searchParamsValue === "lien-he" ? (
        <ContactConfig />
      ) : searchParamsValue === "cau-hinh-seo" ? (
        <SeoConfig />
      ) : null}
    </div>
  );
};

export default AdminProductPage;
