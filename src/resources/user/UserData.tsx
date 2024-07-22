import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Dataframe from "../../package/data/Dataframe";
import {
  ActionField,
  FunctionField,
  TextField,
} from "../../package/data/Fields";

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
        read={(value) => (
          <button>
            <EyeIcon />
          </button>
        )}
        del={(value) => (
          <button>
            <Trash2Icon />
          </button>
        )}
        update={(value) => (
          <button>
            <PencilIcon />
          </button>
        )}
      />
    </Dataframe>
  );
}

export default UserData;
