"use client";
import React, { useEffect } from "react";
import InformationConfig from "./Section/InformationConfig";
import ContactConfig from "./Section/ContactConfig";
import SeoConfig from "./Section/SeoConfig";
import { useData } from "@context/DataProviders";

const ConfigPage = ({ Data }: any) => {
  const informationData = Data?.filter(
    (item: any) => item.id === "information"
  );
  const contactData = Data?.filter((item: any) => item.id === "contact");
  const SEOconfigData = Data?.filter((item: any) => item.id === "SEOconfig");
  return (
    <div>
      <InformationConfig Data={informationData ? informationData[0] : []} />
      <ContactConfig Data={contactData ? contactData[0] : []} />
      <SeoConfig Data={SEOconfigData ? SEOconfigData[0] : []} />
    </div>
  );
};

export default ConfigPage;
