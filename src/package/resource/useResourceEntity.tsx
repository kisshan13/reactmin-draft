import { createContext, useContext, useMemo } from "react";
import type {
  Resource,
  ResourceAction,
  ResourceEntity,
  ResourceType,
} from "../types";

export const ResourceEntityContext = createContext<ResourceEntity>({} as any);
export const ResourceEntityContextVerbose = createContext<
  Resource & { types: ResourceType[] }
>({} as any);

export function useResourceEntity() {
  const entity = useContext(ResourceEntityContext);

  if (!entity) {
    throw new Error(
      "null resource entity. Please use within <ResourceEntityContext.Provider>"
    );
  }

  return entity;
}

export function useResourceEntityVerbose() {
  const entity = useContext(ResourceEntityContextVerbose);

  if (!entity) {
    throw new Error(
      "null resource entity. Please use within <ResourceEntityContextVerbose.Provider>"
    );
  }

  const config = useMemo(() => {
    const operationConfig: Record<ResourceAction, ResourceType> = {} as any;

    entity.types?.forEach((type) => (operationConfig[type.type] = type));

    return {
      operationConfig,
      ...entity,
    };
  }, [entity]);

  return config;
}
