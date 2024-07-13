import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import {
  ResourceAttributes,
  ResourceProps,
  ResourceType,
} from "../types/types";

import { lazy, Suspense } from "react";

const Layout = lazy(() => import("../components/layouts/Layout"));

export default function RouteMin({
  props,
}: {
  props: ResourceType<ResourceProps>[];
}) {
  return (
    <Suspense fallback={<>Loading</>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout resource={props} />}>
            {props.map((prop) => (
              <Route
                path={prop.props.name}
                key={prop.props.name}
                element={<></>}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
