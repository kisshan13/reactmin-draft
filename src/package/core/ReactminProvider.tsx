import { createContext, useContext } from "react";
import type { Reactmin } from "../types";

export const ReactminContext = createContext<Reactmin>(null as any);

export function useReactmin() {
  const context = useContext(ReactminContext);

  if (!context) {
    throw new Error(
      "useReactmin() must be used within <ReactminContext.Provider> to avoid any context error"
    );
  }

  return context;
}
