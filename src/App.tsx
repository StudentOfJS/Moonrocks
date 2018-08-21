import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import FooterBar from "./components/FooterBar/FooterBar";
import NavBar from "./components/NavBar";
import Routes from "./routes";
import { theme, ThemeProvider } from "./theme";

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <React.Fragment>
            <Routes />
            <NavBar />
            <FooterBar />
          </React.Fragment>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
