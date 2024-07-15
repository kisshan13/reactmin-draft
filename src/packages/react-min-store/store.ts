import { useCallback, useRef } from "react";

function useStore() {
  const store = useRef<Record<string, any>>();

  const get = useCallback(() => store.current, []);
  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Record<string, any>) => {
    store.current = { ...store.current, ...value };
    return subscribers.current.forEach((callback) => callback());
  }, []);

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

export default useStore;
