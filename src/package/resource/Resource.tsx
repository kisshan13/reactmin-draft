import { useEffect } from "react";
import useResourceExtractor from "../hooks/useResourceExtractor";
import { useResourceStore } from "../store/store";
import type { ReactChildren, Resource, ResourceType } from "../types";

function Resource({
  children,
  ...props
}: Resource & { children: ReactChildren }) {
  const resource = useResourceExtractor(children);
  const { store, set } = useResourceStore<Resource & { types: ResourceType[] }>(
    (store) => store[props.name]
  );

  useEffect(() => {
    if (!store && resource) {
      set(props.name, { ...props, types: resource });
    }
  }, [children, store, resource, props]);

  return <></>;
}

export default Resource;
