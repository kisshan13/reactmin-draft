import React from "react";
import type { QueryClient } from "react-query";
import ApiManager from "./api/manager";

export enum ActiminComponents {
  Resource = "Resource",
  ResourceType = "ResourceType",

  TextField = "TextField",
  FunctionField = "FunctionField",
  ActionField = "ActionField",
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
  path: string;
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
  managers?: ApiManager[];
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
export interface DataFunctionField {
  field: string;
  value: FunctionSignature;
}

export interface DataActionField {
  field: string;
  type: Action[];
  component: (value: any) => ReactChildren;
}

export interface DataExtracted {
  field: string;
  isFunction: boolean;
  value: string | FunctionSignature;
}

export interface DataAPI {
  findOne: (resource: string, data: ManagerPayloadData) => Promise<any>;
  find: (resource: string, data: ManagerPayloadData) => Promise<ApiResponse>;
  del: (resource: string, data: ManagerPayloadData) => Promise<any>;
  update: (resource: string, data: ManagerPayloadData) => Promise<any>;
  create: (resource: string, data: ManagerPayloadData) => Promise<any>;
  custom?: Record<string, any>;
}

export interface ResgiterApiOptions {
  findOne: (data: ManagerPayloadData) => Promise<any>;
  find: (data: ManagerPayloadData) => Promise<ApiResponse>;
  del: (data: ManagerPayloadData) => Promise<any>;
  update: (data: ManagerPayloadData) => Promise<any>;
  create: (data: ManagerPayloadData) => Promise<any>;
}

export interface ApiResponse {
  data: any;
  metadata: Pagination;
}

export interface DataApiWithManagers {
  managers: ApiManager[];
  operations: DataAPI;
}

export interface Pagination {
  page: number;
  size: number;
  totalPage: number;
  totalItems: number;
}

interface PayloadPagination {
  pagination: Omit<Omit<Pagination, "totalPage">, "totalItems">;
}

export interface ManagerPayloadData {
  role: string;
  filters: PayloadPagination & Record<string, any>;
  data?: any;
  id?: any;
}
