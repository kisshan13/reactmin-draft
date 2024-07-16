import React, { isValidElement } from "react";

import type { Component } from "../types";

export function getComponentName(component: React.ReactNode) {
  const componentValue = component?.valueOf() as Component<any>;

  if (!componentValue?.type?.name) {
    throw new Error("Not a custom component.");
  }

  return componentValue.type.name;
}

export function isValidComponentForExtracting(
  children: React.ReactNode,
  component: string
) {
  return isValidElement(children) || getComponentName(children) !== component;
}
