import { useState } from "react";
import { useResourceEntityVerbose } from "../resource/useResourceEntity";
import type { Data } from "../types";
import { TableCell, TableRow } from "../ui/table";
import { DataActionContext } from "./useDataAction";
import { useNavigate } from "react-router-dom";

interface DataRowProps {
  queryKey: string;
  serials?: boolean;
  action?: boolean;
  sno?: number;
  frame: Data[];
  data: any;
  unique: string;
}

function DataRow({
  frame,
  queryKey,
  action,
  serials,
  sno,
  data,
  unique,
}: DataRowProps) {
  const entityVerbose = useResourceEntityVerbose();
  const [currentAction, setCurrentAction] = useState<
    "read" | "delete" | "update"
  >();

  const navigate = useNavigate();

  console.log(entityVerbose);

  const onAction = (type: "read" | "delete" | "update") => {
    setCurrentAction(type);

    switch (type) {
      case "read":
        onRead();
      case "update":
      case "delete":
    }
  };

  const onRead = () => {
    if (entityVerbose.operationConfig.read.isModal) {
      return;
    }

    navigate(
      `${entityVerbose.path === "/" ? "" : entityVerbose.path}/${data[unique]}`
    );
  };

  return (
    <TableRow>
      {serials && <TableCell>{sno}</TableCell>}
      {frame.map((df, i) => {
        return (
          <>
            {!df?.isFunction && !df?.isActionField && (
              <TableCell key={i}>{data[df?.value]}</TableCell>
            )}

            {df?.isFunction && <TableCell key={i}>{df?.value(data)}</TableCell>}
            {df?.isActionField && df.component && (
              <TableCell key={i}>
                <DataActionContext.Provider
                  value={{
                    onDeleteClick: () => onAction("delete"),
                    onReadClick: () => onAction("read"),
                    onUpdateClick: () => onAction("update"),
                  }}
                >
                  {df?.component(data)}
                </DataActionContext.Provider>
              </TableCell>
            )}
          </>
        );
      })}
    </TableRow>
  );
}

export default DataRow;
