import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import useStore from "./store";
import { ReactminResource } from "../types/types";

const ReactminStore = createContext<ReturnType<typeof useStore>>(null as any);

function useReactminStore<T>(selector: (store: any) => Record<string, T>) {
  const store = useContext(ReactminStore);

  if (!store) {
    throw Error("Must be used within a Provider Component.");
  }

  const state = useSyncExternalStore(store.subscribe as any, () =>
    selector(store.get())
  );

  return { store: state as T, set: store.set };
}

function useReactminNav() {
  const { store } = useReactminStore<Record<string, ReactminResource>>(
    (store) => store
  );

  const navigation = useMemo(() => {
    return Object.keys(store).map((key) => {
      return {
        name: store[key].name,
        path: store[key].path,
      };
    });
  }, [store]);

  return navigation;
}

function ReactminStoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactminStore.Provider value={useStore()}>
      {children}
    </ReactminStore.Provider>
  );
}

export { useReactminStore, useReactminNav, ReactminStoreProvider };
