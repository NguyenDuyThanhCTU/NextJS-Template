import PostCategory from "@components/admin/Posts/Category";
import Posts from "@components/admin/Posts/Posts";
import PostPolicy from "@components/admin/Posts/Posts.Policy";
import PostIntroductory from "@components/admin/Posts/Posts.introductory";
import { getDataProps } from "@lib/ApiLib";

import React from "react";

const PostPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.tab;
  const CategoryData = await getDataProps("PostCategory");
  const PostData = await getDataProps("Posts");
  return (
    <div className="">
      {searchParamsValue === "danh-sach-bai-viet" ? (
        <Posts
          Data={PostData ? PostData : []}
          Category={CategoryData ? CategoryData : []}
        />
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
