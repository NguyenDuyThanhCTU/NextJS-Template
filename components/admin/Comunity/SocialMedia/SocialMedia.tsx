"use client";
import React, { useState } from "react";

import {
  IconMapping,
  SocialMediaDashboard,
  ToolsTipsSocialMediaItems,
} from "@assets/item";
import { updateOne } from "@lib/api";
import Card from "./Card";
import { useRouter } from "next/navigation";

const SocialMedia = ({ Data }: any) => {
  const [isSelected, setSelected] = useState<number | undefined>();
  const [isChange, setChange] = useState<string>("");
  const router = useRouter();
  const HandleUpdate = (idx: number) => {
    const Data = {
      [SocialMediaDashboard[idx]?.field]: isChange,
    };

    updateOne("Config", "SocialMedia", Data).then(() => {
      router.refresh();
      setChange("");
    });
  };

  return (
    <div className="w-full ">
      <div className=" rounded-md border-gray-500 ">
        <div className="border mx-5">
          <h3 className="p-5 shadow-lg rounded-t-md text-[25px]">
            Các kênh truyền thông
          </h3>
        </div>
        <div className="p-5 grid d:grid-cols-4 gap-10 p:grid-cols-1  mt-5 ">
          {SocialMediaDashboard.map((items, idx) => {
            let Icon = IconMapping[items.icon];
            const SocialMediaItems = Data[items.field];
            const ToolsTips = ToolsTipsSocialMediaItems[idx];
            return (
              <Card
                key={idx}
                ToolsTips={ToolsTips.title}
                placeholder={SocialMediaItems}
                title={items.title}
                Icon={Icon}
                image={items.image}
                style={items.style}
                setSelected={setSelected}
                idx={idx}
                setChange={setChange}
                isSelected={isSelected}
                HandleUpdate={HandleUpdate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
