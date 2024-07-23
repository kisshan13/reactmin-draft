import { createContext, useContext, useState } from "react";
import { ResourceProps, ResourceType } from "../types/types";

type ResourceContextType = {
  resource: ResourceType<ResourceProps>[];
  registerResource: (r: ResourceType<ResourceProps>) => void;
};

const ResourceContext = createContext<ResourceContextType>(
  {} as ResourceContextType
);

export function ResourceProvider({ children }: { children: React.ReactNode }) {
  const [resource, setResource] = useState<ResourceType<ResourceProps>[]>([]);

  function registerResource(r: ResourceType<ResourceProps>) {
    const res = resource.filter((res) => res.props.name !== r.props.name);

    setResource([...res, r]);
  }

  return (
    <ResourceContext.Provider value={{ resource, registerResource }}>
      {children}
    </ResourceContext.Provider>
  );
}

export function useResource() {
  const resource = useContext(ResourceContext);

  if (resource === null) {
    throw new Error(
      "Must be used within <ResourceProvider></ResourceProvider>"
    );
  }

  return resource
}
