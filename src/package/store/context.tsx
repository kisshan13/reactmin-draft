import { ResourceStore, useStore } from "./store";
import type { ReactChildren } from "../types";

function ResourceProvider({ children }: { children: ReactChildren }) {
  return (
    <ResourceStore.Provider value={useStore()}>
      {children}
    </ResourceStore.Provider>
  );
}

export default ResourceProvider;
