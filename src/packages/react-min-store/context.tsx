import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from "react";
import useStore from "./store";

const ReactminStore = createContext<ReturnType<typeof useStore>>(null as any);

function useReactminStore<T>(selector: (store: Map<string, any>) => any) {
  const store = useContext(ReactminStore);

  if (!store) {
    throw Error("Must be used within a Provider Component.");
  }

  const state = useSyncExternalStore(store.subscribe as any, () =>
    selector(store.get())
  );

  return { store: state as T, set: store.set };
};

function ReactminStoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactminStore.Provider value={useStore()}>
      {children}
    </ReactminStore.Provider>
  );
}

export { useReactminStore, ReactminStoreProvider };
