// import { useQuery } from "react-query";
import { useMemo } from "react";
import type { Dataframe, ReactChildren } from "../types";
import { useDataExtractor } from "./useDataExtractor";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  useResourceEntityVerbose,
} from "../resource/useResourceEntity";
import { useApi } from "../api/useApi";
import { useQuery } from "react-query";
import DefaultLoader from "../components/DefaultLoader";
import { DataActionContext } from "./useDataAction";

function Dataframe({
  serials = true,
  actions = true,
  children,
}: Dataframe & { children: ReactChildren }) {
  const dataFrame = useDataExtractor(children);
  const entityVerbose = useResourceEntityVerbose();

  const api = useApi();

  const { data, isLoading } = useQuery({
    queryKey: [entityVerbose.name],
    queryFn: () =>
      api.find(entityVerbose.name, {
        role: "",
        filters: {
          pagination: {
            page: 1,
            size: 10,
          },
        },
      }),
  });

  const fields = useMemo(() => {
    if (dataFrame?.length) {
      return dataFrame.map((d) => d?.field);
    }

    return [];
  }, [dataFrame]);

  if (isLoading) {
    return <DefaultLoader />;
  }

  const onReadClick = () => {
    console.log("reading");
  };

  const onDeleteClick = () => {
    console.log("delete");
  };

  const onUpdateClick = () => {
    console.log("update");
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {serials && <TableHead>S No.</TableHead>}
            {fields.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
            {actions && <TableHead></TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data &&
            data?.data?.map((d: any, i: number) => (
              <>
                {dataFrame?.length && (
                  <TableRow key={i}>
                    {serials && <TableCell>{i + 1}</TableCell>}
                    {dataFrame.map((frame) => {
                      return (
                        <>
                          {!frame?.isFunction && (
                            <TableCell>{d[frame?.value]}</TableCell>
                          )}

                          {frame?.isFunction && (
                            <TableCell>{frame?.value(d)}</TableCell>
                          )}

                          {frame?.isActionField && (
                            <TableCell>
                              <DataActionContext.Provider
                                value={{
                                  onDeleteClick,
                                  onReadClick,
                                  onUpdateClick,
                                }}
                              >
                                {frame?.component(d)}
                              </DataActionContext.Provider>
                            </TableCell>
                          )}
                        </>
                      );
                    })}
                  </TableRow>
                )}
              </>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Dataframe;
