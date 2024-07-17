import { LoaderPinwheelIcon } from "lucide-react";

function DefaultLoader() {
  return (
    <div className=" fixed w-screen h-screen top-0 left-0 flex items-center justify-center">
      <LoaderPinwheelIcon className=" w-[50px] h-[50px] animate-spin" />
    </div>
  );
}

export default DefaultLoader;
