import { memo, useEffect } from "react";
import { useReactminStore } from "../react-min-store";
import type { ReactminResource } from "../types/types";
import useResourceChildrenParser from "../hooks/useResourceParser";

function Resource({
  children,
  ...props
}: ReactminResource & { children: React.ReactNode | React.ReactNode[] }) {
  const { store, set } = useReactminStore((state) => state[props.name]);

  const resourceConfig = useResourceChildrenParser({ props: children });

  useEffect(() => {
    if (!store && (resourceConfig || resourceConfig === false)) {
      set(props.name, { ...props, resource: resourceConfig });
    }
  }, [resourceConfig]);

  return <></>;
}

export default memo(Resource);
