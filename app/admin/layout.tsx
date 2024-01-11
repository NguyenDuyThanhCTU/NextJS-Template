import Header from "@components/layout/admin-layout/Header";

type ClientAdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<ClientAdminLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight ">
      <Header />
      <div className="mt-[64px] bg-slate-100 py-5 ">{children}</div>
    </div>
  );
};

export default AdminLayout;
