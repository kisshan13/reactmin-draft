import React, { useEffect, useMemo } from "react";
import { getResourceProps } from "./utils/utils";
import RouteMin from "./router/Router";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import type { ActminDataProvider } from "./types/types";

function AdminProvider<T extends string>({
  children,
  dataProvider,
}: {
  children: React.ReactNode[] | React.ReactNode;
  dataProvider: ActminDataProvider<T>;
}) {
  const config = useMemo(() => {
    return getResourceProps({ children });
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
      <ThemeProvider defaultTheme="dark">
        <RouteMin props={config} />
      </ThemeProvider>
    </>
  );
}

export default AdminProvider;
