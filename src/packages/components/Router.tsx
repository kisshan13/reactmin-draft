import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReactminStore } from "../react-min-store";
import { ReactminResource } from "../types/types";
import React, { useEffect, useMemo, useState } from "react";

export default function RegisterRoutes({
  children,
  layout,
}: {
  children: React.ReactNode | React.ReactNode[];
  layout: React.ReactNode;
}) {
  const { store } = useReactminStore<Map<string, ReactminResource>>(
    (store) => store
  );

  const configuration = useMemo(() => {
    const config: ReactminResource[] = [];

    store.forEach((value, key) => {
      config.push(value);
    });

    return config;
  }, [store]);

  console.log(configuration);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={layout}>
          {configuration.map((config) => (
            <Route
              path={config?.path || config.name}
              element={<>{config.path}</>}
            ></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
