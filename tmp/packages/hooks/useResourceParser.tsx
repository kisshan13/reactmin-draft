import React, { useMemo } from "react";
import type { IResourceType } from "../types/types";

function useResourceChildrenParser({
  props,
}: {
  props: React.ReactNode | React.ReactNode[];
}): IResourceType[] | boolean {
  const parsedChildren = useMemo(() => {
    const isArray = Array.isArray(props);

    if (!isArray) {
      const value = (props?.valueOf() as any)["props"] as any as IResourceType;

      if (value) {
        return [
          {
            name: value?.name,
            type: value.type,
            component: value.component,
            isModal: value.isModal,
            role: value.role,
          },
        ];
      }

      return false;
    } else {
      const mappedChildren = props.map((child) => {
        const value = (child?.valueOf() as any)[
          "props"
        ] as any as IResourceType;

        if (value) {
          return {
            name: value?.name,
            type: value.type,
            component: value.component,
            isModal: value.isModal,
            role: value.role,
          };
        }

        return false;
      });

      return mappedChildren.filter((child) => !!child);
    }
  }, [props]);

  return parsedChildren;
}

export default useResourceChildrenParser;
