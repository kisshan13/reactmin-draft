import { useCallback, useRef } from "react";

function useStore() {
  const store = useRef<Map<string, any>>(new Map());

  const get = useCallback(() => store.current, []);
  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((key: string, value: any) => {
    store.current?.set(key, value);
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
