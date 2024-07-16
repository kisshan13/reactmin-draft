import { memo, useMemo } from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

import { getResourceProps } from "../../utils/utils";
import { DataFieldResource, ResourceType } from "../../types/types";
import { useQuery } from "react-query";

function DataFrame({
  children,
  name,
}: {
  children: React.ReactNode | React.ReactNode[];
  name: string;
}) {
  async function fetchName() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const info = await res.json();

    return info;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: [name],
    queryFn: fetchName,
  });

  const dataField = useMemo(() => {
    const props = getResourceProps<ResourceType<DataFieldResource>[]>({
      children,
    });

    if (!props) {
      return false;
    }

    const columnsHeader = props.map((column) => column.props.name);

    return {
      headers: columnsHeader,
    };
  }, [children]);

  if (!dataField) {
    throw new Error("Error");
  }

  console.log(data, isLoading, error);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {dataField.headers.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </>
  );
}

export default memo(DataFrame);
