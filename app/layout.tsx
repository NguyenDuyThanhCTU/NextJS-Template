import Fetch from "@components/items/Fetch";
import Loading from "@components/items/Loading";
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
            <Loading />
            <Fetch />
            <>{children}</>
          </DataProviders>
        </StateProvider>
      </body>
    </html>
  );
}
