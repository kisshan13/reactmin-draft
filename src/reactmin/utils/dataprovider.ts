import type { ActminDataProvider } from "../types/types";

export  function dataProvider<T extends string>(
  props: ActminDataProvider<T>
): ActminDataProvider<T> {
  return props;
}
