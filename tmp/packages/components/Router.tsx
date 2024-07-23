import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReactminStore } from "../react-min-store";
import { ReactminResource } from "../types/types";
import React, { memo, useEffect, useMemo, useState } from "react";
import { LucidePersonStanding } from "lucide-react";

function RegisterRoutes({
  children,
  layout,
}: {
  children: React.ReactNode | React.ReactNode[];
  layout: React.ReactNode;
}) {
  const { store } = useReactminStore<Record<string, ReactminResource>>(
    (store) => store
  );

  const configuration = useMemo(() => {
    return Object.keys(store).map((key, i) => {
      return store[key];
    });
  }, [store]);

  useEffect(() => {
    console.log(configuration);
  }, [configuration]);

  return (
    <BrowserRouter>
      <Routes>
        {configuration?.length && (
          <Route element={configuration ? layout : <></>}>
            {configuration.map((config) => (
              <Route
                path={config?.path || config.name}
                element={<>{config.path}</>}
              ></Route>
            ))}
          </Route>
        )}

        {!configuration?.length && (
          <Route path="*" element={<LucidePersonStanding />} />
        )}
      </Routes>

      <div className="_reactmin.config" style={{ display: "none" }}>
        {children}
      </div>
    </BrowserRouter>
  );
}

const Router = memo(RegisterRoutes);

export default Router;
