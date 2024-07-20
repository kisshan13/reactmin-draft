import { createContext, useContext } from "react";
import { DataAPI } from "../types";

{
  findOne: (resource: string, data: any) => {};
  find: (resource: string, data: any) => {};
  del: (resource: string, data: any) => {};
  update: (resource: string, data: any) => {};
}

const DataContext = createContext<DataAPI>({} as any);

export function useDataApi() {
  const api = useContext(DataContext);

  if (!api) {
    throw new Error(
      "useDataApi can only be accessed within <DataAPI> Component. "
    );
  }

  return api;
}

export function useAPI() {
  const dataApi = useDataApi();

  return dataApi.custom;
}
