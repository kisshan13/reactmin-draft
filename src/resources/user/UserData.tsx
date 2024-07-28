import {
  Edit2Icon,
  EyeIcon,
  PencilIcon,
  Trash2Icon,
  TrashIcon,
  User,
} from "lucide-react";
import Dataframe from "../../package/data/Dataframe";
import {
  ActionField,
  FunctionField,
  TextField,
} from "../../package/data/Fields";
import { useDataAction } from "../../package/data/useDataAction";

function UserActionField({ value }: { value: any }) {
  const actions = useDataAction();

  return (
    <div className=" flex items-center gap-5">
      <button onClick={actions.onUpdateClick}>
        <Edit2Icon />
      </button>
      <button>
        <TrashIcon />
      </button>
      <button onClick={actions.onReadClick}>
        <EyeIcon />
      </button>
    </div>
  );
}

function UserData() {
  return (
    <Dataframe unique="id">
      <TextField field="Name" value="name" />
      <FunctionField
        field="Address"
        value={(value) => (
          <h1>
            {value?.address?.street} <br /> {value?.address?.city}
          </h1>
        )}
      />
      <ActionField
        field=""
        type={["delete", "read", "update"]}
        component={(value) => <UserActionField value={value} />}
      />
    </Dataframe>
  );
}

export default UserData;
