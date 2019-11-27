import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Profile from "../pages/ProfilePage";
import SignUp from "../pages/SignupPage";
import FeedPage from "../pages/FeedPage";
import CoursePage from "../pages/CoursesPage"
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/profile" component={Profile} />
    <Route path="/signup" component={SignUp} />
    <Route path="/feed" component={FeedPage} />
    <Route path="/courses" component={CoursePage} />

    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default Routes;
