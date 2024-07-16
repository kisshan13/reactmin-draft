import React from "react";

export enum ActiminComponents {
  Resource = "Resource",
  ResourceType = "ResourceType",
}

export type ReactChildren = React.ReactNode | React.ReactNode[];

export type ResourceAction = "create" | "read" | "update" | "delete";

export interface Resource {
  name: string;
  path?: string;
  noLayout?: boolean;
  layout?: React.ReactNode;
}

export interface ResourceType {
  type: ResourceAction;
  component: React.ReactNode;
  isModal?: boolean; // Works only for "update", "create", & "delete".
  role?: string;
}

export interface Component<T> {
  props: T;
  type: {
    name: string;
  };
}
