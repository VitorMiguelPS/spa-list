import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ListPage from "../pages/ListPage";
import ErrorPage from "../pages/ErrorPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/listagem" exact component={ListPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default Routes;
