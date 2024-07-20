import { Route, Routes } from "react-router-dom";
import type { Resource, ResourceType } from "../types";
import React, { memo } from "react";
import DefaultLayout from "../components/DefaultLayout";
import RouteElement from "./RouteElement";

function LayoutRoutes({
  resources,
  layout,
}: {
  resources: (Resource & { types: ResourceType[] })[];
  layout?: React.ReactNode;
}) {
  return (
    <Routes>
      <Route element={layout || <DefaultLayout />}>
        {resources.map((resource) => (
          <Route
            path={resource.path || resource.name}
            element={<RouteElement resource={resource} />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default memo(LayoutRoutes);
