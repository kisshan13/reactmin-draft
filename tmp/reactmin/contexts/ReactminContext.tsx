import { createContext, useContext, useState } from "react";
import { ResourceProps, ResourceType } from "../types/types";
import type { QueryClient } from "react-query";

type ReactminContextType = {
  queryClient: QueryClient;
  bootstrapReactmin: (props: IReactminConfig) => void;
};

interface IReactminConfig {
  queryClient: QueryClient;
}

const ReactminContext = createContext<ReactminContextType>(
  {} as ReactminContextType
);

export function ReactminProvider({ children }: { children: React.ReactNode }) {
  const [reactmin, setReactmin] = useState<IReactminConfig>({} as any);

  function bootstrapReactmin(props: IReactminConfig) {
    setReactmin(props);
  }

  return (
    <ReactminContext.Provider value={{ ...reactmin, bootstrapReactmin }}>
      {children}
    </ReactminContext.Provider>
  );
}

export function useReactmin() {
  const reactmin = useContext(ReactminContext);

  if (reactmin === null) {
    throw new Error(
      "Must be used within <ResourceProvider></ResourceProvider>"
    );
  }

  return reactmin;
}
