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

// interface AppComponent extends React.HTMLAttributes<HTMLDivElement> {
//   source: string;
// }

// const data = dataProvider({
//   title: "Admin",
// });

function Frame() {
  return (
    <Dataframe queryKey="user">
      <TextField field="kishan" value="name" />
      <FunctionField field="S No." value={(value) => <h1>{value}</h1>} />
    </Dataframe>
  );
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Reactmin queryClient={queryClient} name="My React App">
          <AdminProvider>
            <Resource name="user">
              <ResourceType type="create" component={<Frame />} />
            </Resource>
          </AdminProvider>
        </Reactmin>
      </QueryClientProvider>
    </>
  );
}

export default App;
