import { ReactminContext } from "./ReactminProvider";
import type { ReactChildren, Reactmin } from "../types";

function Reactmin({
  children,
  ...props
}: Reactmin & { children: ReactChildren }) {
  return (
    <ReactminContext.Provider value={props}>
      {children}
    </ReactminContext.Provider>
  );
}

export default Reactmin;
