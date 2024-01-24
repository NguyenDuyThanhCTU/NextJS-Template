import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import { find } from "@lib/api";
import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = async ({ children }: ClientLayoutProps) => {
  const ProductCategory = await find("ProductCategory");

  return (
    <div className="font-LexendDeca font-extralight d:text-[16px] p:text-[14px]">
      <Header ProductCategory={ProductCategory} />
      <div className="d:mt-[166px] p:mt-[120px]">{children}</div>
      <Footer />
      <OnTop />
      <Hotline />
      <Copyright />
    </div>
  );
};

export default ClientLayout;
