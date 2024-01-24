"use client";
import { IconMapping, SocialMediaDashboard } from "@assets/item";
import { useData } from "@context/DataProviders";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  const { Config } = useData();
  return (
    <div className="bg-green-50">
      <div className="d:w-[1440px]  p:w-auto d:mx-auto p:mx-2 py-10  font-LexendDeca font-extralight ">
        <div className="grid p:grid-cols-2 d:grid-cols-6 gap-4 ">
          <div className="col-span-2 ">
            <Link href={`/`}>
              <Image
                src={
                  Config?.find((item: any) => item.id === "contact").LogoWebsite
                }
                alt="logo"
                width={400}
                height={200}
                sizes="(min-width: 808px) 30vw , 50vw"
              />
            </Link>
            <h2 className="text-[18px] font-normal  mt-5">
              Ken EBIKE - Cửa hàng xe điện uy tín tại Cần Thơ
            </h2>
            <div className="mt-4 flex flex-col text-[15px]">
              <p>
                Ken EBIKE - Chuyên các dòng xe đạp điện, xe máy điện chính hãng,
                chất lượng cao, uy tín số 1 tại Cần Thơ
              </p>

              <Image
                src="https://firebasestorage.googleapis.com/v0/b/xedapdiencantho.appspot.com/o/logo_bct_019590229b4c4dfda690236b67f7aff4.webp?alt=media&token=4aa6eecc-7a39-46ca-bf8f-d5e35e8ff904"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="col-span-2">
            <h2 className="text-[18px] font-normal ">Thông tin liên hệ</h2>
            <div className="mt-5 flex flex-col gap-2 text-[14px]">
              <div className=" flex gap-3">
                <div className="flex mt-1">
                  <IoLocation className="" />
                </div>
                <div className="hover:underline hover:text-blue-500 cursor-pointer">
                  {
                    Config?.find((item: any) => item.id === "contact")
                      .CompanyAddress
                  }
                </div>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:underline ">
                <GiRotaryPhone />
                {Config?.find((item: any) => item.id === "contact").Hotline}
              </div>
              <div className="flex items-center gap-3">
                <BiLogoTelegram />
                <div className="hover:underline cursor-pointer">
                  {Config?.find((item: any) => item.id === "contact").Email}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex mt-2 gap-5">
                {SocialMediaDashboard.map((items: any, idx: number) => {
                  let Icon = IconMapping[items.icon];
                  let Point = Config?.find(
                    (item: any) => item.id === "SocialMedia"
                  )?.[items.field];

                  return (
                    <>
                      {Point !== undefined && (
                        <Link
                          href={Point}
                          key={idx}
                          className={`text-[20px] cursor-pointer  p-1  hover:scale-125 duration-300`}
                        >
                          {Icon && (
                            <div>
                              <Icon />
                            </div>
                          )}
                        </Link>
                      )}{" "}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-[18px] font-normal ">Fanpage</h2>
            <div className="h-52 overflow-hidden mt-4">
              <iframe
                src={
                  Config?.find((item: any) => item.id === "SocialMedia").fanpage
                }
                width="600"
                height="600"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
