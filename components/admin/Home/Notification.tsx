"use client";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { WebsiteUrl } from "@assets/item";

const Notification = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-full ">
        <div className="flex items-center justify-between border-b border-black cursor-pointer">
          <h2 className="border-b-2 py-2  border-blue-600 font-semibold text-[18px] text-mainorange hover:border-blue-800  duration-300 ">
            Thông tin website
          </h2>
          <div className="flex items-center ">
            <div className=" p-2 hover:bg-adminOrange hover:text-white duration-300">
              <FaAngleLeft />
            </div>
            <div className=" p-2 hover:bg-adminOrange hover:text-white duration-300">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div>
          <div>Thông tin hosting: {WebsiteUrl}</div>
          <div>Ngày khởi tạo: 22-12-2023</div>
          <div>Ngày kết thúc: 22-12-2024</div>
        </div>
      </div>

      <div className="w-full pb-10">
        <div className="flex items-center justify-between border-b border-black cursor-pointer">
          <h2 className="border-b-2 py-2  border-mainorange font-semibold text-[18px] text-mainorange hover:border-maingreen hover:text-maingreen duration-300 ">
            Thông báo mới nhất
          </h2>
        </div>
        <div className="border mt-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div>
              {/* {Posts.map((item: any, idx: number) => {
            const content = item?.content;
            const maxLength = 150;

            const truncatedContent = content
              ? content.substring(0, maxLength)
              : "";

            const markup = { __html: truncatedContent };
            const DetailPostDate = moment
              .unix(item.createdAt.seconds)
              .format("MMMM DD, YYYY");
            return (
              <SwiperSlide key={idx}>
                <Link
                  href={`/bai-viet/${item.topicurl}`}
                  className="cursor-pointer  "
                >
                  <div className="h-[145px] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt="post"
                      className="object-contain h-full w-full hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="py-2 px-3 mt-2">
                    <div className="font-semibold  ">{item.topic}</div>
                    <div className="flex py-1 flex-col">
                      <div className="flex items-center gap-1 text-gray-400 text-[14px]">
                        <AiOutlineUser />
                        <p className="">RunTech+</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 pr-5 text-[14px]">
                        <AiOutlineClockCircle />
                        <p className="">{DetailPostDate}</p>
                      </div>
                
                    </div>
                    <div
                      dangerouslySetInnerHTML={markup}
                      className="text-[15px] truncate3"
                    ></div>
                    <div className="text-redPrimmary  font-normal hover:scale-105 duration-300  cursor-pointer">
                      [Đọc tiếp...]
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })} */}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Notification;
