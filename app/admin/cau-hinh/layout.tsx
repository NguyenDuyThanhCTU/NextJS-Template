import React from "react";

type ConfigLayoutProps = {
  children: React.ReactNode;
};

const AdminConfigLayout: React.FC<ConfigLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminConfigLayout;
