import * as React from 'react'
import NavButton from './components/navbar/NavButton'
import Wrapper from './components/Wrapper'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <h1>test</h1>
          <NavButton>
            testing
          </NavButton>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
