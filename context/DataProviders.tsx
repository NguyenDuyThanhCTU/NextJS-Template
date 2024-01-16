"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type DataContextType = {
  ConfigData: Array<any>;
  setConfigData: (configData: Array<any>) => void;
};

export const DataContext = createContext<DataContextType>({
  ConfigData: [],
  setConfigData: () => {},
});

export const DataProviders: React.FC<Props> = ({ children }) => {
  const [ConfigData, setConfigData] = useState<any>([]);

  return (
    <DataContext.Provider
      value={{
        ConfigData,
        setConfigData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
