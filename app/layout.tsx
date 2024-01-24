// import Loading from "@components/items/client-items/Loading";
import Loading from "@components/items/Loading";
import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import "@styles/global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { find } from "@lib/api";
import StorageProvider from "@components/items/StorageProvider";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Products = await find("Products");
  const Posts = await find("Posts");
  const Config = await find("Config");
  return (
    <html lang="vi">
      <body>
        <StateProvider>
          <DataProviders>
            <AuthProviders>
              <StorageProvider
                Products={Products}
                Posts={Posts}
                Config={Config}
              />

              <Loading />
              <>{children}</>
            </AuthProviders>
          </DataProviders>
        </StateProvider>
        {/* <GoogleAnalytics gaId="G-BCK49WKS44" /> */}
      </body>
    </html>
  );
}
