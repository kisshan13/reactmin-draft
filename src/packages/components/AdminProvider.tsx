import type { QueryClient } from "react-query";
import { useReactmin } from "../contexts/ReactminContext";
import React, { memo, useEffect, useMemo } from "react";
import type { ReactminData } from "../types/types";
import Layout from "../../reactmin/components/layouts/Layout";
import Router from "./Router";

interface IAdminProvider {
  queryClient: QueryClient;
  data: ReactminData;
  layout?: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
}

function AdminProvider({ queryClient, layout, children }: IAdminProvider) {
  const { bootstrap } = useReactmin();

  useEffect(() => {
    bootstrap({ queryClient });
  }, [queryClient]);

  return (
    <>
      <Router layout={layout || <Layout />}>{children}</Router>
    </>
  );
}

export default memo(AdminProvider);
