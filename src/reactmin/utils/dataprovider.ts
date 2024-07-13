import type { ActminDataProvider } from "../types/types";

export default function dataProvider<T extends string>(
  props: ActminDataProvider<T>
): ActminDataProvider<T> {
  return props;
}
