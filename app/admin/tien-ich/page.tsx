import Branch from "@components/admin/Plugins/Branch";
import Partner from "@components/admin/Plugins/Partner";
import React from "react";

const PluginPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return <div>{searchParams.tab === "doi-tac" ? <Partner /> : <Branch />}</div>;
};

export default PluginPage;
