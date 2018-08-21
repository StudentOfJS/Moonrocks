import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { theme, ThemeProvider } from "./theme";

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <React.Fragment>
            <Routes />
          </React.Fragment>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
