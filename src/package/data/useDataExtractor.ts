import { useMemo } from "react";
import { ActiminComponents, ReactChildren } from "../types";
import {
  getComponentName,
  isValidComponentForExtracting,
} from "../utils/utils";

function useDataExtractor(children: ReactChildren) {
  const data = useMemo(() => {
    const isArray = Array.isArray(children);

    if (!isArray) {
      if (
        isValidComponentForExtracting(children, [ActiminComponents.TextField])
      ) {
        const props = children?.valueOf() as any;
        const componentName = getComponentName(children);

        if (!props) {
          throw new Error("<Dataframe> children missing props.");
        }

        

      } else {
        throw new Error(
          "<Datafram> must have an valid React component as it's children. Only valid DataField components are supported."
        );
      }
    }
  }, [children]);
}
