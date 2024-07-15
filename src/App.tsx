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

// const provider = dataProvider({
//   navIconMapper: {
//     user: <UserIcon />,
//   },
//   roles: ["user", "admin"],
//   title: "Home",
// });

const data = dataProvider({
  title: "Admin",
});

function ResourceUser() {
  return (
    <Resource name="hello">
      <ResourceCreate />
      <ResourceDelete />
      <ResourceUpdate />
      <ResourceRead />
    </Resource>
  );
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin>
          <AdminProvider queryClient={queryClient} data={data}>
            <ResourceUser />
            <Resource name="hello">
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
