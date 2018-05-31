import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from '../components/About'
import Hero from '../components/Hero'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Hero} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;