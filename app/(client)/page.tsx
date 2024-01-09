import { getData } from "@lib/get-data";
import React from "react";

import type { Metadata, ResolvingMetadata } from "next";

// export async function generateMetadata(
//   parent: ResolvingMetadata
// ): Promise<Metadata> {

//   const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

const HomePage = async () => {
  const Data1 = await getData("Config", "information");
  console.log(Data1);
  return (
    <div>
      <h1>HomePage</h1>
      <p>{Data1?.NotFoundNavigate}</p>
    </div>
  );
};

export default HomePage;
