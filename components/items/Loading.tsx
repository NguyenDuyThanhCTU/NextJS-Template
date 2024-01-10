"use client";
import React, { useEffect } from "react";
import { Spin } from "antd";
import { useStateProvider } from "@context/StateProvider";

const Loading: React.FC = () => {
  const { setIsLoading, isLoading } = useStateProvider();
  const [spinning, setSpinning] = React.useState<boolean>(false);

  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, isLoading);
    setIsLoading(0);
  };

  useEffect(() => {
    if (isLoading !== 0) {
      showLoader();
    }
  }, [isLoading]);

  return (
    <>
      <Spin spinning={spinning} fullscreen />
    </>
  );
};

export default Loading;
