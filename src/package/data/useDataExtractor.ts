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
      if (isValidComponentForExtracting(children, validComponents)) {
        const props = (children?.valueOf() as any)["props"] as any;
        const componentName = getComponentName(children);

        if (!props && import.meta.env.DEV) {
          throw new Error("<Dataframe> children missing props.");
        }

        return [getPropsByComponent(componentName, props)];
      } else {
        if (import.meta.env.DEV) {
          throw new Error(
            "<Datafram> must have an valid React component as it's children. Only valid DataField components are supported."
          );
        }
      }
    } else {
      const mappedData = children.map((res) => {
        if (isValidComponentForExtracting(res, validComponents)) {
          const props = (res?.valueOf() as any)["props"];
          const componentName = getComponentName(res);

          if (!props && import.meta.env.DEV) {
            throw new Error("<Dataframe> children missing props.");
          }

          return getPropsByComponent(componentName, props);
        }

        if (import.meta.env.DEV) {
          throw new Error(
            "<Datafram> must have an valid React component as it's children. Only valid DataField components are supported."
          );
        }
      });

      return mappedData;
    }
  }, [children]);

  return data;
}
