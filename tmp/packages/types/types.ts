import React from "react";
import type { QueryClient } from "react-query";

type RType = "CREATE" | "READ" | "UPDATE" | "DELETE";

export enum ReactminComponents {
  Resource = "Resource",
}

export type ReactminContextType = IReactminConfig & {
  bootstrap: (config: IReactminConfig) => void;
};

export interface IReactminConfig {
  queryClient: QueryClient;
}

export interface ReactminData {
  title: string;
}

export interface ReactminResource {
  name: string;
  path?: string;
}

export interface IResourceType {
  name?: string;
  type: RType;
  component?: React.ReactNode;
  role?: string;
  isModal?: boolean;
}