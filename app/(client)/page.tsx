import { getData } from "@lib/get-data";
import React from "react";

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
