import HomeDisplayProduct from "@components/client/Home/HomeDisplayProduct";
import HomeSlide from "@components/client/Home/HomeSlide";
import ShortIntro from "@components/client/Home/ShortIntro";
import { find } from "@lib/api";

import React from "react";

import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const product = await find("Config");
  const Product = product.find((item: any) => item.id == "SEOconfig");
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Trang Chủ - ${Product.Title}`,
    description: Product.Description,
    keywords: Product.Keywords,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

const HomePage = async () => {
  const Data = await find("Products");
  const Slide = await find("Slides");
  return (
    <div>
      <HomeSlide Data={Slide} />
      <div className="d:w-[1100px] d:mx-auto p:w-auto p:mx-2">
        <ShortIntro />
      </div>
      <div className="bg-green-200 mt-2">
        <div className="p:mx-2 d:mx-10 py-5  ">
          <div className="bg-green-600 w-full text-white flex justify-center p:text-[20px] d:text-[30px] font-normal py-2">
            <div className=" w-max ">✨ SẢN PHẨM BÁN CHẠY NHẤT 🔥</div>
          </div>
          <div>
            {Data?.map((item: any, index: number) => (
              <div key={index}>
                <HomeDisplayProduct Data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
