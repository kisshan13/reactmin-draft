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
        {resources.map((resource) => {
          return resource.types.map((res) => {
            switch (res.type) {
              case "create":
                if (!res.isModal) {
                  return (
                    <Route
                      path={
                        (resource.path ? resource.path : resource.name) + "/new"
                      }
                      element={<RouteElement resource={resource} type={res} />}
                    />
                  );
                }

                return <></>;
              case "read":
                return (
                  <Route
                    path={resource.path ? resource.path : resource.name}
                    element={<RouteElement resource={resource} type={res} />}
                  />
                );
              case "update":
                if (!res.isModal) {
                  return (
                    <Route
                      path={
                        (resource.path ? resource.path : resource.name) +
                        "/:slug/edit"
                      }
                      element={<RouteElement resource={resource} type={res} />}
                    />
                  );
                }

                return <></>;
              case "delete":
                if (!res.isModal) {
                  return (
                    <Route
                      path={
                        (resource.path ? resource.path : resource.name) +
                        "/:slug/delete"
                      }
                      element={<RouteElement resource={resource} type={res} />}
                    />
                  );
                }

                return <></>;

              default:
                return <></>;
            }
          });
        })}
      </Route>
    </Routes>
  );
}

export default memo(LayoutRoutes);
