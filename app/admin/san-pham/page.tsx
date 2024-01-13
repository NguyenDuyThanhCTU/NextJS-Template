import ContactConfig from "@components/admin/Config/ContactConfig";
import SeoConfig from "@components/admin/Config/SeoConfig";
import ProductCategory from "@components/admin/Product/ProductCategory";
import AdminProductList from "@components/admin/Product/ProductList";
import { getData } from "@lib/Get";
import React from "react";

const AdminProductPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.tab;
  let ProductTypes = await getData("ProductTypes");

  let Type = ProductTypes?.filter((item: any) => item.type === "type");
  let TopicType = ProductTypes?.filter((item: any) => item.type === "topic");

  return (
    <div>
      {searchParamsValue === "danh-sach-san-pham" ? (
        <AdminProductList />
      ) : searchParamsValue === "danh-muc-san-pham" ? (
        <ProductCategory
          Type={Type ? Type : []}
          Topic={TopicType ? TopicType : []}
        />
      ) : searchParamsValue === "cau-hinh-seo" ? (
        <SeoConfig />
      ) : null}
    </div>
  );
};

export default AdminProductPage;
