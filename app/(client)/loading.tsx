"use client";

import {
  SkeletonShortIntro,
  SkeletonSlide,
} from "@components/items/client-items/Skeleton";

export default function Loading() {
  return (
    <div className="mt-[84px] ">
      <SkeletonSlide />
      <div className="w-[1200px] mx-auto mt-3">
        <SkeletonShortIntro />
      </div>
    </div>
  );
}
