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
import { useResourceEntityVerbose } from "../resource/useResourceEntity";
import { useApi } from "../api/useApi";
import { useQuery } from "react-query";
import DefaultLoader from "../components/DefaultLoader";
import { DataActionContext } from "./useDataAction";
import DataRow from "./DataRow";

function Dataframe({
  serials = true,
  actions = true,
  unique,
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

  const onReadClick = () => {};

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
                  <DataRow
                    data={d}
                    serials={serials}
                    sno={i}
                    frame={dataFrame}
                    queryKey={""}
                    action={actions}
                    key={i}
                    unique={unique}
                  />
                )}
              </>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Dataframe;
