import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Profile from "../pages/ProfilePage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
