import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from "react";
import type { Resource, ResourceType } from "../types";

export const ResourceStore = createContext<ReturnType<typeof useStore>>(
  {} as any
);

export function useStore() {
  const store = useRef<Record<string, any>>();
  const subscribers = useRef(new Set<() => void>());

  const get = useCallback(() => store.current, []);

  const set = useCallback(
    (key: string, value: Resource & { types: ResourceType[] }) => {
      const obj: Record<string, any> = {};

      obj[key] = value;

      store.current = { ...store.current, ...obj };
      return subscribers.current.forEach((callback) => callback());
    },
    []
  );

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return subscribers.current.forEach((callback) => callback());
  }, []);

  return {
    get,
    set,
    subscribe,
  };
}

export function useResourceStore<T>(
  selector: (store: any) => Record<string, T>
) {
  const store = useContext(ResourceStore);

  if (!store) {
    throw new Error(
      `useResourceStore() must be used within the <ResourceProvider> Component.`
    );
  }

  const state = useSyncExternalStore(store.subscribe as any, () =>
    selector(store.get())
  );

  return {
    store: state as T,
    set: store.set,
  };
}
