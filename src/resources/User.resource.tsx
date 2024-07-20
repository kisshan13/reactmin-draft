import Resource from "../package/resource/Resource";
import ResourceType from "../package/resource/ResourceType";

function UserResource() {
  return (
    <Resource name="user" path="/">
      <ResourceType type="read" component={<>Hello</>} />
    </Resource>
  );
}

export default UserResource;
