// import Copyright from "@components/layout/client-layout/Copyright";
// import Footer from "@components/layout/client-layout/Footer";
// import Header from "@components/layout/client-layout/Header";
// import Hotline from "@components/layout/client-layout/Hotline";
// import OnTop from "@components/layout/client-layout/OnTop";
// import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight">
      {children}
      {/* <Header />
      <div className="mt-[78px] ">{children}</div>
      <OnTop />
      <Hotline />
      <div className="bg-gray-200">
        <Footer />
      </div>
      <Copyright /> */}
    </div>
  );
};

export default layout;
