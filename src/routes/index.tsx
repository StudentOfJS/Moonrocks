import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from '../components/About'
import Hero from '../components/Hero'

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Hero} />
      <Route exact={true} path="/about" component={About} />
    </Switch>
  )
}

export default Routes