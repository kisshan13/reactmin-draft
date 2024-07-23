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
      <button>
        <Edit2Icon />
      </button>
      <button>
        <TrashIcon />
      </button>
      <button>
        <EyeIcon />
      </button>
    </div>
  );
}

function UserData() {
  return (
    <Dataframe>
      <TextField field="Title" value="title" />
      <FunctionField
        field="Completed"
        value={(value) => <h1>{value?.title}</h1>}
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
