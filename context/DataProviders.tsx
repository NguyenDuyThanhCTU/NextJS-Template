"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type DataContextType = {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  Accounts: any;
  setAccounts: (user: any) => void;
  Products: any;
  setProducts: (user: any) => void;
  Posts: any;
  setPosts: (user: any) => void;
  Config: any;
  setConfig: (user: any) => void;
  CartItems: any;
  setCartItems: (user: any) => void;
  Bill: any;
  setBill: (user: any) => void;
};

export const DataContext = createContext<DataContextType>({
  currentUser: null,
  setCurrentUser: () => {},
  Accounts: null,
  setAccounts: () => {},
  Products: null,
  setProducts: () => {},
  Posts: null,
  setPosts: () => {},
  Config: null,
  setConfig: () => {},
  CartItems: null,
  setCartItems: () => {},
  Bill: null,
  setBill: () => {},
});

export const DataProviders: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [Accounts, setAccounts] = useState<any>();
  const [Products, setProducts] = useState<any>();
  const [Posts, setPosts] = useState<any>();
  const [Config, setConfig] = useState<any>();
  const [CartItems, setCartItems] = useState<any>([]);
  const [Bill, setBill] = useState<any>([]);
  return (
    <DataContext.Provider
      value={{
        CartItems,
        setCartItems,
        Bill,
        setBill,
        Config,
        setConfig,
        Products,
        setProducts,
        Posts,
        setPosts,
        Accounts,
        setAccounts,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
