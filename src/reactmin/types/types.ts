export type ViewMode = "TABLE" | "GRID" | "CARD";

export type ResourceType<T> = {
  props: T;
};

export interface ResourceAttributes
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface ResourceProps {
  name: string;
  view: string;
}

export type IconMapper = Record<string, React.ReactNode>;

export interface ActminDataProvider<T extends string> {
  roles: T[];
  title: string;
  navIconMapper: IconMapper;
}
