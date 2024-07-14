import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ResourceProps, ResourceType } from "../types/types";

import { lazy, Suspense, useEffect } from "react";
import PageLayout from "../components/layouts/PageLayouts";
import { QueryClient } from "react-query";
import { useReactmin } from "../contexts/ReactminContext";

const Layout = lazy(() => import("../components/layouts/Layout"));

export default function RouteMin({
  props,
  queryClient,
}: {
  props: ResourceType<ResourceProps>[];
  queryClient: QueryClient;
}) {
  const { bootstrapReactmin } = useReactmin();

  useEffect(() => {
    bootstrapReactmin({ queryClient });
  }, [queryClient]);

  return (
    <Suspense fallback={<>Loading</>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout resource={props} />}>
            {props.map((prop) => (
              <Route
                path={prop.props.name}
                key={prop.props.name}
                element={
                  <PageLayout name={prop.props.name}>
                    <>{prop.props.dataFrame}</>
                  </PageLayout>
                }
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
