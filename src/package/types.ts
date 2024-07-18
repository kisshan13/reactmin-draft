import React from "react";
import type { QueryClient } from "react-query";

export enum ActiminComponents {
  Resource = "Resource",
  ResourceType = "ResourceType",

  TextField = "TextField",
}

export interface Reactmin {
  queryClient: QueryClient;
  name: string;
}

export type ReactChildren = React.ReactNode | React.ReactNode[];

export type ResourceAction = "create" | "read" | "update" | "delete";

export type FunctionSignature = (props: any) => any;

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

export interface AdminProviderProps {
  layout?: React.ReactNode;
  defaultLoader?: React.ReactNode;
}

export interface RouterProps {
  layout?: React.ReactNode;
  defaultLoader?: React.ReactNode;
}

export interface Dataframe {
  queryKey: string;
}

export interface DataTextField {
  field: string;
  value: string;
}

export interface DataFunctionField {
  field: string;
  value: FunctionSignature;
}
