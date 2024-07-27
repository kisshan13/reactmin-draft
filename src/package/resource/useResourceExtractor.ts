import React, { useMemo } from "react";

import { isValidComponentForExtracting } from "../utils/utils";

import { ReactChildren, ResourceType, ActiminComponents } from "../types";

function useResourceExtractor(children: ReactChildren): ResourceType[] {
  const resource = useMemo(() => {
    const isArray = Array.isArray(children);

    if (!isArray) {
      return [getResourceInfo(children)];
    } else {
      const mappedResources = children.map((res) => {
        return getResourceInfo(res);
      });
      return mappedResources;
    }
  }, [children]);

  return resource;
}

function getResourceInfo(children: React.ReactNode) {
  if (
    !isValidComponentForExtracting(children, ActiminComponents.ResourceType) &&
    import.meta.env.DEV
  ) {
    throw new Error(
      "<Resource> must have an valid React Component as it's children. Only <ResourceType> Component allowed."
    );
  }

  const props = (children?.valueOf() as any)["props"] as ResourceType;

  if (!props && import.meta.env.DEV) {
    throw new Error("<ResourceType> missing required props");
  }

  const isDeleteOrUpdate =
    props?.type === "delete" ||
    props?.type === "update" ||
    props?.type === "create";

  const isModal = isDeleteOrUpdate
    ? props?.isModal === false
      ? false
      : true
    : false;

  return {
    role: props.role,
    isModal: isModal,
    component: props.component,
    type: props.type,
    page: props?.page,
  };
}

export default useResourceExtractor;
