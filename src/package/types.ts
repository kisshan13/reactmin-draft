import React from "react";
import type { QueryClient } from "react-query";

export enum ActiminComponents {
  Resource = "Resource",
  ResourceType = "ResourceType",

  TextField = "TextField",
  FunctionField = "FunctionField",
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
  pageTitle?: string;
  pageDescription?: string;
}

export interface ResourceEntity {
  title: string;
  description: string;
}

export interface ResourceType {
  type: ResourceAction;
  component: React.ReactNode;
  isModal?: boolean; // Works only for "update", "create", & "delete".
  role?: string;
  page?: (children: any) => ReactChildren;
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
  serials?: boolean;
}

export interface DataTextField {
  field: string;
  value: string;
}

export interface DataFunctionField {
  field: string;
  value: FunctionSignature;
}

export interface DataExtracted {
  field: string;
  isFunction: boolean;
  value: string | FunctionSignature;
}
