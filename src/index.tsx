import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "./theme";

// tslint:disable-next-line:no-unused-expression
injectGlobal`{
  body {
    @import url('https://fonts.googleapis.com/css?family=Kirang+Haerang|Roboto');
    margin: 0; 
    padding: 0; 
  }

}
`;
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
