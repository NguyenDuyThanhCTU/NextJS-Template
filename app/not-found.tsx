import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <div className="py-10 font-LexendDeca font-extralight">
        <div className=" relative h-[500px] ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/adminads-11c80.appspot.com/o/config%2F404.jpg?alt=media&token=b4374457-bcfa-4a7d-9ae0-556fe7fd9ccc"
            alt="404 Not Found"
            fill
            sizes="(min-width: 808px) 50vw , 100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <div className="text-center p:text-[14px] d:text-[16px]">
            <p>We're sorry the page you requested was not found</p>
            <p>Please go back to the homepage!</p>
          </div>
          <div className="flex w-full justify-center mt-5">
            <div className="flex gap-5  cursor-pointer text-white d:text-[16px] p:text-[14px]">
              <Link
                href={`/lien-he`}
                className="py-2 px-4 rounded-full bg-gray-400  duration-300 hover:bg-gray-600"
              >
                Báo lỗi
              </Link>
              <Link
                href={`/`}
                className="py-2 px-4 rounded-full bg-green-600 duration-300 hover:bg-green-800"
              >
                Về Trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
