import { useMemo } from "react";
import { ActiminComponents, DataExtracted, ReactChildren } from "../types";
import {
  getComponentName,
  getPropsByComponent,
  isValidComponentForExtracting,
} from "../utils/utils";

const validComponents = [
  ActiminComponents.TextField,
  ActiminComponents.FunctionField,
  ActiminComponents.ActionField,
];

export function useDataExtractor(children: ReactChildren) {
  const data = useMemo(() => {
    const isArray = Array.isArray(children);

    if (!isArray) {
      return [getDataInfo(children)];
    } else {
      const mappedData = children.map((res) => {
        return getDataInfo(res);
      });

      return mappedData;
    }
  }, [children]);

  return data;
}

function getDataInfo(children: React.ReactNode) {
  if (
    !isValidComponentForExtracting(children, validComponents) &&
    import.meta.env.DEV
  ) {
    throw new Error(
      "<Datafram> must have an valid React component as it's children. Only valid DataField components are supported."
    );
  }

  const props = (children?.valueOf() as any)["props"] as any;
  const componentName = getComponentName(children);

  if (!props && import.meta.env.DEV) {
    throw new Error("<Dataframe> children missing props.");
  }

  return getPropsByComponent(componentName, props);
}
