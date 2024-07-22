import Resource from "../../package/resource/Resource";
import ResourceType from "../../package/resource/ResourceType";

import UserData from "./UserData";

function User() {
  return (
    <Resource  name="user" path="/">
      <ResourceType type="read" component={<UserData />} />
      <ResourceType type="delete" component={<></>} />
    </Resource>
  );
}

export default User;
