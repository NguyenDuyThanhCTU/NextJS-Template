"use client";

import Header from "@components/layout/admin-layout/Header";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />
      <div className="mt-[64px] py-5">{children}</div>
    </div>
  );
};

export default layout;
