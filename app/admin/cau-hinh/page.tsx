import ContactConfig from "@components/admin/Config/ContactConfig";
import InformationConfig from "@components/admin/Config/InformationConfig";
import SeoConfig from "@components/admin/Config/SeoConfig";
import { getData } from "@lib/Get";

import React from "react";

const AdminConfigPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.tab;
  let Data = await getData("Config");

  let informationData: any = Data?.filter(
    (item: any) => item.id === "information"
  );

  let contactData: any = Data?.filter((item: any) => item.id === "contact");
  let SEOconfigData: any = Data?.filter((item: any) => item.id === "SEOconfig");

  return (
    <div>
      <InformationConfig Data={informationData ? informationData[0] : []} />
      <ContactConfig Data={contactData ? contactData[0] : []} />
      <SeoConfig Data={SEOconfigData ? SEOconfigData[0] : []} />
    </div>
  );
};

export default AdminConfigPage;
