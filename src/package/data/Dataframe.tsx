// import { useQuery } from "react-query";
import { useMemo } from "react";
import type { Dataframe, ReactChildren } from "../types";
import { useDataExtractor } from "./useDataExtractor";

function Dataframe({
  queryKey,
  children,
}: Dataframe & { children: ReactChildren }) {
  const dataFrame = useDataExtractor(children);

  const fields = useMemo(() => {
    return dataFrame.map((d) => d?.field);
  }, [dataFrame]);

  return <></>;
}

export default Dataframe;
