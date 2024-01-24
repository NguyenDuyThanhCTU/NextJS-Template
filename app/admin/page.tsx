import ConfigPage from "@components/admin/Config/ConfigPage";
import PostCategory from "@components/admin/Posts/Category";
import Posts from "@components/admin/Posts/Posts";
import PostPolicy from "@components/admin/Posts/Policy";
import PostIntroductory from "@components/admin/Posts/Introductory";
import ProductCategory from "@components/admin/Product/ProductCategory";
import AdminProductList from "@components/admin/Product/ProductList";
import { find, findById, findOne } from "@lib/api";
import { Metadata } from "next";
import AdminPage from "@components/admin/AdminPage";
import SocialMedia from "@components/admin/Comunity/SocialMedia/SocialMedia";
import Slide from "@components/admin/Comunity/Slide/Slide";
import Plugins from "@components/admin/Plugins/Plugins";

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
    case undefined:
      componentToRender = <AdminPage />;

      break;
    case "cau-hinh":
      const ConfigData = await find("Config");
      componentToRender = <ConfigPage Data={ConfigData} />;
      break;
    case "danh-sach-san-pham":
      const ProductCategoryTag = await find("ProductCategory");

      componentToRender = <AdminProductList Category={ProductCategoryTag} />;
      break;
    case "danh-muc-san-pham":
      const Type = await find("ProductCategory");
      componentToRender = <ProductCategory Data={Type} />;
      break;
    case "danh-sach-bai-viet":
      const CategoryData = await find("PostCategory");

      componentToRender = <Posts Category={CategoryData ? CategoryData : []} />;
      break;
    case "danh-muc-bai-viet":
      const Category = await find("PostCategory");
      componentToRender = <PostCategory Data={Category ? Category : []} />;
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
    case "slide-gioi-thieu":
      const SlideData = await find("Slides");
      componentToRender = <Slide Data={SlideData} />;
      break;
    case "kenh-truyen-thong":
      const SocialMediaData = await findById("Config", "SocialMedia");
      componentToRender = <SocialMedia Data={SocialMediaData} />;
      break;
    case "doi-tac":
      const PartnerData = await find("Partner");
      componentToRender = <Plugins Data={PartnerData} />;
      break;

    default:
      componentToRender = null;
  }

  return <>{componentToRender}</>;
};

export default AdminHomePage;
