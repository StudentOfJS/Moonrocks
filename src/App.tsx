import * as React from 'react'
import About from './components/About'
import Grid from './components/Grid'
import Hero from './components/Hero'
import HeroFilter from './components/Hero/HeroFilter'
import NavBar from './components/NavBar'
import { theme, ThemeProvider } from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <HeroFilter />
          <Hero />
          <NavBar />
          <About />
        </Grid>
      </ThemeProvider>
    )
  }
}

export default App
