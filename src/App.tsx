import React from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";
import {
  AdminProvider,
  dataProvider,
  Reactmin,
  Resource,
  ResourceCreate,
  ResourceDelete,
  ResourceRead,
  ResourceUpdate,
} from "./packages";

interface AppComponent extends React.HTMLAttributes<HTMLDivElement> {
  source: string;
}

const data = dataProvider({
  title: "Admin",
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin>
          <AdminProvider queryClient={queryClient} data={data}>
            <Resource name="hello">
              <ResourceCreate />
              <ResourceDelete />
              <ResourceUpdate />
              <ResourceRead />
            </Resource>
            <Resource name="why">
              <ResourceCreate />
              <ResourceDelete />
              <ResourceUpdate />
              <ResourceRead />
            </Resource>
          </AdminProvider>
        </Reactmin>
      </QueryClientProvider>
    </>
  );
}

export default App;
