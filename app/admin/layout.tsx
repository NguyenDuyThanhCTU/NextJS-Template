"use client";
import Header from "@components/layout/admin-layout/Header";
import ClientLogin from "@components/login/ClientLogin";
import { ParticlesCustom } from "@components/login/Items/ParticlesCustom";
import { useAuth } from "@context/AuthProviders";

type ClientAdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<ClientAdminLayoutProps> = ({ children }) => {
  const { verify } = useAuth();

  return (
    <div className="font-LexendDeca font-extralight ">
      {verify ? (
        <>
          {" "}
          <Header />
          <div className="p:mt-[84px] d:mt-[64px] bg-slate-100 py-5  d:mx-auto p:mx-2 d:text-[16px] p:text-[14px]">
            {children}
          </div>
        </>
      ) : (
        <>
          {" "}
          <ParticlesCustom />
          <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
            <div className="d:w-[880px] p:w-[90vw] h-[529px] absolute  bg-white bottom-[25%] p:left-[5%] d:left-[30%] flex font-LexendDeca cursor-pointer rounded-sm -z-10">
              <ClientLogin />

              <div className="d:flex flex-1 p:hidden ">
                <div className="overflow-hidden h-full">
                  <img
                    src="https://vieclam24h.vn/img/loginv2/bg-register.png"
                    alt=""
                    className="object-contain "
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminLayout;
