import useReactminRouter from "./useReactminRouter";

export default function useReactminNav() {
  const routerInfo = useReactminRouter(true);

  if (routerInfo?.nav) {
    return routerInfo.nav;
  }

  return null;
}
