import ResourceProvider from "../store/context";
import Router from "../router/Router";

import type { AdminProviderProps, ReactChildren } from "../types";

function AdminProvider({
  children,
  ...props
}: AdminProviderProps & { children: ReactChildren }) {
  return (
    <ResourceProvider>
      <Router />
      <div className="__reactmin__">{children}</div>
    </ResourceProvider>
  );
}

export default AdminProvider;
