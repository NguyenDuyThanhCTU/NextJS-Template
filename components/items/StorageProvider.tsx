"use client";
import { useData } from "@context/DataProviders";
import React, { useEffect } from "react";

const StorageProvider = ({ Products, Posts, Config }: any) => {
  const { setProducts, setPosts, setConfig } = useData();

  useEffect(() => {
    setProducts(Products);
  }, [Products]);

  useEffect(() => {
    setPosts(Posts);
  }, [Posts]);

  useEffect(() => {
    setConfig(Config);
  }, [Config]);

  return <div></div>;
};

export default StorageProvider;
