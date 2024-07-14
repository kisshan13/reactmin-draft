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
        <TableBody>
          {/* <TableRow>
            <TableCell className="hidden sm:table-cell">
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
              />
            </TableCell>
            <TableCell className="font-medium">
              Laser Lemonade Machine
            </TableCell>
            <TableCell>
              <Badge variant="outline">Draft</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">$499.99</TableCell>
            <TableCell className="hidden md:table-cell">25</TableCell>
            <TableCell className="hidden md:table-cell">
              2023-07-12 10:42 AM
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </>
  );
}

export default memo(DataFrame);
