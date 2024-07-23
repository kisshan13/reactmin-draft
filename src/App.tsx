import React from "react";
import "./App.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";
import Reactmin from "./package/core/Reactmin";
import AdminProvider from "./package/core/AdminProvider";
import { ReactChildren } from "./package/types";
import User from "./resources/user/User";
import userApiManager from "./resources/user/manager";


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin queryClient={queryClient} name="My React App">
          <AdminProvider managers={[userApiManager]}>
            <User />
          </AdminProvider>
        </Reactmin>
      </QueryClientProvider>
    </>
  );
}

export default App;
