import { UserIcon } from "lucide-react";
import type { ActminDataProvider } from "./types/types";

function dataProvider<T extends string>(
  props: ActminDataProvider<T>
): ActminDataProvider<T> {
  return {
    roles: props.roles,
    navIconMapper: props.navIconMapper,
    title: props.title,
  };
}

