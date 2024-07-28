import type { ReactChildren } from "../types";

function DialogContainer({ children }: { children: ReactChildren }) {
  return (
    <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
      {children}
    </div>
  );
}

export default DialogContainer;
