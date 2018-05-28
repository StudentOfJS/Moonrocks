import * as React from 'react'
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <NavBar />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
