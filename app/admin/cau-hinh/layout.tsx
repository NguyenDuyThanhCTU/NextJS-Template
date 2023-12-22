import React from "react";

type AdminConfigLayoutProps = {
  children: React.ReactNode;
};

const AdminConfigLayout: React.FC<AdminConfigLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminConfigLayout;

