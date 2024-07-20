import { Route, Routes } from "react-router-dom";
import type { Resource, ResourceType } from "../types";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import ResourceEntity from "../resource/ResourceEntity";
import DefaultPage from "../components/DefaultPage";

function LayoutRoutes({
  resources,
  layout,
}: {
  resources: (Resource & { types: ResourceType[] })[];
  layout?: React.ReactNode;
}) {
  console.log(resources);
  return (
    <Routes>
      <Route element={layout || <DefaultLayout />}>
        {resources.map((resource) => (
          <Route
            path={resource.path || resource.name}
            element={
              <ResourceEntity title={resource.name} description={resource.name}>
                {resource.types[0].page ? (
                  resource.types[0].page(
                    <>{resource.types[0].component || <>hii</>}</>
                  )
                ) : (
                  <DefaultPage>
                    <>{resource.types[0].component || <>hii</>}</>
                  </DefaultPage>
                )}
              </ResourceEntity>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default LayoutRoutes;
