import React, { isValidElement } from "react";

import { ActiminComponents, type Component } from "../types";

export function getComponentName(component: React.ReactNode) {
  const componentValue = component?.valueOf() as Component<any>;

  console.log(componentValue);

  if (!componentValue?.type?.name) {
    throw new Error("Not a custom component.");
  }

  return componentValue.type.name;
}

export function isValidComponentForExtracting(
  children: React.ReactNode,
  component: string | string[]
) {
  const isArray = Array.isArray(component);
  const componentName = getComponentName(children);

  if (isArray) {
    const isComponentExists = component.find((comp) => componentName === comp);

    return isValidElement(children) && !!isComponentExists;
  }

  return isValidElement(children) && componentName === component;
}

export function getPropsByComponent(component: string, props: any) {
  switch (component) {
    case ActiminComponents.TextField:
      return {
        field: props?.field,
        isFunction: false,
        value: props?.value,
      };

    case ActiminComponents.FunctionField:
      return {
        field: props?.field,
        isFunction: true,
        value: props?.value,
      };
  }
}
