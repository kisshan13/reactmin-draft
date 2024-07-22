import { memo } from "react";
import DefaultPage from "../components/DefaultPage";
import ResourceEntity from "../resource/ResourceEntity";
import { Resource, ResourceType } from "../types";

function RouteElement({
  resource,
  type,
}: {
  resource: Resource & { types: ResourceType[] };
  type: ResourceType;
}) {
  console.log(resource);
  return (
    <ResourceEntity
      queryKey={resource.name}
      title={resource.name}
      description={resource.name}
      path={resource?.path || resource.name}
    >
      {type.page ? (
        type.page(<>{type.component || <>hii</>}</>)
      ) : (
        <DefaultPage>
          <>{type.component || <></>}</>
        </DefaultPage>
      )}
    </ResourceEntity>
  );
}

export default memo(RouteElement);
