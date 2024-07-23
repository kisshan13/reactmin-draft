import { useMemo } from "react";
import type { DataAPI, ReactChildren } from "../types";
import ApiManager from "./manager";
import { ApiContext } from "./useApi";

function ApiProvider({
  managers,
  children,
}: {
  managers?: ApiManager[];
  children: ReactChildren;
}) {
  if (!Array.isArray(managers) && import.meta.env.DEV) {
    console.warn("No API Manager founds.");
    return <>{children}</>;
  }

  function getManagerForMethods(
    resource: string,
    data: any,
    operation: string
  ) {
    const manager = managers.find((manager) =>
      manager.getResourceApi(resource, operation as any)
    );

    if (!manager) {
      console.warn(
        `No api manager found for resource ${resource} [operation type : ${operation}] `
      );
      return;
    }

    const methods = manager.getResourceApi(resource, operation as any);

    if (methods) {
      return methods(data);
    }
  }

  const dataApi: DataAPI = useMemo(() => {
    return {
      findOne: async (resource, data) =>
        getManagerForMethods(resource, data, "findOne"),
      find: async (resource, data) =>
        getManagerForMethods(resource, data, "find"),
      create: async (resource, data) =>
        getManagerForMethods(resource, data, "create"),
      update: async (resource, data) =>
        getManagerForMethods(resource, data, "update"),
      del: async (resource, data) =>
        getManagerForMethods(resource, data, "del"),
    };
  }, [managers]);

  return <ApiContext.Provider value={dataApi}>{children}</ApiContext.Provider>;
}

export default ApiProvider;
