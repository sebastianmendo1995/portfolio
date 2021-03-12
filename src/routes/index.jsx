import React from "reactn";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages";
import { Layout } from "../pages/components/Layout";

export const Routes = (props) => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" render={(props_) => <Home {...props_} />} />
      </Layout>
    </Switch>
  );
};
