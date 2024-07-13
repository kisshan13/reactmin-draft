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

function AdminProvider<T extends string>({
  children,
  dataProvider,
}: {
  children: React.ReactNode[] | React.ReactNode;
  dataProvider: ActminDataProvider<T>;
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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark">
          <RouteMin props={config} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default AdminProvider;
