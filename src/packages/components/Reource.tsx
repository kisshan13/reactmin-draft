import type { ReactminResource, ReactminResourceProps } from "../types/types";

function Resource(props: ReactminResourceProps) {
  return <>{props?.children}</>;
}

export default Resource;
