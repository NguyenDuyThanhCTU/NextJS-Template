"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type StateContextType = {
  isLoading: number;
  setIsLoading: (loading: any) => void;
  Search: string;
  setSearch: (search: string) => void;
  OpenCart: boolean;
  setOpenCart: (openCart: boolean) => void;

  FormData: any;
  setFormData: (formData: any) => void;
};

export const StateContext = createContext<StateContextType>({
  isLoading: 0,
  setIsLoading: () => {},

  Search: "",
  setSearch: () => {},
  OpenCart: false,
  setOpenCart: () => {},

  FormData: {},
  setFormData: () => {},
});

export const StateProvider = ({ children }: Props) => {
  const [Search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(0);
  const [OpenCart, setOpenCart] = useState(false);

  //
  const [FormData, setFormData] = useState<any>({});
  return (
    <StateContext.Provider
      value={{
        FormData,
        setFormData,
        OpenCart,
        setOpenCart,
        isLoading,
        setIsLoading,
        Search,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
