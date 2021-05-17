import { isAdmin } from "../utils/isAdmin";
import { isAuth } from "../utils/isAuth";

interface IRoutes {
  path: string;
  title: string;
  hide?: boolean;
}

export const getRoutes = (): IRoutes[] => {
  const _isAuth = !!isAuth();

  const _isAdmin = isAdmin();

  return [
    {
      path: "/",
      title: "Main",
      hide: !_isAuth || !_isAdmin,
    },
    {
      path: "/login",
      title: "Login",
      hide: _isAuth,
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/change-password",
      title: "Change password",
      hide: !_isAuth,
    },
    {
      path: "/logs",
      title: "User logs",
      hide: !_isAuth || !_isAdmin,
    },
  ].filter((i) => !i.hide);
};
