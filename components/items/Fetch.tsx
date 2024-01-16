"use client";

import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { find } from "@lib/api";
import React, { useEffect } from "react";

const Fetch: React.FC = () => {
  const { setConfigData } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    find("Config").then((data: any) => {
      setConfigData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Fetch;
