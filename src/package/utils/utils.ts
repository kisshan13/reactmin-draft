import React, { isValidElement } from "react";

import { ActiminComponents, type Component } from "../types";

export function getComponentName(component: React.ReactNode) {
  const componentValue = component?.valueOf() as Component<any>;

  if (!componentValue?.type?.name) {
    throw new Error("Not a custom component.");
  }

  return componentValue.type.name;
}

export function isValidComponentForExtracting(
  children: React.ReactNode,
  component: string | string[]
) {
  if (import.meta.env.DEV) {
    const isArray = Array.isArray(component);
    const componentName = getComponentName(children);

    if (isArray) {
      const isComponentExists = component.find(
        (comp) => componentName === comp
      );

      return isValidElement(children) && !!isComponentExists;
    }

    return isValidElement(children) && componentName === component;
  }

  return true;
}

export function getPropsByComponent(component: string, props: any) {
  if (import.meta.env.DEV) {
    switch (component) {
      case ActiminComponents.TextField:
        return {
          field: props?.field,
          isFunction: false,
          value: props?.value,
          isActionField: false,
        };

      case ActiminComponents.FunctionField:
        return {
          field: props?.field,
          isFunction: true,
          value: props?.value,
          isActionField: false,
        };

      case ActiminComponents.ActionField:
        return {
          field: props?.field,
          isFunction: false,
          isActionField: true,
          component: props?.component,
        };
    }
  }

  return {
    field: props?.field,
    isFunction: typeof props?.value === "function",
    value: props?.value,
    isActionField: !!props?.component,
    component: props?.component,
  };
}
