import * as React from "react";
import NavBar from "./components/NavBar";
import Routes from "./routes";
import { theme, ThemeProvider } from "./theme";

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Routes />
          <NavBar />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
