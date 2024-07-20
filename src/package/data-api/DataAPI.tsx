import { DataAPI } from "../types";
import ApiManager from "./manager";

function DataAPI({ managers }: { managers: ApiManager[] }) {
  const operations: DataAPI = {
    findOne: async (resource, data) => {
      const manager = managers.find((manager) =>
        manager.getResourceApi(resource, "findOne")
      );

      if (!manager) {
        console.warn(
          `No api manager found for resource ${resource} [operation type : findOne] `
        );
        return;
      }

      const methods = manager.getResourceApi(resource, "findOne");
      
      if(methods) {
        return methods(data)
      }
    },
  };

  return <></>;
}

export default DataAPI;
