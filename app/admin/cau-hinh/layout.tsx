import React from "react";

type AdminConfigPageProps = {
  children: React.ReactNode;
};

const AdminConfigPage: React.FC<AdminConfigPageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminConfigPage;
