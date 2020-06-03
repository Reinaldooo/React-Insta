import React from "react";
import { Route, Switch } from "react-router-dom";

import FeedRoute from "./FeedRoute";
import NewUserRoute from "./NewUserRoute";
import ProfileRoute from "./ProfileRoute";
import UsersRoute from "./UsersRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <FeedRoute />
    </Route>
    <Route exact path="/users">
      <UsersRoute />
    </Route>
    <Route path="/users/:username">
      <ProfileRoute />
    </Route>
    <Route path="/newuser">
      <NewUserRoute />
    </Route>
    {/* 404 page */}
    <Route
      render={() => (
        <div className="error">
          Sorry, we could not find the page you are looking for!
        </div>
      )}
    />
  </Switch>
);

export default Routes;
