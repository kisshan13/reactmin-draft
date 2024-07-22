import type { ReactChildren, Resource, ResourceType } from "../types";
import { ResourceEntityContextVerbose } from "./useResourceEntity";

export default function ResourceEntityVerbose({
  resource,
  children,
}: {
  resource: Resource & { types: ResourceType[] };
  children: ReactChildren;
}) {
  return (
    <ResourceEntityContextVerbose.Provider value={{ ...resource }}>
      {children}
    </ResourceEntityContextVerbose.Provider>
  );
}
