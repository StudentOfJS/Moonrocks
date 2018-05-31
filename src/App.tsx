import * as React from 'react'
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
        </Grid>
      </ThemeProvider>
    )
  }
}

export default App
