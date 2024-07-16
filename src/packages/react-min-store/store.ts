import { useCallback, useRef } from "react";

function useStore() {
  const store = useRef<Record<string, any>>({});

  const get = useCallback(() => store.current, []);
  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((key: string, value: any) => {
    const obj: Record<string, any> = {};

    obj[key] = value;
    store.current = { ...store.current, ...obj };
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
