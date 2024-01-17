import ConfigPage from "@components/admin/Config/ConfigPage";
import PostCategory from "@components/admin/Posts/Category";
import Posts from "@components/admin/Posts/Posts";
import PostPolicy from "@components/admin/Posts/Policy";
import PostIntroductory from "@components/admin/Posts/Introductory";
import ProductCategory from "@components/admin/Product/ProductCategory";
import AdminProductList from "@components/admin/Product/ProductList";
import { find, findById, findOne } from "@lib/api";
import { Metadata } from "next";

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
      componentToRender = <AdminProductList />;
      break;
    case "danh-muc-san-pham":
      const Type = await find("ProductCategory");
      componentToRender = <ProductCategory Data={Type} />;
      break;
    case "danh-sach-bai-viet":
      const CategoryData = await find("PostCategory");
      const PostData = await find("Posts");
      componentToRender = (
        <Posts
          Data={PostData ? PostData : []}
          Category={CategoryData ? CategoryData : []}
        />
      );
      break;
    case "danh-muc-bai-viet":
      const Category = await find("PostCategory");
      componentToRender = <PostCategory Data={Category ? Category : []} />;
      break;
    case "dieu-khoan-su-dung":
      const Policy: any = await find("Posts");

      componentToRender = <PostPolicy Data={Policy ? Policy : {}} />;
      break;
    case "bai-gioi-thieu":
      const Introductory: any = await findById("Posts", "introductory");
      componentToRender = (
        <PostIntroductory
          Data={
            Introductory !== undefined ? Introductory : { createdAt: undefined }
          }
        />
      );
      break;

    default:
      componentToRender = null;
  }

  return <>{componentToRender}</>;
};

export default AdminHomePage;
