import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLoader from "../components/DefaultLoader";

function BaseRouter({ loader }: { loader?: React.ReactNode }) {
  return (
    <Routes>
      <Route path="*" element={loader || <DefaultLoader />} />
    </Routes>
  );
}

export default BaseRouter;
