import * as React from 'react'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <h1>test</h1>
      </ThemeProvider>
    )
  }
}

export default App
