import { createContext, useContext } from "react";
import { DataAPI } from "../types";

export const ApiContext = createContext<DataAPI>({} as any);

export function useApi() {
  const api = useContext(ApiContext);

  if (!api) {
    throw new Error(
      "useDataApi can only be accessed within <DataAPI> Component. "
    );
  }

  return api;
}
