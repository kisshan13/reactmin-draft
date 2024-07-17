import { useMemo } from "react";
import { useResourceStore } from "../store/store";
import type { Resource, ResourceType } from "../types";

export default function useReactminRouter(navOnly?: boolean) {
  const { store } = useResourceStore<
    Record<string, Resource & { types: ResourceType[] }>
  >((store) => store);

  const routeInfo = useMemo(() => {
    if (typeof store === "object") {
      const noLayouts: (Resource & { types: ResourceType[] })[] = [] as any;
      const layouts: (Resource & { types: ResourceType[] })[] = [] as any;
      const nav: { name: string; path: string | undefined }[] = [];

      Object.keys(store).forEach((key) => {
        const resource = store[key];

        if (!navOnly) {
          if (resource?.noLayout) {
            noLayouts.push(resource);
          } else {
            layouts.push(resource);
          }
        }

        nav.push({ name: resource.name, path: resource?.path });
      });

      return {
        noLayouts,
        layouts,
        nav,
      };
    }
  }, [store]);

  return routeInfo;
}
