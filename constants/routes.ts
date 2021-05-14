import { isAuth } from "../utils/isAuth";

interface IRoutes {
  path: string;
  title: string;
  hide?: boolean;
}

export const getRoutes = (): IRoutes[] => {
  const user = !!isAuth();
  return [
    {
      path: "/",
      title: "Main",
      hide: !user,
    },
    {
      path: "/login",
      title: "Login",
      hide: user,
    },
    {
      path: "/about",
      title: "About",
    },
  ].filter((i) => !i.hide);
};
