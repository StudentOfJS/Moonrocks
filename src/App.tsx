import * as React from 'react'
import About from './components/About'
import Grid from './components/Grid'
import NavBar from './components/NavBar'
import Router from './routes'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <Router />
          <NavBar />
          <About />
        </Grid>
      </ThemeProvider>
    )
  }
}

export default App
