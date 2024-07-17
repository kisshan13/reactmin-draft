import React from "react";
import "./App.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryClient";
import Reactmin from "./package/core/Reactmin";
import AdminProvider from "./package/core/AdminProvider";
import Resource from "./package/resource/Resource";
import ResourceType from "./package/resource/ResourceType";

// interface AppComponent extends React.HTMLAttributes<HTMLDivElement> {
//   source: string;
// }

// const data = dataProvider({
//   title: "Admin",
// });

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin queryClient={queryClient} name="My React App">
          <AdminProvider>
            <Resource name="user">
              <ResourceType type="create" component={<></>} />
            </Resource>
          </AdminProvider>
        </Reactmin>
      </QueryClientProvider>
    </>
  );
}

export default App;
