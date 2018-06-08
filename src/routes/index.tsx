import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from '../components/About'
import Hero from '../components/Hero'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Whitepaper from '../components/Whitepaper'

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Hero} />
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/roadmap" component={Roadmap} />
      <Route exact={true} path="/team" component={Team} />
      <Route exact={true} path="/whitepaper" component={Whitepaper} />
    </Switch>
  )
}

export default Routes