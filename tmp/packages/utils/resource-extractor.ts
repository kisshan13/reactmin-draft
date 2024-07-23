import React from "react";
import { ReactminResource, ReactminResourceProps } from "../types/types";

export default function resourceExtractor(
  children: React.ReactNode | React.ReactNode[]
) {
  console.log(children);
  const isArray = Array.isArray(children);

  if (!isArray) {
    const value = children?.valueOf() as Record<string, any>;

    const componentName = value["type"]["name"];

    if (value) {
      return [
        {
          name: value?.props?.name,
          path: value?.props?.path,
          component: componentName,
          ...(value?.props?.children
            ? { children: resourceExtractor(value?.props?.children) }
            : {}),
        },
      ] as (ReactminResource & ReactminResourceProps)[];
    }
  } else {
    const mappedChildren = children.map((child) => {
      const value = child?.valueOf() as Record<string, any>;
      const componentName = value["type"]["name"];

      if (value) {
        return {
          name: value?.props?.name,
          path: value?.props?.path,
          component: componentName,
          ...(value?.props?.children
            ? { children: resourceExtractor(value?.props?.children) }
            : {}),
        } as ReactminResource & ReactminResourceProps;
      }

      return false;
    });

    return mappedChildren.filter((child) => !!child);
  }
}
