import { memo } from "react";
import { useResource } from "./Resource";

function Read() {
  return <ResourceExecutor option="READ"></ResourceExecutor>;
}

function Update() {
  return <ResourceExecutor option="UPDATE"></ResourceExecutor>;
}

function Delete() {
  return <ResourceExecutor option="DELETE"></ResourceExecutor>;
}

function Create() {
  return <ResourceExecutor option="CREATE"></ResourceExecutor>;
}
function ResourceExecutor({
  option,
}: {
  option: "CREATE" | "READ" | "UPDATE" | "DELETE";
}) {
  const resource = useResource();

  console.log(resource);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export const ResourceRead = memo(Read);
export const ResourceUpdate = memo(Update);
export const ResourceDelete = memo(Delete);
export const ResourceCreate = memo(Create);
