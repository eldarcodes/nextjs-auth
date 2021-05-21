import { Provider } from "react-redux";
import store from "../store";
import { database as defaultDatabase } from "../data/database";

import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";
import { isServer } from "../utils/isServer";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Quiz } from "../components/Quiz";

// Binding events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
      <Quiz />
    </Provider>
  );
}
