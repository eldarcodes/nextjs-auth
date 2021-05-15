import { isServer } from "./isServer";
import { find } from "lodash";
import { useSelector } from "react-redux";
import { ReduxDatabase } from "../store";

export const isAuth = (): boolean => {
  const users = useSelector(
    (state: ReduxDatabase) => state.databaseReducer.users
  );

  const userId = !isServer() && localStorage.getItem("user_id");
  const user = find(users, { id: userId });

  return !!user;
};
