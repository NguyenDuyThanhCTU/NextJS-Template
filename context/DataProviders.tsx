"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type DataContextType = {
  currentUser: any;
  setCurrentUser: (user: any) => void;
};

export const DataContext = createContext<DataContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const DataProviders: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  return (
    <DataContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
