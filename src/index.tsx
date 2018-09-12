import * as React from "react";
import { CookiesProvider } from "react-cookie";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
