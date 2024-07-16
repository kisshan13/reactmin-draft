import React from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";
import {
  AdminProvider,
  dataProvider,
  Reactmin,
  Resource,
  ResourceType,
} from "./packages";

interface AppComponent extends React.HTMLAttributes<HTMLDivElement> {
  source: string;
}

const data = dataProvider({
  title: "Admin",
});

function App() {
  console.log(<ResourceType type="CREATE" name="Hello" role="*" />);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin>
          <AdminProvider queryClient={queryClient} data={data}>
            <Resource name="hello">
              <ResourceType type="CREATE" name="Hello" role="*" />
            </Resource>
            <Resource name="why">
              <ResourceType type="CREATE" name="Hello" role="*" />
            </Resource>
            <Resource name="hi">
              <ResourceType type="CREATE" name="Hello" role="*" />
            </Resource>
          </AdminProvider>
        </Reactmin>
      </QueryClientProvider>
    </>
  );
}

export default App;
