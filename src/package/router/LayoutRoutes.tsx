import { Route, Routes } from "react-router-dom";
import type { Resource, ResourceType } from "../types";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";

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
          <Route path={resource.path || resource.name} element={<>hii</>} />
        ))}
      </Route>
    </Routes>
  );
}

export default LayoutRoutes;
