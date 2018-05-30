import * as React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Hero />
          <NavBar />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
