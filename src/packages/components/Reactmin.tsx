import React from "react";
import { ReactminProvider } from "../contexts/ReactminContext";

function Reactmin({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactminProvider>
        <>{children}</>
      </ReactminProvider>
    </>
  );
}

export default Reactmin;
