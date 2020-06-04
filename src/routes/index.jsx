import React from "react";
import { Route, Switch } from "react-router-dom";

import FeedRoute from "./FeedRoute";
import NewUserRoute from "./NewUserRoute";
import ProfileRoute from "./ProfileRoute";
import UsersRoute from "./UsersRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={FeedRoute}/>
    <Route exact path="/users" component={UsersRoute}/>
    <Route path="/users/:username" component={ProfileRoute}/>
    <Route path="/newuser" component={NewUserRoute}/>
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
