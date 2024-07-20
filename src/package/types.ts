import React from "react";
import type { QueryClient } from "react-query";
import ApiManager from "./data-api/manager";

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

export type Action = "read" | "delete" | "update";

export type FunctionSignature = (props: any) => any;

export interface Resource {
  name: string;
  path?: string;
  noLayout?: boolean;
  layout?: React.ReactNode;
  manager?: ApiManager;
  pageTitle?: string;
  pageDescription?: string;
}

export interface ResourceEntity {
  title: string;
  description: string;
  queryKey: string;
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
  serials?: boolean;
  actions?: boolean;
}

export interface DataTextField {
  field: string;
  value: string;
}

export interface DataFunctionField {
  field: string;
  value: FunctionSignature;
}

export interface DataActionField {
  field: string;
  actionType: Action;
}

export interface DataExtracted {
  field: string;
  isFunction: boolean;
  value: string | FunctionSignature;
}

export interface DataAPI {
  findOne: (resource: string, data: any) => Promise<any>;
  find: (resource: string, data: any) => Promise<any>;
  del: (resource: string, data: any) => Promise<any>;
  update: (resource: string, data: any) => Promise<any>;
  create: (resource: string, data: any) => Promise<any>;
  custom?: Record<string, any>;
}
export interface ResgiterApiOptions {
  findOne: (data: any) => Promise<any>;
  find: (data: any) => Promise<any>;
  del: (data: any) => Promise<any>;
  update: (data: any) => Promise<any>;
  create: (data: any) => Promise<any>;
}

export interface DataApiWithManagers {
  managers: ApiManager[];
  operations: DataAPI;
}
