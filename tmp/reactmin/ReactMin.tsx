import { QueryClient } from "react-query";
import AdminProvider from "./AdminProvider";
import { ReactminProvider } from "./contexts/ReactminContext";
import { ActminDataProvider } from "./types/types";

function Reactmin<T extends string>({
  children,
  dataProvider,
  queryClient,
}: {
  children: React.ReactNode[] | React.ReactNode;
  dataProvider: ActminDataProvider<T>;
  queryClient: QueryClient;
}) {
  return (
    <ReactminProvider>
      <AdminProvider dataProvider={dataProvider} queryClient={queryClient}>
        {children}
      </AdminProvider>
    </ReactminProvider>
  );
}

export default Reactmin;
