import { createContext, useContext, useState } from "react";
import type { IReactminConfig, ReactminContextType } from "../types/types";

const ReactminContext = createContext<ReactminContextType>(
  {} as ReactminContextType
);

export function ReactminProvider({ children }: { children: React.ReactNode }) {
  const [reactmin, setReactmin] = useState<IReactminConfig>({} as any);

  function bootstrap(props: IReactminConfig) {
    setReactmin(props);
  }

  return (
    <ReactminContext.Provider value={{ ...reactmin, bootstrap }}>
      {children}
    </ReactminContext.Provider>
  );
}

export function useReactmin() {
  const reactmin = useContext(ReactminContext);

  if (reactmin === null) {
    throw new Error(
      "Must be used within <ReactminProvider></ReactminProvider>"
    );
  }

  return reactmin;
}
