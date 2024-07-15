import React from "react";
import type { QueryClient } from "react-query";

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

export interface ReactminResourceProps {
  name: string;
  path?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export interface ReactminResource {
  component: string;
}
