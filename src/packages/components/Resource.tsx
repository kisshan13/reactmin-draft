import { createContext, memo, useContext, useEffect, useMemo } from "react";
import { useReactminStore } from "../react-min-store";
import type { ReactminResource } from "../types/types";

const ResourceContext = createContext<{ name: string }>(null as any);

export const useResource = () => {
  const name = useContext(ResourceContext);

  if (!name) {
    throw new Error("Must be used within a <Resource></Resource> Component.");
  }

  return name;
};

function Resource({
  children,
  ...props
}: ReactminResource & { children: React.ReactNode | React.ReactNode[] }) {
  const { store, set } = useReactminStore((state) => state.get(props.name));

  useEffect(() => {
    if (!store) {
      set(props.name, props);
    }
    console.log(store);
  }, [props, store]);

  return (
    <ResourceContext.Provider value={{ name: props.name }}>
      {children}
    </ResourceContext.Provider>
  );
}

export default memo(Resource);
