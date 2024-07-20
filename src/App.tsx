import React from "react";
import "./App.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";
import Reactmin from "./package/core/Reactmin";
import AdminProvider from "./package/core/AdminProvider";
import Resource from "./package/resource/Resource";
import ResourceType from "./package/resource/ResourceType";
import Dataframe from "./package/data/Dataframe";
import { FunctionField, TextField } from "./package/data/Fields";
import { ReactChildren } from "./package/types";
import UserResource from "./resources/User.resource";

function Frame() {
  return (
    <Dataframe queryKey="user">
      <TextField field="kishan" value="name" />
      <FunctionField field="S No." value={(value) => <h1>{value}</h1>} />
    </Dataframe>
  );
}

function Page({ children }: { children: ReactChildren }) {
  return <div className=" p-10 border border-indigo-600">{children}</div>;
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin queryClient={queryClient} name="My React App">
          <AdminProvider>
            <UserResource />
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
