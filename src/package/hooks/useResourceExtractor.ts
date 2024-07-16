import { useMemo } from "react";

import { isValidComponentForExtracting } from "../utils/utils";

import { ReactChildren, ResourceType, ActiminComponents } from "../types";

function useResourceExtractor(children: ReactChildren): ResourceType[] {
  const resource = useMemo(() => {
    const isArray = Array.isArray(children);

    if (!isArray) {
      if (
        isValidComponentForExtracting(children, ActiminComponents.ResourceType)
      ) {
        const props = (children?.valueOf() as any)["props"] as ResourceType;

        if (!props) {
          throw new Error("<ResourceType> missing required props.");
        }

        return [
          {
            role: props.role,
            isModal: props.isModal,
            component: props.component,
            type: props.type,
          },
        ];
      } else {
        throw new Error(
          "<Resource> must have an valid React Component as it's children. Only <ResourceType> Component allowed."
        );
      }
    } else {
      const mappedResources = children.map((res) => {
        if (
          isValidComponentForExtracting(
            children,
            ActiminComponents.ResourceType
          )
        ) {
          const props = (res?.valueOf() as any)["props"] as ResourceType;

          if (!props) {
            throw new Error("<ResourceType> missing required props.");
          }

          return {
            role: props.role,
            isModal: props.isModal,
            component: props.component,
            type: props.type,
          };
        } else {
        }
        throw new Error(
          "<Resource> must have an valid React Component as it's children. Only <ResourceType> Component allowed."
        );
      });

      return mappedResources;
    }
  }, [children]);

  return resource;
}

export default useResourceExtractor;
