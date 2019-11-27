import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Profile from "../pages/ProfilePage";
import SignUp from "../pages/SignupPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/profile" component={Profile} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
