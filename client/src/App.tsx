import * as React from 'react';
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>Start token sale site</div>
      </ThemeProvider>
    );
  }
}

export default App;
