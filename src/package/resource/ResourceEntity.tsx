import type { ReactChildren, ResourceEntity } from "../types";
import { ResourceEntityContext } from "./useResourceEntity";

function ResourceEntity({
  children,
  ...props
}: ResourceEntity & { children: ReactChildren }) {
  return (
    <ResourceEntityContext.Provider value={props}>
      {children}
    </ResourceEntityContext.Provider>
  );
}

export default ResourceEntity;
