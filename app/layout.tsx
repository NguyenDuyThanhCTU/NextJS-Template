// import Loading from "@components/items/client-items/Loading";
import Fetch from "@components/items/server-items/Fetch";
import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import "@styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <StateProvider>
          <DataProviders>
            <AuthProviders>
              <Fetch />
              {/* <Loading /> */}
              <>{children}</>
            </AuthProviders>
          </DataProviders>
        </StateProvider>
      </body>
    </html>
  );
}
