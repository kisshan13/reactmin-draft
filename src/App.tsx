import React from "react";
import "./App.css";
import AdminProvider from "./reactmin/AdminProvider";
import Resource from "./reactmin/components/Resource";
import dataProvider from "./reactmin/utils/dataprovider";
import { UserIcon } from "lucide-react";
import DataFrame from "./reactmin/components/data/DataFrame";
import DataField from "./reactmin/components/data/DataField";

interface AppComponent extends React.HTMLAttributes<HTMLDivElement> {
  source: string;
}

const provider = dataProvider({
  navIconMapper: {
    user: <UserIcon />,
  },
  roles: ["user", "admin"],
  title: "Home",
});

function App() {
  return (
    <>
      <AdminProvider dataProvider={provider}>
        <Resource name="user" view="TABLE" />
        <Resource name="dod" view="TABLE" />
        <Resource name="user" view="TABLE" />
        <Resource name="user" view="TABLE" />
      </AdminProvider>
    </>
  );
}

export default App;
