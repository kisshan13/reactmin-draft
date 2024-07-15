import React, { useEffect, useMemo } from "react";
import { getResourceProps } from "./utils/utils";
import RouteMin from "./router/Router";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import type {
  ActminDataProvider,
  ResourceProps,
  ResourceType,
} from "./types/types";
import { QueryClient, QueryClientProvider } from "react-query";
import queryClient from "./QueryProvider";
import { ReactminProvider } from "./contexts/ReactminContext";

function AdminProvider<T extends string>({
  children,
  dataProvider,
  queryClient,
}: {
  children: React.ReactNode[] | React.ReactNode;
  dataProvider: ActminDataProvider<T>;
  queryClient: QueryClient;
}) {
  const config = useMemo(() => {
    return getResourceProps<ResourceType<ResourceProps>[]>({ children });
  }, [children]);

  if (!config) {
    return;
  }

  useEffect(() => {
    if (dataProvider) {
      document.title = dataProvider.title;
    }
  }, [dataProvider]);

  console.log(config);

  return (
    <>
      <ReactminProvider>
        <ThemeProvider defaultTheme="dark">
          <RouteMin props={config} queryClient={queryClient} />
        </ThemeProvider>
      </ReactminProvider>
    </>
  );
}

export default AdminProvider;
