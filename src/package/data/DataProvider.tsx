import { createContext } from "react";
import { ReactChildren } from "../types";

const DataProviderContext = createContext({ queryKey: "" });

function DataProvider({
  children,
  queryKey,
}: {
  children: ReactChildren;
  queryKey: string;
}) {
  return (
    <DataProviderContext.Provider
      value={{ queryKey: queryKey }}
    ></DataProviderContext.Provider>
  );
}

export default DataProvider;
