import * as React from 'react'
import NavBar from './components/NavBar'
import Grid from './Grid'
import Routes from './routes'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <Routes />
          <NavBar />
        </Grid>
      </ThemeProvider>
    )
  }
}

export default App
