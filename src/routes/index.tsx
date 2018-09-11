import * as React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Whitepaper from "../components/Whitepaper";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/team" component={Team} />
      <Route path="/whitepaper" component={Whitepaper} />
      <Route exact={true} path="/" component={Hero} />
    </Switch>
  );
};

export default Routes;
