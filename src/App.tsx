import React from "react";
import "./App.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";
import Reactmin from "./package/core/Reactmin";
import AdminProvider from "./package/core/AdminProvider";
import { ReactChildren } from "./package/types";
import User from "./resources/user/User";


function Page({ children }: { children: ReactChildren }) {
  return <div className=" p-10 border border-indigo-600">{children}</div>;
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin queryClient={queryClient} name="My React App">
          <AdminProvider>
            <User />
            {/* <Resource name="user">
              <ResourceType
                type="create"
                component={<Frame />}
                page={(children) => <Page>{children}</Page>}
              />
            </Resource> */}
          </AdminProvider>
        </Reactmin>
      </QueryClientProvider>
    </>
  );
}

export default App;
