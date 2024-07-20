import { createContext, useContext } from "react";
import type { ResourceEntity } from "../types";

export const ResourceEntityContext = createContext<ResourceEntity>({} as any);

export function useResourceEntity() {
    const entity = useContext(ResourceEntityContext);

    if(!entity) {
        throw new Error("null resource entity. Please use within <ResourceEntityContext.Provider>")
    }

    return entity;
}