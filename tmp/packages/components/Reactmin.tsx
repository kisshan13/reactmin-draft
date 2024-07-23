import React from "react";
import { ReactminProvider } from "../contexts/ReactminContext";
import { ReactminStoreProvider } from "../react-min-store";

function Reactmin({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactminProvider>
        <ReactminStoreProvider>
          <>{children}</>
        </ReactminStoreProvider>
      </ReactminProvider>
    </>
  );
}

export default Reactmin;
