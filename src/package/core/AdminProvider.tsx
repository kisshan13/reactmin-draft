import ResourceProvider from "../store/context";
import Router from "../router/Router";

import type { AdminProviderProps, ReactChildren } from "../types";
import DataAPI from "../api/ApiProvider";

function AdminProvider({
  children,
  managers,
  ...props
}: AdminProviderProps & { children: ReactChildren }) {
  return (
    <DataAPI managers={managers}>
      <ResourceProvider>
        <Router />
        <div className="__reactmin__">{children}</div>
      </ResourceProvider>
    </DataAPI>
  );
}

export default AdminProvider;
