import DataField from "../../reactmin/components/data/DataField";
import DataFrame from "../../reactmin/components/data/DataFrame";

function UserDataFrame() {
  return (
    <DataFrame name="user">
      <DataField field="i" name="S No." />
      <DataField field="name" name="Name" />
      <DataField field="email" name="Email" />
      <DataField field="phone" name="Phone No." />
    </DataFrame>
  );
}

export default UserDataFrame;
