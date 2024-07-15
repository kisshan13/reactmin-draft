import type { QueryClient } from "react-query";
import { useReactmin } from "../contexts/ReactminContext";
import React, { useEffect } from "react";
import type { ReactminData } from "../types/types";
import resourceExtractor from "../utils/resource-extractor";

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

  console.log(resourceExtractor(children));

  return <></>;
}

export default AdminProvider;
