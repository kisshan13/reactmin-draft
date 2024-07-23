import { createContext, useContext } from "react";

interface DataActionContext {
  onReadClick: () => void;
  onDeleteClick: () => void;
  onUpdateClick: () => void;
}

export const DataActionContext = createContext<DataActionContext>({} as any);

export function useDataAction() {
  const actions = useContext(DataActionContext);

  if (!actions) {
    throw new Error(
      "useDataAction() hook can only be used within <Dataframe /> Component."
    );
  }

  return actions;
}
