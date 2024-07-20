import { memo } from "react";
import DefaultPage from "../components/DefaultPage";
import ResourceEntity from "../resource/ResourceEntity";
import { Resource, ResourceType } from "../types";

function RouteElement({
  resource,
}: {
  resource: Resource & { types: ResourceType[] };
}) {
  console.log(resource);
  return (
    <ResourceEntity
      queryKey={resource.name}
      title={resource.name}
      description={resource.name}
    >
      {resource.types[0].page ? (
        resource.types[0].page(<>{resource.types[0].component || <>hii</>}</>)
      ) : (
        <DefaultPage>
          <>{resource.types[0].component || <></>}</>
        </DefaultPage>
      )}
    </ResourceEntity>
  );
}

export default memo(RouteElement);
