import { Provider } from "react-redux";
import store from "../store";

import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
