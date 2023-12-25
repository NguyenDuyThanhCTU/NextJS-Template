import React from "react";

type ProductLayoutProps = {
  children: React.ReactNode;
};

const AdminProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminProductLayout;
