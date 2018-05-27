import * as React from 'react'
import Wrapper from './components/Wrapper'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <h1>test</h1>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
