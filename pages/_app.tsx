import { Provider } from "react-redux";
import store from "../store";
import { database as defaultDatabase } from "../data/database";

import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";
import { isServer } from "../utils/isServer";

export default function MyApp({ Component, pageProps }) {
  if (!isServer()) {
    const localStorageDatabase = localStorage.getItem("database");

    if (!localStorageDatabase) {
      localStorage.setItem("database", JSON.stringify(defaultDatabase));
    }
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
