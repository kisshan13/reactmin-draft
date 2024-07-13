import React from "react";
import type { ResourceProps, ResourceType } from "../types/types";

export function getResourceProps({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const isArray = Array.isArray(children);

  if (!isArray) {
    const value = children?.valueOf();

    if (value) {
      return [value] as ResourceType<ResourceProps>[];
    }
  } else {
    const mappedChildren = children.map((child) => {
      const value = child?.valueOf();

      if (value) {
        return value as ResourceType<ResourceProps>;
      }

      return false;
    });

    return mappedChildren.filter((child) => !!child);
  }
}
