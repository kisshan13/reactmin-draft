import { memo, useMemo } from "react";
import useReactminRouter from "./useReactminRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseRouter from "./BaseRouter";
import type { RouterProps } from "../types";
import LayoutRoutes from "./LayoutRoutes";

function Router({ defaultLoader, layout }: RouterProps) {
  const routerInfo = useReactminRouter();

  const isBaseRouter = useMemo(() => {
    return (
      routerInfo?.layouts?.length === 0 && routerInfo?.noLayouts?.length === 0
    );
  }, [routerInfo]);

  console.log(routerInfo);

  return (
    <BrowserRouter>
      {isBaseRouter && <BaseRouter loader={defaultLoader} />}
      {!isBaseRouter && (
        <>
          {routerInfo?.layouts?.length && (
            <LayoutRoutes resources={routerInfo.layouts} />
          )}
        </>
      )}
    </BrowserRouter>
  );
}

export default memo(Router);
