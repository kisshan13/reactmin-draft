// import { useQuery } from "react-query";
import { useMemo } from "react";
import type { Dataframe, ReactChildren } from "../types";
import { useDataExtractor } from "./useDataExtractor";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function Dataframe({
  queryKey,
  serials = true,
  children,
}: Dataframe & { children: ReactChildren }) {
  const dataFrame = useDataExtractor(children);

  const fields = useMemo(() => {
    return dataFrame.map((d) => d?.field);
  }, [dataFrame]);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {serials && <TableHead>S No.</TableHead>}
            {fields.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </>
  );
}

export default Dataframe;
