import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from '../pages/ProfilePage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Profile} />
  </Switch>

);

export default Routes;