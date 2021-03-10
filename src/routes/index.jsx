import React from "reactn";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages";

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={(props_) => <Home {...props_} />} />
    </Switch>
  );
};
