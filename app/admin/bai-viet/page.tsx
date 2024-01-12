import Posts from "@components/admin/Posts/Posts";
import PostPolicy from "@components/admin/Posts/Posts.Policy";
import PostCategory from "@components/admin/Posts/Posts.category";
import PostIntroductory from "@components/admin/Posts/Posts.introductory";
import { getData } from "@lib/get-data";
import React from "react";

const PostPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.tab;
  const CategoryData = await getData("PostCategory");

  return (
    <div className="">
      {searchParamsValue === "danh-sach-bai-viet" ? (
        <Posts />
      ) : searchParamsValue === "danh-muc-bai-viet" ? (
        <PostCategory Data={CategoryData ? CategoryData : []} />
      ) : searchParamsValue === "dieu-khoan-su-dung" ? (
        <PostPolicy />
      ) : searchParamsValue === "bai-gioi-thieu" ? (
        <PostIntroductory />
      ) : null}
    </div>
  );
};

export default PostPage;
