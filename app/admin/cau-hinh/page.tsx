import ContactConfig from "@components/admin/Config/ContactConfig";
import SeoConfig from "@components/admin/Config/SeoConfig";
import TrademarkConfig from "@components/admin/Config/TrademarkConfig";
import WebConfig from "@components/admin/Config/WebConfig";
import ProductList from "@components/admin/Product/ProductList";
import React from "react";

const AdminConfigPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.tab;
  return (
    <div>
      {searchParamsValue === "thong-tin-website" ? (
        <ProductList />
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

export default AdminConfigPage;
