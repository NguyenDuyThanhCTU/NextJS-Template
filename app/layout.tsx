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
            <>{children}</>
          </DataProviders>
        </StateProvider>
      </body>
    </html>
  );
}
