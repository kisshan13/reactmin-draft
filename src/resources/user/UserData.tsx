import Dataframe from "../../package/data/Dataframe";
import { FunctionField, TextField } from "../../package/data/Fields";

function UserData() {
  return (
    <Dataframe>
      <TextField field="Name" value="name" />
      <FunctionField field="Email" value={(value) => <h1>{value}</h1>} />
    </Dataframe>
  );
}

export default UserData;
